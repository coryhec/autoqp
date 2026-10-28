import { useEffect, useRef, useState } from "react";
import { testimonials } from "@/data/survey";

export function Testimonials() {
  const ref = useRef<HTMLElement>(null);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const [visible, setVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  // Track expanded states for individual cards using an object mapper
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});

  // Touch gesture state variables
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Configuration Constants
  const minSwipeDistance = 50;
  const itemsPerPage = 3;
  
  // Cutoff limit set to 315 characters to cleanly accommodate your benchmark text (312 chars)
  const CHARACTER_LIMIT = 315; 
  
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  // Navigation handlers reset expanded cards so the next page starts clean
  const nextPage = () => {
    setExpandedCards({});
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setExpandedCards({});
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  // 1. Intersection Observer for Entry Visibility with explicit TypeScript guarding
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Check if any card on the current page is expanded
  const hasExpandedCard = Object.values(expandedCards).some(Boolean);

  // 2. Autoplay Loop Functionality (Pauses on hover OR if a card is expanded)
  useEffect(() => {
    if (isHovered || hasExpandedCard) {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
      return;
    }
    
    autoPlayTimerRef.current = setInterval(() => {
      nextPage();
    }, 3500); // 3.5 seconds cycle

    return () => {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    };
  }, [isHovered, hasExpandedCard, totalPages]);

  // 3. Touch Gesture Handlers for Swipe Controls
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0]?.clientX ?? null);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0]?.clientX ?? null);
  };

  const onTouchEnd = () => {
    if (touchStart === null || touchEnd === null) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      nextPage();
    } else if (isRightSwipe) {
      prevPage();
    }
  };

  // Helper function to truncate clean at a space boundary instead of breaking mid-word
  const getTruncatedText = (text: string, limit: number) => {
    if (text.length <= limit) return text;
    const subString = text.slice(0, limit);
    const lastSpaceIdx = subString.lastIndexOf(" ");
    return (lastSpaceIdx > 0 ? subString.slice(0, lastSpaceIdx) : subString) + "...";
  };

  // Slice array data for active view window
  const activeTestimonials = testimonials.slice(
    currentIndex * itemsPerPage,
    currentIndex * itemsPerPage + itemsPerPage
  );

  return (
    <section id="testimonials" ref={ref} className="mx-auto max-w-6xl scroll-mt-24 px-6 pb-20">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-primary">Testimonials</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">Students are hooked.</h2>
        </div>
        
        {/* Manual Navigation Controls */}
        <div className="flex gap-2">
          <button 
            onClick={prevPage} 
            aria-label="Previous testimonials" 
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card transition hover:bg-secondary text-foreground font-mono"
          >
            ←
          </button>
          <button 
            onClick={nextPage} 
            aria-label="Next testimonials" 
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card transition hover:bg-secondary text-foreground font-mono"
          >
            →
          </button>
        </div>
      </div>

      {/* Main Interactive Slider Viewport */}
      <div 
        className="mt-10 overflow-hidden cursor-grab active:cursor-grabbing" 
        onTouchStart={onTouchStart} 
        onTouchMove={onTouchMove} 
        onTouchEnd={onTouchEnd} 
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* items-start keeps neighbor cards from stretching into giant boxes dynamically */}
        <div 
          key={currentIndex} 
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start animate-in fade-in-0 slide-in-from-right-24 duration-700 ease-out"
        >
          {activeTestimonials.map((t, i) => {
            const isLongText = t.quote.length > CHARACTER_LIMIT;
            const isExpanded = !!expandedCards[t.name];
            
            const displayedQuote = isLongText && !isExpanded 
              ? getTruncatedText(t.quote, CHARACTER_LIMIT) 
              : t.quote;

            return (
              <figure 
                key={t.name} 
                className={`flex flex-col justify-between rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-glow motion-reduce:animate-none motion-reduce:opacity-100 h-full ${visible ? "opacity-100" : "opacity-0"}`} 
                style={{ animationDelay: `${i * 75}ms` }}
              >
                <div className="flex-grow">
                  <blockquote className="text-foreground transition-all duration-300">
                    "{displayedQuote}"
                    {isLongText && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation(); // Avoid triggering parent sliding hooks
                          setExpandedCards(prev => ({ ...prev, [t.name]: !prev[t.name] }));
                        }}
                        className="ml-2 font-mono text-xs font-bold text-primary underline hover:text-primary/80 transition-colors inline-block whitespace-nowrap"
                      >
                        {isExpanded ? "Show Less" : "Show More"}
                      </button>
                    )}
                  </blockquote>
                </div>

                <figcaption className="mt-6 border-t border-border pt-5">
                  <div className="flex items-center gap-3">
                    {t.avatar ? (
                      <img 
                        src={t.avatar} 
                        alt={`${t.name}'s profile photo`} 
                        width={48} 
                        height={48} 
                        loading="lazy" 
                        className="h-12 w-12 shrink-0 rounded-full border border-primary/30 object-cover object-center" 
                      />
                    ) : (
                      <span 
                        aria-label={`${t.name}'s profile photo placeholder`} 
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-secondary font-mono text-sm text-muted-foreground uppercase"
                      >
                        {t.name.split(" ").map((part) => part[0]).slice(0, 2).join("")}
                      </span>
                    )}
                    <div className="min-w-0 font-mono text-sm">
                      <p className="break-words text-primary">{t.name}</p>
                      <p className="mt-1 text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                  <p className={`mt-4 font-mono text-xs ${t.grades ? "text-primary" : "text-muted-foreground"}`}>
                    {t.grades ? `Achieved ${t.grades}` : "Achieved — grades pending"}
                  </p>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>

      {/* Bottom Pagination Dots Indicators */}
      <div className="mt-8 flex justify-center gap-2">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button 
            key={i} 
            onClick={() => {
              setExpandedCards({});
              setCurrentIndex(i);
            }} 
            className={`h-2 rounded-full transition-all duration-300 ${currentIndex === i ? "w-8 bg-primary" : "w-2 bg-border hover:bg-muted-foreground/40"}`} 
            aria-label={`Go to slide page ${i + 1}`} 
          />
        ))}
      </div>
    </section>
  );
}
