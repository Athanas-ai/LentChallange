## Packages
framer-motion | Page transitions and animations
date-fns | Date manipulation for calculating Lent days
lucide-react | Icons (already in base, but ensuring it's noted)

## Notes
Tailwind Config - extend fontFamily:
fontFamily: {
  sans: ["Inter", "sans-serif"],
  serif: ["Libre Baskerville", "serif"],
  display: ["Cinzel", "serif"], 
}
Colors:
- Background: #0a0a0a (Deep charcoal/black)
- Surface: #1a1a2e (Deep Navy)
- Accent: #c5a059 (Muted Gold/Bronze)
- Text: #e2e8f0 (Off-white/Slate-200)

This is a CLIENT-SIDE only app. 
Hooks will mock API calls and use localStorage.
Data for 40 days will be stored in `client/src/lib/data.ts`.
