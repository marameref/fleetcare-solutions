import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { TESTIMONIALS } from "@/data/site";

const AUTOPLAY_MS = 6000;
const SWIPE_THRESHOLD = 48;

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const count = TESTIMONIALS.length;
  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + count) % count), [count]);

  // Auto-play with infinite looping; pauses on hover/focus.
  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(next, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [paused, next]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
    if (e.key === "ArrowRight") { e.preventDefault(); next(); }
  };

  const current = TESTIMONIALS[index];

  return (
    <section className="py-20 lg:py-28 bg-secondary/40">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-xs font-bold tracking-[0.2em] text-accent-gold">TESTIMONIALS</div>
        <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-primary">What Our Customers Say</h2>
        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="Customer testimonials"
          tabIndex={0}
          onKeyDown={onKeyDown}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX; }}
          onTouchEnd={(e) => {
            const start = touchStartX.current;
            touchStartX.current = null;
            if (start === null) return;
            const dx = e.changedTouches[0].clientX - start;
            if (dx <= -SWIPE_THRESHOLD) next();
            else if (dx >= SWIPE_THRESHOLD) prev();
          }}
          className="mt-12 relative bg-card border border-border rounded-3xl p-8 lg:p-12 shadow-premium outline-none focus-visible:ring-2 focus-visible:ring-accent-gold"
        >
          <div className="flex justify-center gap-1 mb-5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-accent-gold text-accent-gold" />
            ))}
          </div>
          <div key={index} className="fade-up" aria-live="polite">
            <p className="text-lg lg:text-xl text-foreground leading-relaxed font-medium">
              "{current.quote}"
            </p>
            <div className="mt-6">
              <div className="font-bold text-primary">{current.name}</div>
              <div className="text-sm text-muted-foreground">{current.role}</div>
            </div>
          </div>
          <div className="mt-8 flex items-center justify-center gap-3">
            <button onClick={prev} aria-label="Previous" className="h-10 w-10 rounded-full border border-border hover:bg-primary hover:text-white hover:border-primary transition-colors flex items-center justify-center">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Testimonial ${i + 1}`}
                  aria-current={i === index}
                  className={`h-2 rounded-full transition-all ${i === index ? "w-8 bg-accent-gold" : "w-2 bg-border"}`}
                />
              ))}
            </div>
            <button onClick={next} aria-label="Next" className="h-10 w-10 rounded-full border border-border hover:bg-primary hover:text-white hover:border-primary transition-colors flex items-center justify-center">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
