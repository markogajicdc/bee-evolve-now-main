import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Zap, BarChart3 } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { useMemo } from "react";

// Renders a regular hexagon with (slightly) rounded corners using SVG
const FloatingHexagon: React.FC<{
  size: number;                 // px
  top: string;                  // e.g. "32%"
  left?: string;                // e.g. "10%"
  right?: string;               // e.g. "5%"
  colorClass: string;           // e.g. "text-primary/30"
  filled?: boolean;             // filled vs outline
  delayMs?: number;             // animation delay
}> = ({ size, top, left, right, colorClass, filled = false, delayMs = 0 }) => {
  // Regular hex points (flat-top) in a normalized 100x100 viewBox
  const points = useMemo(() => {
    const cx = 50, cy = 50, r = 45; // radius
    // flat-top hexagon angles: -30, 30, 90, 150, 210, 270 deg
    const deg = [-30, 30, 90, 150, 210, 270];
    return deg
      .map(a => {
        const t = (Math.PI / 180) * a;
        return `${cx + r * Math.cos(t)},${cy + r * Math.sin(t)}`;
      })
      .join(" ");
  }, []);

  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={`absolute animate-pulse ${colorClass}`}
      style={{
        top,
        left,
        right,
        // small random rotation for variety:
        transform: `rotate(${Math.random() * 20 - 10}deg)`,
        animationDelay: `${delayMs}ms`,
      }}
    >
      <polygon
        points={points}
        // stroke-linejoin rounds the corners visually (slight rounding)
        strokeLinejoin="round"
        stroke="currentColor"
        fill={filled ? "currentColor" : "transparent"}
        strokeWidth={filled ? 2 : 2}
      />
    </svg>
  );
};


const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">

      
      {/* Floating Hexagons */}
      <div className="absolute top-20 left-10 w-16 h-16 border-2 border-primary/20 transform rotate-45 animate-hexagon" style={{clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)'}} />
      <div className="absolute top-40 right-20 w-12 h-12 border border-accent/30 transform rotate-12 animate-hexagon delay-1000" style={{clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)'}} />
      <div className="absolute bottom-32 left-1/4 w-20 h-20 border border-secondary/20 transform -rotate-12 animate-hexagon delay-2000" style={{clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)'}} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Automate
            </span>{" "}
            Your Business
            <br />
            <span className="text-foreground">Into the Future</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your operations with Industry 4.0 automation solutions. 
            From RPA bots to advanced BI analytics, we help businesses scale efficiently and intelligently.
          </p>

          {/* Key Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center space-x-2 bg-card/50 backdrop-blur-sm rounded-lg px-4 py-2 border border-border">
              <Bot className="h-5 w-5 text-primary" />
              <span className="text-sm text-foreground">RPA Automation</span>
            </div>
            <div className="flex items-center space-x-2 bg-card/50 backdrop-blur-sm rounded-lg px-4 py-2 border border-border">
              <Zap className="h-5 w-5 text-secondary" />
              <span className="text-sm text-foreground">Smart Alerts</span>
            </div>
            <div className="flex items-center space-x-2 bg-card/50 backdrop-blur-sm rounded-lg px-4 py-2 border border-border">
              <BarChart3 className="h-5 w-5 text-accent" />
              <span className="text-sm text-foreground">BI Solutions</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="hero"
              size="lg"
              onClick={() => scrollToSection("products")}
              className="px-8 text-black"
            >
              Explore Solutions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button
              variant="hero"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="px-8 text-black"
            >
              Schedule a Demo
            </Button>
          </div>
        </div>
      </div>

      {/* Animated Hexagonal Elements */}
      {/* Animated Hexagonal Elements — random spawn, bigger, rounded corners */}
      {useMemo(() => {
        // Generate 12 hexagons (your 6 + 6 more)
        const count = 12;

        // pick from these tailwind color classes (uses currentColor in SVG)
        const colorClasses = [
          "text-primary/20",
          "text-primary/30",
          "text-secondary/20",
          "text-secondary/30",
          "text-accent/20",
          "text-accent/30",
        ];

        // helper: random % within safe viewport (keep away from edges a bit)
        const pct = (min: number, max: number) =>
          `${Math.floor(Math.random() * (max - min) + min)}%`;

        // helper: choose left or right so they’re not all on one side
        const leftOrRight = () => (Math.random() > 0.5 ? { left: pct(5, 85) } : { right: pct(5, 85) });

        // sizes (px): bigger than before
        const sizes = [56, 64, 72, 84, 96, 112, 128];

        return Array.from({ length: count }).map((_, i) => {
          const size = sizes[Math.floor(Math.random() * sizes.length)];
          const colorClass = colorClasses[Math.floor(Math.random() * colorClasses.length)];
          const pos = leftOrRight();
          const delayMs = Math.floor(Math.random() * 2000); // 0–2000ms
          const filled = Math.random() > 0.5; // mix of filled & outline

          return (
            <FloatingHexagon
              key={`hex-${i}`}
              size={size}
              top={pct(8, 85)}
              {...pos}
              colorClass={colorClass}
              filled={filled}
              delayMs={delayMs}
            />
          );
        });
      }, [])}


    
    </section>
  );
};

export default Hero;