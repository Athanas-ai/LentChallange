import { cn } from "@/lib/utils";
import { type Reflection } from "@shared/schema";

interface ScriptureCardProps {
  reflection: Reflection;
  className?: string;
}

export function ScriptureCard({ reflection, className }: ScriptureCardProps) {
  return (
    <div className={cn("relative p-8 rounded-2xl bg-card/40 border border-white/5 shadow-lg backdrop-blur-sm overflow-hidden group", className)}>
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
        <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L14.5 9.5H22L16 14L18.5 21.5L12 17L5.5 21.5L8 14L2 9.5H9.5L12 2Z" />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center space-y-6">
        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-[0.2em] uppercase">
          Scripture
        </span>
        
        <p className="font-serif text-xl md:text-2xl leading-relaxed text-foreground/90 italic">
          "{reflection.scripture}"
        </p>
        
        <div className="w-12 h-[1px] bg-primary/30" />
        
        <p className="font-display text-sm text-primary font-medium tracking-wide">
          {reflection.verseReference}
        </p>
      </div>
    </div>
  );
}
