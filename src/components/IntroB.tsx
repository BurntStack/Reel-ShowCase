import { useEffect, useRef, useState } from "react";

/**
 * INTRO — OPTION B: the film cut.
 * Plays public/videos/intro.mp4 when it exists (silent, autoplay); until then
 * it runs a two-plate dissolve of the house photography. Closes on a shutter.
 */
export function IntroB({ onDone }: { onDone: () => void }) {
  const [closing, setClosing] = useState(false);
  const [videoLive, setVideoLive] = useState(false);
  const vidRef = useRef<HTMLVideoElement>(null);
  const closed = useRef(false);

  const close = () => {
    if (closed.current) return;
    closed.current = true;
    setClosing(true);
    window.setTimeout(onDone, 900);
  };

  useEffect(() => {
    const t = window.setTimeout(close, 2600);
    const skip = () => {
      window.clearTimeout(t);
      close();
    };
    window.addEventListener("keydown", skip);
    return () => {
      window.clearTimeout(t);
      window.removeEventListener("keydown", skip);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const letters = "VASTRAA".split("");

  return (
    <div
      onClick={close}
      role="presentation"
      className="fixed inset-0 z-[100] cursor-pointer overflow-hidden bg-[#1a1512]"
      style={{
        clipPath: closing ? "inset(50% 0 50% 0)" : "inset(0 0 0 0)",
        opacity: closing ? 0 : 1,
        transition:
          "clip-path 900ms cubic-bezier(.76,0,.24,1), opacity 340ms ease 560ms",
      }}
    >
      {/* plate 1 */}
      <img
        src="images/lehenga-maroon-court.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ animation: "introZoom 3.6s cubic-bezier(.22,1,.36,1) forwards" }}
      />
      {/* plate 2 dissolves over it */}
      <img
        src="images/saree-gold-sun.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
        style={{
          animation: "introZoom 3.6s cubic-bezier(.22,1,.36,1) forwards, introReveal 3.6s ease forwards",
        }}
      />

      {/* the actual clip, once it is available */}
      <video
        ref={vidRef}
        src="videos/intro.mp4"
        muted
        autoPlay
        playsInline
        loop
        onCanPlay={() => setVideoLive(true)}
        onError={() => setVideoLive(false)}
        className="absolute inset-0 h-full w-full object-cover transition-opacity duration-1000"
        style={{ opacity: videoLive ? 1 : 0 }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1512]/85 via-[#1a1512]/25 to-[#1a1512]/55" />

      {/* top instrumentation */}
      <div className="absolute inset-x-0 top-0 flex items-center justify-between px-5 py-5 sm:px-8">
        <span className="eyebrow text-[#D8BC7A]">Option B · film cut</span>
        <span className="eyebrow num text-[#F7F2E8]/60">00:00 / 00:20 · muted</span>
      </div>

      {/* wordmark */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
        <span
          className="h-px w-[min(72vw,460px)] origin-center bg-[#D8BC7A]"
          style={{ animation: "ruleIn 900ms cubic-bezier(.22,1,.36,1) 120ms both" }}
        />
        <h1 className="mt-6 flex gap-[0.12em] font-display text-[clamp(34px,7vw,74px)] font-light tracking-[0.16em] text-[#F7F2E8]">
          {letters.map((l, i) => (
            <span
              key={i}
              style={{
                animation: `letterUp 760ms cubic-bezier(.22,1,.36,1) ${260 + i * 55}ms both`,
              }}
            >
              {l}
            </span>
          ))}
        </h1>
        <p
          className="eyebrow mt-5 text-[#D8BC7A]"
          style={{ animation: "letterUp 800ms cubic-bezier(.22,1,.36,1) 820ms both" }}
        >
          Heritage · Sarees &amp; Lehengas · Jaipur
        </p>
        <p
          className="deva mt-4 text-[13px] text-[#F7F2E8]/55"
          style={{ animation: "letterUp 800ms cubic-bezier(.22,1,.36,1) 960ms both" }}
        >
          वस्त्रा हेरिटेज
        </p>
      </div>

      {/* bottom hairline progress */}
      <div className="absolute inset-x-5 bottom-6 sm:inset-x-8">
        <div className="h-px w-full bg-[#F7F2E8]/25">
          <div
            className="h-px bg-[#D8BC7A]"
            style={{ animation: "segfill 2400ms linear forwards" }}
          />
        </div>
        <div className="mt-3 flex items-center justify-between">
          <span className="eyebrow text-[#F7F2E8]/55">Click or press any key to enter</span>
          <span className="eyebrow text-[#F7F2E8]/55">Est. 1978</span>
        </div>
      </div>
    </div>
  );
}
