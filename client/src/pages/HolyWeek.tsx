import { Navigation } from "@/components/Navigation";
import { holyWeekData } from "@/lib/data";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Crown, BookOpen } from "lucide-react";

export default function HolyWeek() {
  return (
    <div className="min-h-screen pb-24 sm:pt-24 bg-cross-pattern">
      <header className="pt-8 pb-6 px-6 text-center sm:pt-0">
        <h1 className="text-3xl font-display font-bold text-foreground tracking-[0.2em] uppercase mb-2">
          Holy Week
        </h1>
        <p className="text-muted-foreground text-sm font-serif italic max-w-xs mx-auto">
          "By his wounds we are healed."
        </p>
      </header>

      {/* Mobile View: Accordion */}
      <main className="px-4 max-w-md mx-auto mt-4 sm:hidden">
        <Accordion type="single" collapsible className="space-y-4">
          {holyWeekData.map((day, index) => (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <AccordionItem 
                value={day.day} 
                className="border border-white/5 bg-card/40 rounded-xl px-4 backdrop-blur-sm overflow-hidden data-[state=open]:border-primary/30 transition-all duration-300"
              >
                <AccordionTrigger className="hover:no-underline py-5 group">
                  <div className="flex flex-col items-start text-left">
                    <span className="text-xs font-bold uppercase tracking-widest text-primary/80 mb-1 group-hover:text-primary transition-colors">
                      {day.day}
                    </span>
                    <span className="font-display text-lg text-foreground">
                      {day.title}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6 pt-2">
                  <div className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {day.explanation}
                    </p>
                    
                    <div className="bg-black/20 rounded-lg p-4 border border-white/5">
                      <div className="flex items-center gap-2 mb-2 text-primary">
                        <BookOpen className="w-4 h-4" />
                        <span className="text-xs font-bold uppercase tracking-wider">Scripture</span>
                      </div>
                      <p className="text-sm font-serif italic text-foreground/80">
                        {day.scripture}
                      </p>
                    </div>

                    <div className="border-l-2 border-primary/40 pl-4 py-1">
                      <p className="text-sm font-medium text-primary mb-1 uppercase tracking-wider text-[10px]">Reflection</p>
                      <p className="text-foreground/90 text-sm leading-relaxed">
                        {day.reflectionPrompt}
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </main>

      {/* Desktop View: Grid */}
      <main className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 max-w-6xl mx-auto mt-12">
        {holyWeekData.map((day, index) => (
          <motion.div
            key={day.day}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="group"
          >
            <div className="h-full bg-card/30 border border-white/5 rounded-3xl p-8 backdrop-blur-xl shadow-2xl hover:border-primary/40 transition-all duration-500 hover:-translate-y-2 flex flex-col">
              <div className="mb-6">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary block mb-2">
                  {day.day}
                </span>
                <h2 className="text-2xl font-display font-bold text-foreground tracking-widest leading-tight group-hover:text-primary transition-colors">
                  {day.title}
                </h2>
              </div>

              <div className="space-y-8 flex-grow">
                <p className="text-foreground/70 leading-relaxed font-serif italic text-base">
                  {day.explanation}
                </p>

                <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10 group-hover:bg-primary/10 transition-colors">
                  <div className="flex items-center gap-3 mb-3 text-primary">
                    <BookOpen className="w-5 h-5" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Holy Scripture</span>
                  </div>
                  <p className="text-sm font-serif italic text-primary/90 leading-relaxed">
                    "{day.scripture}"
                  </p>
                </div>

                <div className="relative pl-6">
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/60 to-transparent" />
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-3">Reflection Prompt</h4>
                  <p className="text-foreground/90 text-base leading-relaxed italic">
                    {day.reflectionPrompt}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </main>

      <div className="mt-16 pb-12 text-center opacity-30">
        <Crown className="w-10 h-10 mx-auto mb-4 text-primary" />
        <p className="text-xs uppercase tracking-[0.5em] font-display">Consummatum Est</p>
      </div>

      <Navigation />
    </div>
  );
}
