import { useEffect, useState } from "react";

const Paisley = () => (
  <svg viewBox="0 0 200 220" className="h-[150px] w-[150px]" fill="none" aria-hidden="true">
    <path
      className="draw"
      style={{ ["--len" as string]: 760, ["--dd" as string]: "80ms" }}
      d="M100 196C62 176 44 138 52 100C60 62 92 32 128 34C160 36 180 62 174 90C168 116 146 130 127 124C112 119 107 104 116 96C125 88 139 93 141 105"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      className="draw"
      style={{ ["--len" as string]: 520, ["--dd" as string]: "420ms" }}
      d="M100 178C70 162 57 132 63 102C70 70 96 49 124 51C148 53 162 71 158 91C154 109 139 118 126 114"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
      opacity="0.75"
    />
    <path
      className="draw"
      style={{ ["--len" as string]: 90, ["--dd" as string]: "760ms" }}
      d="M100 196C100 206 97 214 92 220"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="86" cy="128" r="3.4" className="draw" style={{ ["--len" as string]: 24, ["--dd" as string]: "980ms" }} stroke="currentColor" strokeWidth="1.4" />
    <circle cx="96" cy="82" r="2.6" className="draw" style={{ ["--len" as string]: 20, ["--dd" as string]: "1080ms" }} stroke="currentColor" strokeWidth="1.4" />
    <path
      className="draw"
      style={{ ["--len" as string]: 140, ["--dd" as string]: "900ms" }}
      d="M62 150C50 148 40 154 36 166C48 170 58 165 62 154"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <path
      className="draw"
      style={{ ["--len" as string]: 140, ["--dd" as string]: "1000ms" }}
      d="M138 158C150 158 159 165 161 177C149 179 140 173 137 162"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);

/** The gold cord and tassels that hold the drapes closed. */
const Tieback = () => (
  <svg viewBox="0 0 240 120" className="h-[92px] w-[220px]" fill="none" aria-hidden="true">
    <path d="M4 46C46 46 74 62 118 62" stroke="#b08d43" strokeWidth="2" strokeLinecap="round" />
    <path d="M236 46C194 46 166 62 122 62" stroke="#b08d43" strokeWidth="2" strokeLinecap="round" />
    <path d="M118 62C120 66 122 66 124 62" stroke="#8a6a2c" strokeWidth="3" strokeLinecap="round" />
    <circle cx="121" cy="63" r="6.5" stroke="#b08d43" strokeWidth="2" />
    <path d="M115 70L104 106M121 70V110M127 70L138 106" stroke="#b08d43" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M104 106h10M132 106h10M116 110h10" stroke="#8a6a2c" strokeWidth="3" strokeLinecap="round" />
    <path d="M60 52c6 8 14 12 24 14M180 52c-6 8-14 12-24 14" stroke="#d8bc7a" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

/**
 * INTRO — OPTION A: the curtain.
 * Paisley draws itself over closed ivory drapes, the wordmark shimmers,
 * the tieback drops, then the curtains part to the hero.
 */
export function Intro({ onDone }: { onDone: () => void }) {
  const [parting, setParting] = useState(false);

  const release = (fast = false) => {
    setParting(true);
    window.setTimeout(onDone, fast ? 400 : 1000);
  };

  useEffect(() => {
    const a = window.setTimeout(() => release(), 1560);
    const b = window.setTimeout(onDone, 2620);
    const skip = () => {
      window.clearTimeout(a);
      window.clearTimeout(b);
      if (!parting) release(true);
    };
    window.addEventListener("keydown", skip);
    return () => {
      window.clearTimeout(a);
      window.clearTimeout(b);
      window.removeEventListener("keydown", skip);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const cloth = (side: "l" | "r") => ({
    backgroundImage:
      `linear-gradient(${side === "l" ? "270deg" : "90deg"}, rgba(43,35,29,.20) 0, rgba(43,35,29,.04) 12%, rgba(43,35,29,0) 26%), ` +
      "repeating-linear-gradient(90deg, #f4eee1 0 9px, #fbf8f1 20px, #ece2cf 33px, #f7f1e5 46px, #e6dac3 58px)",
    animation: side === "l" ? "curtainSettle 5.2s ease-in-out infinite" : "curtainSettleB 5.2s ease-in-out infinite",
  });

  return (
    <div
      className="fixed inset-0 z-[100] cursor-pointer select-none"
      onClick={() => {
        if (!parting) release(true);
      }}
      role="presentation"
    >
      {/* ── left drape ── */}
      <div
        className="absolute inset-y-0 left-0 w-[50.6%] transition-transform duration-[1000ms] ease-[cubic-bezier(.76,0,.24,1)]"
        style={{
          transform: parting ? "translateX(-101%)" : "translateX(0)",
          boxShadow: "26px 0 60px -26px rgba(43,35,29,.55)",
        }}
      >
        <div className="absolute inset-0" style={cloth("l")} />
        {/* valance */}
        <div className="absolute inset-x-0 top-0 h-16 bg-[#f2ebdc] sm:h-20">
          <svg viewBox="0 0 200 46" preserveAspectRatio="none" className="absolute inset-x-0 top-full h-8 w-full sm:h-11">
            <path d="M0 0H200V12C150 44 62 38 0 18Z" fill="#f2ebdc" />
            <path d="M0 18C62 38 150 44 200 12" fill="none" stroke="#b08d43" strokeWidth="1.4" opacity="0.75" />
          </svg>
        </div>
        {/* hem shadow at the seam */}
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[rgba(43,35,29,.16)] to-transparent" />
      </div>

      {/* ── right drape ── */}
      <div
        className="absolute inset-y-0 right-0 w-[50.6%] transition-transform duration-[1000ms] ease-[cubic-bezier(.76,0,.24,1)]"
        style={{
          transform: parting ? "translateX(101%)" : "translateX(0)",
          boxShadow: "-26px 0 60px -26px rgba(43,35,29,.55)",
        }}
      >
        <div className="absolute inset-0" style={cloth("r")} />
        <div className="absolute inset-x-0 top-0 h-16 bg-[#f2ebdc] sm:h-20">
          <svg
            viewBox="0 0 200 46"
            preserveAspectRatio="none"
            className="absolute inset-x-0 top-full h-8 w-full sm:h-11"
            style={{ transform: "scaleX(-1)" }}
          >
            <path d="M0 0H200V12C150 44 62 38 0 18Z" fill="#f2ebdc" />
            <path d="M0 18C62 38 150 44 200 12" fill="none" stroke="#b08d43" strokeWidth="1.4" opacity="0.75" />
          </svg>
        </div>
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[rgba(43,35,29,.16)] to-transparent" />
      </div>

      {/* ── tieback ── */}
      <div
        className="pointer-events-none absolute left-1/2 top-[58%] -translate-x-1/2 text-center transition-all duration-500"
        style={{
          opacity: parting ? 0 : 1,
          transform: parting
            ? "translate(-50%, 26px) scale(.94)"
            : "translate(-50%, 0) scale(1)",
        }}
      >
        <Tieback />
      </div>

      {/* ── wordmark, printed on the drapes ── */}
      <div
        className={
          "absolute inset-0 flex flex-col items-center justify-center px-6 text-center transition-all duration-[600ms] " +
          (parting ? "-translate-y-2 opacity-0" : "opacity-100")
        }
      >
        <div className="text-gold">
          <Paisley />
        </div>
        <h1
          className="shimmer mt-6 px-4 font-display text-[34px] leading-none font-light tracking-[0.02em] sm:text-[52px] md:text-[64px]"
          style={{ animationDelay: "180ms" }}
        >
          Vastraa Heritage
        </h1>
        <p
          className="eyebrow mt-5 text-ink/70 opacity-0"
          style={{ animation: "fadeUp 900ms cubic-bezier(.22,1,.36,1) 900ms forwards" }}
        >
          Jaipur · Sarees &amp; Lehengas · Est. 1978
        </p>
        <p
          className="deva absolute bottom-10 text-[12px] text-ink/60 opacity-0"
          style={{ animation: "fadeUp 900ms cubic-bezier(.22,1,.36,1) 1150ms forwards" }}
        >
          वस्त्रा हेरिटेज
        </p>
        <p
          className="eyebrow absolute bottom-10 right-5 text-ink/70 opacity-0 sm:right-8"
          style={{
            animation: parting
              ? "fadeUp 500ms cubic-bezier(.22,1,.36,1) forwards"
              : "fadeUp 900ms cubic-bezier(.22,1,.36,1) 1300ms forwards",
          }}
        >
          Parting the drapes…
        </p>
      </div>
    </div>
  );
}
