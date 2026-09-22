import { useEffect, useRef, useState } from "react";
import { Link } from "../router";
import { Film } from "../components/Film";
import { Parallax } from "../components/Parallax";
import { Lines, Reveal } from "../components/Reveal";

const chapters = [
  {
    n: "01",
    t: "One room, one loom relationship",
    p: "Kumudini Devi opened Vastraa in 1978 with four Kanjivarams and a borrowed saris press. We still buy from the same two families in Kanchipuram and the same weaving lane in Varanasi — no middle house, no seasonal relabelling.",
  },
  {
    n: "02",
    t: "Fitted on the body, never on paper",
    p: "A lehenga is marked while you stand in your own heels, sit on the floor, and turn once. We keep those notes on your card for fifteen years, so your tenth piece begins where your first ended.",
  },
  {
    n: "03",
    t: "Two garments, refused everything else",
    p: "No kurtas, no menswear, no fusion edits. Sarees and lehengas only — which is why our borders sit flat, our flares have the right weight, and our shelf never confuses you.",
  },
];

/** 18-second brand film with an optional ambient drone (generated in-browser). */
function BrandFilm() {
  const [playing, setPlaying] = useState(true);
  const [sound, setSound] = useState(false);
  const [t, setT] = useState(0);
  const ctxRef = useRef<AudioContext | null>(null);
  const gainRef = useRef<GainNode | null>(null);

  useEffect(() => {
    if (!playing) return;
    const id = window.setInterval(() => setT((v) => (v + 0.25) % 18), 250);
    return () => window.clearInterval(id);
  }, [playing]);

  useEffect(() => {
    return () => {
      ctxRef.current?.close().catch(() => {});
      ctxRef.current = null;
    };
  }, []);

  const toggleSound = async () => {
    if (!sound) {
      try {
        if (!ctxRef.current) {
          const Ctx =
            window.AudioContext ||
            (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
          const ctx = new Ctx();
          const gain = ctx.createGain();
          gain.gain.value = 0;
          gain.connect(ctx.destination);
          const filter = ctx.createBiquadFilter();
          filter.type = "lowpass";
          filter.frequency.value = 900;
          filter.connect(gain);
          [
            [130.81, 0.5],
            [196.0, 0.3],
            [261.63, 0.16],
            [392.0, 0.08],
          ].forEach(([f, g]) => {
            const o = ctx.createOscillator();
            o.type = "sine";
            o.frequency.value = f;
            const og = ctx.createGain();
            og.gain.value = g;
            o.connect(og);
            og.connect(filter);
            o.start();
          });
          const lfo = ctx.createOscillator();
          const lfoGain = ctx.createGain();
          lfo.frequency.value = 0.18;
          lfoGain.gain.value = 0.014;
          lfo.connect(lfoGain);
          lfoGain.connect(gain.gain);
          lfo.start();
          ctxRef.current = ctx;
          gainRef.current = gain;
        }
        await ctxRef.current.resume();
        gainRef.current?.gain.setTargetAtTime(0.05, ctxRef.current.currentTime, 1.2);
      } catch {
        /* audio unavailable — stay silent */
      }
      setSound(true);
    } else {
      if (ctxRef.current && gainRef.current)
        gainRef.current.gain.setTargetAtTime(0, ctxRef.current.currentTime, 0.5);
      setSound(false);
    }
  };

  const secs = t.toFixed(1).padStart(4, "0");

  return (
    <div className="relative bg-ink">
      <Film
        frames={[
          "images/about-editorial.jpg",
          "images/lehenga-maroon-court.jpg",
          "images/saree-ivory.jpg",
        ]}
        interval={6000}
        startDelay={200}
        alt="Brand film still: a model in an ivory saree in a heritage room"
        className="relative aspect-[16/9] w-full"
      />
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-ivory/20 bg-ink px-4 py-3">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setPlaying((p) => !p)}
            className="eyebrow flex h-8 w-8 items-center justify-center rounded-full border border-gold-light text-gold-light transition-colors hover:bg-gold-light hover:text-ink"
            aria-label={playing ? "Pause brand film" : "Play brand film"}
          >
            {playing ? "‖" : "▶"}
          </button>
          <span className="num text-[11px] text-ivory/70">
            00:{secs} / 00:18.0
          </span>
          <div className="h-px w-24 bg-ivory/25 sm:w-40">
            <div
              className="h-px bg-gold-light transition-[width] duration-200 ease-linear"
              style={{ width: `${((t / 18) * 100).toFixed(1)}%` }}
            />
          </div>
        </div>
        <button
          onClick={toggleSound}
          className="eyebrow flex items-center gap-2 text-ivory/70 transition-colors hover:text-gold-light"
          aria-pressed={sound}
        >
          <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: sound ? "#D8BC7A" : "rgba(247,242,232,.4)" }} />
          {sound ? "Ambient on · tanpura" : "Ambient off"}
        </button>
      </div>
    </div>
  );
}

export function About() {
  return (
    <>
      <header className="relative overflow-hidden border-b border-ink/15 pt-[68px]">
        <div className="absolute inset-0">
          <Parallax strength={50}>
            <img
              src="images/about-editorial.jpg"
              alt="A model in an ivory saree reclining in a heritage room"
              className="h-[125%] w-full object-cover"
              style={{ objectPosition: "60% center" }}
            />
          </Parallax>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-ivory via-ivory/80 to-ivory/10" />
        <div className="relative mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:py-32">
          <Reveal>
            <p className="eyebrow flex items-center gap-3 text-maroon">
              <span className="h-px w-10 bg-gold" /> About the house
            </p>
          </Reveal>
          <Lines
            as="h1"
            delay={160}
            className="display mt-6 max-w-[820px] text-[clamp(40px,6.6vw,86px)] text-ink"
            lines={["Forty-eight years", "of two garments"]}
          />
          <Reveal delay={700}>
            <p className="mt-7 max-w-[440px] text-[15px] leading-relaxed text-ink/75">
              Vastraa Heritage is a family room in Civil Lines that happens to sell sarees and
              lehengas. Everything here was chosen by the same three pairs of hands.
            </p>
          </Reveal>
        </div>
      </header>

      {/* story — editorial two-column measure */}
      <section className="mx-auto grid max-w-[1440px] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:py-28">
        <div className="lg:col-span-4">
          <Reveal>
            <p className="eyebrow text-gold">The story</p>
            <p className="mt-5 font-display text-[26px] leading-[1.35] text-maroon italic">
              “We were never a shop. We were a room where women brought their mothers.”
            </p>
          </Reveal>
        </div>
        <div className="lg:col-span-8 lg:columns-2 lg:gap-10">
          <Reveal delay={140}>
            <p className="text-[15.5px] leading-[1.85] text-ink/85">
              <span className="float-left mr-3 mt-1 font-display text-[62px] leading-[0.78] text-maroon">
                I
              </span>
              n 1978 Kumudini Devi took a lease on a first-floor room above a tailor's shop on
              Jacob Road and put four Kanjivarams on a bamboo rail. There was no signboard until
              1984. Customers found her because a neighbour's aunt had worn one of those four
              sarees to a wedding in Kota.
            </p>
            <p className="mt-5 text-[15.5px] leading-[1.85] text-ink/85">
              The rules were set early and have not moved: buy cloth, not labels; fit on the body,
              not on paper; and stock only what a woman will wear twice. When lehengas became the
              centre of the Indian wardrobe in the nineties, the room simply added a second rail
              for them — and never a third category.
            </p>
            <p className="mt-5 text-[15.5px] leading-[1.85] text-ink/85">
              Today the house holds between ninety and a hundred and twenty lots at a time. Each is
              numbered, photographed in daylight against the same ivory drape, and kept in a ledger
              that records who wore it, where, and to what. If you come back for your tenth piece,
              we will still have your first card.
            </p>
          </Reveal>
        </div>
      </section>

      {/* brand film */}
      <section className="border-y border-ink/15 bg-paper py-20 lg:py-24">
        <div className="mx-auto grid max-w-[1440px] items-start gap-10 px-5 sm:px-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="eyebrow text-gold">Brand film · 00:18</p>
              <h2 className="display mt-4 text-[clamp(30px,3.6vw,46px)] text-ink">
                Eighteen seconds of light and silk
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-ink/70">
                Shot on the terrace at four in the afternoon, one take, no cuts to the cloth. The
                ambient track is a tanpura we recorded on a phone — switch it on if the room is
                quiet.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <Reveal delay={160} mode="zoom">
              <BrandFilm />
            </Reveal>
          </div>
        </div>
      </section>

      {/* chapters — asymmetric numbered list */}
      <section className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:py-28">
        <Lines
          as="h2"
          className="display text-[clamp(30px,4vw,52px)] text-ink"
          lines={["How the house works"]}
        />
        <div className="mt-10 space-y-0">
          {chapters.map((c, i) => (
            <Reveal key={c.n} delay={i * 120}>
              <div className="grid gap-4 border-t border-ink/15 py-8 md:grid-cols-12 md:gap-8">
                <span className="num text-[12px] text-gold md:col-span-1">{c.n}</span>
                <h3 className="display text-[26px] leading-tight text-maroon md:col-span-5">
                  {c.t}
                </h3>
                <p className="text-[15px] leading-relaxed text-ink/75 md:col-span-6">{c.p}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* model imagery */}
      <section className="grid gap-px bg-ink/15 sm:grid-cols-3">
        {[
          ["images/lehenga-sage.jpg", "Kesar Patti · festive", "center 40%"],
          ["images/saree-black-gold.jpg", "Shyamali Banarasi · saree", "center 28%"],
          ["images/lehenga-plum.jpg", "Angoori Jharokha · bridal", "center 45%"],
        ].map(([src, cap, pos], i) => (
          <Reveal key={src} delay={i * 130} mode="zoom" className="group relative bg-ivory">
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                src={src}
                alt={cap}
                loading="lazy"
                style={{ objectPosition: pos }}
                className="h-full w-full object-cover transition-transform duration-[1.6s] group-hover:scale-105"
              />
              <span className="eyebrow absolute bottom-4 left-4 text-ivory drop-shadow">{cap}</span>
            </div>
          </Reveal>
        ))}
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-20 text-center sm:px-8">
        <Reveal>
          <p className="eyebrow text-gold">Next</p>
          <h2 className="display mx-auto mt-4 max-w-[720px] text-[clamp(30px,4.4vw,54px)] text-ink">
            See the current ledger
          </h2>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              to="/collections"
              className="eyebrow bg-maroon px-7 py-4 text-ivory transition-colors hover:bg-maroon-light"
            >
              Collections
            </Link>
            <Link
              to="/visit"
              className="eyebrow border border-ink/40 px-7 py-4 text-ink transition-colors hover:border-maroon hover:text-maroon"
            >
              Book a fitting
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
