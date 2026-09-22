import { useEffect, useRef } from "react";

/** Observes every .reveal / .reveal-zoom / .line-mask on the page and marks it visible. */
export function useReveals(dependency?: unknown, ready = true) {
  const done = useRef<WeakSet<Element>>(new WeakSet());
  useEffect(() => {
    if (!ready) return;
    const els = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal, .reveal-zoom, .line-mask"),
    );
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !done.current.has(e.target)) {
            done.current.add(e.target);
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );
    els.forEach((el) => {
      if (done.current.has(el)) return;
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.92) {
        done.current.add(el);
        el.classList.add("is-in");
      } else io.observe(el);
    });
    return () => io.disconnect();
  }, [dependency, ready]);
}

export function Reveal({
  children,
  delay = 0,
  mode = "up",
  className = "",
  as: Tag = "div",
}: {
  children?: React.ReactNode;
  delay?: number;
  mode?: "up" | "zoom";
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}) {
  const cls = [mode === "zoom" ? "reveal-zoom" : "reveal", className].filter(Boolean).join(" ");
  const style = { "--rd": `${delay}ms` } as React.CSSProperties;
  const El = Tag as React.ElementType;
  return (
    <El className={cls} style={style}>
      {children}
    </El>
  );
}

/** Headline whose lines rise out of a mask, one after another. */
export function Lines({
  lines,
  className = "",
  delay = 0,
  step = 110,
  as: Tag = "h2",
}: {
  lines: (string | React.ReactNode)[];
  className?: string;
  delay?: number;
  step?: number;
  as?: keyof React.JSX.IntrinsicElements;
}) {
  const El = Tag as React.ElementType;
  return (
    <El className={className}>
      {lines.map((l, i) => (
        <span className="line-mask" key={i} style={{ ["--rd" as string]: `${delay + i * step}ms` }}>
          <span>{l}</span>
        </span>
      ))}
    </El>
  );
}
