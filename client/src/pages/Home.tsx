import { useState, useMemo } from "react";
import { useReflection } from "@/hooks/use-reflections";
import { DayProgress } from "@/components/DayProgress";
import { ScriptureCard } from "@/components/ScriptureCard";
import { Navigation } from "@/components/Navigation";
import { LENT_START_DATE } from "@/lib/data";
import { format, differenceInDays, startOfDay } from "date-fns";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, PenLine, Flame, Target } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  // Calculate current day of Lent (1-40)
  const today = startOfDay(new Date());
  const lentStart = startOfDay(LENT_START_DATE);
  
  // Calculate raw difference
  const diffDays = differenceInDays(today, lentStart) + 1;
  
  // Clamp between 1 and 40
  const initialDay = Math.max(1, Math.min(40, diffDays));

  // Allow user to navigate days
  const [viewDay, setViewDay] = useState(initialDay);

  const { data: reflection, isLoading } = useReflection(viewDay);

  const handlePrev = () => setViewDay(d => Math.max(1, d - 1));
  const handleNext = () => setViewDay(d => Math.min(40, d + 1));

  return (
    <div className="min-h-screen pb-24 sm:pt-24 bg-cross-pattern">
      {/* Header */}
      <header className="pt-8 pb-6 px-6 sm:pt-0">
        <div className="max-w-2xl mx-auto flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-display font-bold text-foreground tracking-wider sm:hidden">
              Forty
            </h1>
            <span className="text-xs text-muted-foreground font-mono ml-auto">
              {format(today, "MMMM d, yyyy")}
            </span>
          </div>
          <DayProgress currentDay={viewDay} totalDays={40} />
        </div>
      </header>

      <main className="px-4 max-w-2xl mx-auto space-y-8">
        <div className="flex items-center justify-between text-muted-foreground py-2 bg-card/20 rounded-full px-2 sm:px-4 backdrop-blur-sm border border-white/5">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={handlePrev} 
            disabled={viewDay <= 1}
            className="hover:text-primary hover:bg-primary/10 rounded-full h-10 w-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          
          <div className="text-center">
            <span className="font-display text-xl font-bold text-foreground block leading-none">
              Day {viewDay}
            </span>
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium">of Forty</span>
          </div>
          
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={handleNext} 
            disabled={viewDay >= 40}
            className="hover:text-primary hover:bg-primary/10 rounded-full h-10 w-10"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>

        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div 
              key="loader"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex justify-center py-24"
            >
              <div className="w-10 h-10 border-2 border-primary border-t-transparent rounded-full animate-spin" />
            </motion.div>
          ) : reflection ? (
            <motion.div
              key={reflection.day}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="space-y-8"
            >
              <ScriptureCard reflection={reflection} />

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="bg-card/30 border border-white/5 rounded-2xl p-8 backdrop-blur-md shadow-xl">
                  <div className="flex items-center gap-3 mb-4 text-primary">
                    <Flame className="w-6 h-6" />
                    <h3 className="font-display font-bold text-sm uppercase tracking-widest">Reflection</h3>
                  </div>
                  <p className="text-foreground/80 leading-relaxed text-base">
                    {reflection.reflection}
                  </p>
                </div>

                <div className="bg-card/30 border border-white/5 rounded-2xl p-8 backdrop-blur-md shadow-xl border-l-primary/20">
                  <div className="flex items-center gap-3 mb-4 text-primary">
                    <Target className="w-6 h-6" />
                    <h3 className="font-display font-bold text-sm uppercase tracking-widest">Challenge</h3>
                  </div>
                  <p className="text-foreground/80 leading-relaxed text-base italic">
                    {reflection.challenge}
                  </p>
                </div>
              </div>

              <div className="pt-8 flex justify-center">
                <Link href="/journal">
                  <Button 
                    className="
                      bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20
                      rounded-full px-10 py-7 text-lg shadow-2xl shadow-black/40
                      transition-all duration-500 group relative overflow-hidden
                    "
                  >
                    <span className="relative z-10 flex items-center">
                      <PenLine className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                      Reflect in Journal
                    </span>
                  </Button>
                </Link>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </main>

      <Navigation />
    </div>

  );
}
