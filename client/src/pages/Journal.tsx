import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { useJournal, useCreateJournalEntry, useDeleteJournalEntry } from "@/hooks/use-journal";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Trash2, Save, Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function Journal() {
  const { data: entries, isLoading } = useJournal();
  const createEntry = useCreateJournalEntry();
  const deleteEntry = useDeleteJournalEntry();
  const { toast } = useToast();
  
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newEntryContent, setNewEntryContent] = useState("");

  const handleSave = async () => {
    if (!newEntryContent.trim()) return;
    
    try {
      await createEntry.mutateAsync({
        content: newEntryContent,
        date: new Date().toISOString()
      });
      
      setNewEntryContent("");
      setIsDialogOpen(false);
      toast({
        title: "Entry saved",
        description: "Your reflection has been recorded.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save entry.",
        variant: "destructive",
      });
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteEntry.mutateAsync(id);
      toast({
        title: "Entry deleted",
        description: "The journal entry has been removed.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete entry.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen pb-24 sm:pt-24 bg-cross-pattern">
      <header className="pt-8 pb-6 px-6 border-b border-white/5 bg-background/50 backdrop-blur-xl sticky top-0 sm:top-20 z-40">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-display font-bold text-foreground tracking-wider">
            My Journal
          </h1>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full shadow-xl shadow-primary/20 px-8">
                <Plus className="w-5 h-5 mr-2" />
                New Entry
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-2xl bg-card border-white/10 shadow-2xl">
              <DialogHeader>
                <DialogTitle className="font-display text-xl tracking-widest text-primary uppercase">New Reflection</DialogTitle>
              </DialogHeader>
              <div className="py-6">
                <Textarea
                  placeholder="What is God speaking to you today?"
                  className="min-h-[300px] resize-none bg-background/50 border-white/10 focus:border-primary/50 text-lg leading-relaxed p-6 rounded-2xl"
                  value={newEntryContent}
                  onChange={(e) => setNewEntryContent(e.target.value)}
                />
              </div>
              <DialogFooter>
                <Button 
                  onClick={handleSave} 
                  disabled={createEntry.isPending || !newEntryContent.trim()}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-6 text-lg rounded-xl"
                >
                  {createEntry.isPending ? "Saving..." : "Save Reflection"}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </header>

      <main className="px-6 max-w-5xl mx-auto mt-10">
        {isLoading ? (
          <div className="flex justify-center py-32">
            <div className="w-12 h-12 border-2 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
        ) : entries?.length === 0 ? (
          <div className="text-center py-32 opacity-40">
            <p className="font-serif italic text-2xl mb-4">"Be still and know..."</p>
            <p className="text-sm tracking-widest uppercase">No entries yet. Start your journey today.</p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-start">
            <AnimatePresence initial={false}>
              {entries?.map((entry) => (
                <motion.div
                  key={entry.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                  className="bg-card/40 border border-white/5 rounded-2xl p-8 backdrop-blur-md shadow-lg group hover:border-primary/30 transition-all duration-300 flex flex-col min-h-[250px]"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex flex-col">
                      <span className="font-display font-bold text-primary text-sm uppercase tracking-widest">
                        {format(new Date(entry.date), "MMMM d")}
                      </span>
                      <span className="text-[10px] text-muted-foreground uppercase font-mono mt-1">
                        {format(new Date(entry.date), "yyyy • h:mm a")}
                      </span>
                    </div>
                    
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-destructive opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-full hover:bg-destructive/10">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent className="bg-card border-white/10">
                        <AlertDialogHeader>
                          <AlertDialogTitle className="font-display uppercase tracking-wider">Delete this entry?</AlertDialogTitle>
                          <AlertDialogDescription className="text-muted-foreground">
                            This action cannot be undone. Your sacred reflection will be permanently removed.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel className="border-white/10 hover:bg-white/5 hover:text-foreground rounded-full">Cancel</AlertDialogCancel>
                          <AlertDialogAction 
                            onClick={() => handleDelete(entry.id)}
                            className="bg-destructive hover:bg-destructive/90 text-destructive-foreground rounded-full px-6"
                          >
                            Delete
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                  
                  <p className="text-foreground/90 leading-relaxed whitespace-pre-wrap font-serif text-base italic flex-grow">
                    {entry.content}
                  </p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </main>

      <Navigation />
    </div>

  );
}
