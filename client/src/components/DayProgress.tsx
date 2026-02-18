import { motion } from "framer-motion";

interface DayProgressProps {
  currentDay: number;
  totalDays: number;
}

export function DayProgress({ currentDay, totalDays = 40 }: DayProgressProps) {
  const progress = Math.min((currentDay / totalDays) * 100, 100);

  return (
    <div className="w-full space-y-2">
      <div className="flex justify-between items-end text-xs text-muted-foreground uppercase tracking-wider font-medium">
        <span>Day {currentDay}</span>
        <span>{totalDays} Days</span>
      </div>
      <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-primary/60 to-primary rounded-full shadow-[0_0_10px_rgba(197,160,89,0.3)]"
        />
      </div>
    </div>
  );
}
