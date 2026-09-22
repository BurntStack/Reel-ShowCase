import { useEffect, useRef, useState } from "react";

/**
 * A looping muted "clip": stills cross-dissolve with a slow drift so the frame
 * reads as fabric in motion. Autoplays only while in view, pauses when not.
 */
export function Film({
  frames,
  interval = 4200,
  alt,
  className = "",
  reel = false,
  caption,
  startDelay = 0,
}: {
  frames: string[];
  interval?: number;
  alt: string;
  className?: string;
  reel?: boolean;
  caption?: string;
  startDelay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => setInView(e.isIntersecting),
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!inView || frames.length < 2) return;
    const t = window.setTimeout(() => {
      const id = window.setInterval(() => setIdx((i) => (i + 1) % frames.length), interval);
      timer.current = id;
    }, startDelay);
    return () => {
      window.clearTimeout(t);
      if (timer.current) {
        window.clearInterval(timer.current);
        timer.current = null;
      }
    };
  }, [inView, frames.length, interval, startDelay]);

  const timer = useRef<number | null>(null);

  return (
    <div ref={ref} className={"overflow-hidden bg-beige " + className}>
      {frames.map((f, i) => (
        <div key={f + i} className={"film-frame " + (i === idx ? "is-active" : "")}>
          <img
            src={f}
            alt={i === idx ? alt : ""}
            aria-hidden={i !== idx}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
      ))}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-ink/15" />

      {reel && (
        <div className="absolute inset-x-3 top-3 flex gap-1.5">
          {frames.map((f, i) => (
            <div key={f + i} className="h-[3px] flex-1 overflow-hidden rounded-full bg-ivory/35">
              <div
                className="h-full bg-ivory"
                style={
                  i < idx
                    ? { width: "100%" }
                    : i === idx && inView
                      ? { width: "100%", animation: `segfill ${interval}ms linear forwards` }
                      : { width: "0%" }
                }
              />
            </div>
          ))}
        </div>
      )}

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-3 sm:p-4">
        <span className="flex items-center gap-2 text-ivory">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-light opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold-light" />
          </span>
          <span className="eyebrow text-ivory/85">{reel ? "Reel · looping" : "Looping"}</span>
        </span>
        {caption && (
          <span className="max-w-[62%] text-right font-display text-[13px] leading-tight text-ivory/90 italic">
            {caption}
          </span>
        )}
      </div>
    </div>
  );
}
