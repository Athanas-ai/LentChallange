import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Landing() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-background">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-cross-pattern opacity-30" />

      <div className="relative z-10 max-w-md px-6 text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="inline-block mb-4 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold tracking-[0.2em] uppercase">
            Lent 2026
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground leading-tight tracking-wide mb-6">
            Don't Just Fast.<br />
            <span className="text-primary italic">Build.</span>
          </h1>
          <p className="text-lg text-muted-foreground font-serif leading-relaxed max-w-sm mx-auto">
            Forty days of silence, scripture, and intentional action to reconstruct your inner life.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Link href="/home">
            <Button className="
              h-14 px-8 rounded-full text-lg font-medium
              bg-primary text-primary-foreground 
              hover:bg-primary/90 hover:scale-105
              shadow-[0_0_30px_-5px_rgba(197,160,89,0.4)]
              transition-all duration-300
            ">
              Begin the Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-0 right-0 text-center"
      >
        <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground/40">
          A Companion for the Wilderness
        </p>
      </motion.div>
    </div>
  );
}
