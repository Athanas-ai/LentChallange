import { Link, useLocation } from "wouter";
import { Home, BookOpen, Crown } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [location] = useLocation();

  const navItems = [
    { href: "/", label: "Today", icon: Home },
    { href: "/journal", label: "Journal", icon: BookOpen },
    { href: "/holy-week", label: "Holy Week", icon: Crown },
  ];

  return (
    <>
      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-t border-white/5 pb-safe sm:hidden">
        <div className="flex justify-around items-center h-16 max-w-md mx-auto px-4">
          {navItems.map((item) => {
            const isActive = location === item.href;
            return (
              <Link key={item.href} href={item.href}>
                <div
                  className={cn(
                    "flex flex-col items-center justify-center space-y-1 w-16 cursor-pointer transition-all duration-300",
                    isActive ? "text-primary -translate-y-1" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <item.icon
                    size={24}
                    strokeWidth={isActive ? 2.5 : 1.5}
                    className={cn("transition-all duration-300", isActive && "drop-shadow-[0_0_8px_rgba(197,160,89,0.5)]")}
                  />
                  <span className="text-[10px] font-medium tracking-wide uppercase">{item.label}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Desktop Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-white/5 hidden sm:block">
        <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/">
            <h1 className="text-2xl font-display font-bold text-foreground tracking-widest cursor-pointer hover:text-primary transition-colors">
              Forty
            </h1>
          </Link>
          <div className="flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = location === item.href;
              return (
                <Link key={item.href} href={item.href}>
                  <div
                    className={cn(
                      "flex items-center gap-2 cursor-pointer transition-all duration-300 py-2 border-b-2",
                      isActive 
                        ? "text-primary border-primary" 
                        : "text-muted-foreground border-transparent hover:text-foreground hover:border-white/10"
                    )}
                  >
                    <item.icon size={18} strokeWidth={isActive ? 2 : 1.5} />
                    <span className="text-sm font-medium tracking-wide uppercase">{item.label}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
}
