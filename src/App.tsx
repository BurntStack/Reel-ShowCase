import React, { useEffect, useState, Suspense } from "react";
import { useRoute } from "./router";
import { Footer, Nav, Rail } from "./components/Chrome";
import { Intro } from "./components/Intro";
import { IntroB } from "./components/IntroB";
import { installImageFallback } from "./media";
import { useReveals } from "./components/Reveal";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Collections } from "./pages/Collections";
import { CollectionDetail } from "./pages/CollectionDetail";

// Lazy-load heavier pages for faster initial load
const Lookbook = React.lazy(() =>
  import("./pages/Lookbook").then((m) => ({ default: m.Lookbook }))
);
const Testimonials = React.lazy(() =>
  import("./pages/Testimonials").then((m) => ({ default: m.Testimonials }))
);
const Visit = React.lazy(() =>
  import("./pages/Visit").then((m) => ({ default: m.Visit }))
);

function usePrefersReduced() {
  const [r, setR] = useState(false);
  useEffect(() => {
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    setR(m.matches);
    const on = () => setR(m.matches);
    m.addEventListener("change", on);
    return () => m.removeEventListener("change", on);
  }, []);
  return r;
}

export default function App() {
  const route = useRoute();
  const reduced = usePrefersReduced();
  const [seenIntro, setSeenIntro] = useState(() =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const [variant, setVariant] = useState<"a" | "b">(() => {
    try {
      const q = new URLSearchParams(window.location.search).get("intro");
      if (q === "a" || q === "b") return q;
      const saved = localStorage.getItem("vh-intro");
      if (saved === "a" || saved === "b") return saved;
    } catch {
      /* ignore */
    }
    return "a";
  });

  useEffect(() => installImageFallback(), []);

  // Scroll to bottom handler for reel recording
  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  const finishIntro = () => {
    setSeenIntro(true);
    try {
      localStorage.setItem("vh-intro", variant);
    } catch {
      /* ignore */
    }
  };

  useReveals(route, seenIntro);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [route]);

  let page: React.ReactNode;
  if (route === "/") page = <Home />;
  else if (route === "/about") page = <About />;
  else if (route === "/collections") page = <Collections />;
  else if (route.startsWith("/collections/"))
    page = <CollectionDetail slug={route.replace("/collections/", "")} />;
  else if (route === "/lookbook") page = <Lookbook />;
  else if (route === "/testimonials") page = <Testimonials />;
  else if (route === "/visit") page = <Visit />;
  else
    page = (
      <div className="mx-auto max-w-[1440px] px-5 py-40 text-center sm:px-8">
        <p className="eyebrow text-gold">404 · Not in the ledger</p>
        <h1 className="display mt-4 text-[clamp(36px,6vw,72px)] text-ink">
          This page was never numbered
        </h1>
        <a href="#/" className="eyebrow mt-8 inline-block border-b border-maroon pb-1 text-maroon">
          Return home
        </a>
      </div>
    );

  return (
    <>
      {!seenIntro && (
        <>
          {variant === "a" ? (
            <Intro key="intro-a" onDone={finishIntro} />
          ) : (
            <IntroB key="intro-b" onDone={finishIntro} />
          )}

          {/* choose the entrance */}
          <div className="fixed bottom-4 right-4 z-[110] flex items-center gap-2 border border-ink/25 bg-ivory/95 px-3 py-2 shadow-sm backdrop-blur">
            <span className="eyebrow mr-1 text-ink/70">Intro</span>
            {(["a", "b"] as const).map((v) => (
              <button
                key={v}
                onClick={(e) => {
                  e.stopPropagation();
                  setVariant(v);
                }}
                className={
                  "eyebrow px-2.5 py-1.5 transition-colors duration-300 " +
                  (variant === v
                    ? "bg-maroon text-ivory"
                    : "text-ink/70 hover:text-maroon")
                }
                aria-pressed={variant === v}
              >
                {v === "a" ? "A · curtain" : "B · film"}
              </button>
            ))}
          </div>
        </>
      )}
      <Rail />
      <div className="md:pl-11">
        <Nav route={route} />
        <Suspense
          fallback={
            <div className="flex h-[60vh] items-center justify-center">
              <p className="eyebrow animate-pulse text-ink/50">Loading…</p>
            </div>
          }
        >
          <main key={route} className="grain relative">
            {page}
          </main>
        </Suspense>
        <Footer />
      </div>
      {/* Scroll to bottom button — for reel recording */}
      {seenIntro && (
        <button
          onClick={scrollToBottom}
          className="fixed bottom-6 right-6 z-[120] flex h-11 w-11 items-center justify-center rounded-full bg-maroon text-ivory shadow-lg transition-all duration-300 hover:scale-110 hover:bg-ink"
          aria-label="Scroll to bottom"
        >
          ↓
        </button>
      )}
      {reduced && <span className="sr-only">Reduced motion is enabled.</span>}
    </>
  );
}
