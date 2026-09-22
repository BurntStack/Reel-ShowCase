import { Link } from "../router";
import { Film } from "../components/Film";
import { Lines, Reveal } from "../components/Reveal";

type Reel = {
  kind: "film" | "photo";
  src?: string;
  frames?: string[];
  look: string;
  handle: string;
  caption: string;
  likes: string;
  pos?: string;
};

const reels: Reel[] = [
  {
    kind: "film",
    frames: ["images/lehenga-maroon-court.jpg", "images/hero.jpg", "images/lehenga-plum.jpg"],
    look: "Rani Baori · oxblood",
    handle: "@vastraaheritage",
    caption: "The turn that decides a bridal lehenga. One take, courtyard light.",
    likes: "12,480",
  },
  {
    kind: "photo",
    src: "images/saree-ivory.jpg",
    pos: "center 26%",
    look: "Mogra Pleat · ivory",
    handle: "@vastraaheritage",
    caption: "Ninety seconds from packet to pallu.",
    likes: "9,215",
  },
  {
    kind: "film",
    frames: ["images/lehenga-sage.jpg", "images/saree-gold-sun.jpg", "images/saree-black-gold.jpg"],
    look: "Kesar Patti · sage",
    handle: "@vastraaheritage",
    caption: "Fringe that lands half a beat after you stop.",
    likes: "15,902",
  },
  {
    kind: "photo",
    src: "images/lehenga-plum.jpg",
    pos: "center 42%",
    look: "Angoori Jharokha · plum",
    handle: "@vastraaheritage",
    caption: "Cut to fan when she sits. Check the floor, always.",
    likes: "11,067",
  },
  {
    kind: "film",
    frames: ["images/saree-black-gold.jpg", "images/saree-gold-sun.jpg", "images/about-editorial.jpg"],
    look: "Shyamali Banarasi · black",
    handle: "@vastraaheritage",
    caption: "Four o'clock on the balcony — the gold wakes up.",
    likes: "18,340",
  },
  {
    kind: "photo",
    src: "images/hero.jpg",
    pos: "center 35%",
    look: "Saanwariya · maroon",
    handle: "@vastraaheritage",
    caption: "4.2 metres of flare, 900 grams total.",
    likes: "13,774",
  },
  {
    kind: "photo",
    src: "images/saree-rose-sequin.jpg",
    pos: "center 28%",
    look: "Gulabi Sitara · rose",
    handle: "@vastraaheritage",
    caption: "Sequin buti scattered so the border still does the talking.",
    likes: "7,981",
  },
];

const editorial = [
  ["images/saree-gold-sun.jpg", "Ratanpur Kanjivaram", "center 22%"],
  ["images/lehenga-sage.jpg", "Kesar Patti", "center 40%"],
  ["images/detail-zardozi.jpg", "Zardozi, at 1:1", "center"],
  ["images/about-editorial.jpg", "Bel Phool Chanderi", "62% center"],
  ["images/lehenga-maroon-court.jpg", "Rani Baori", "center 35%"],
  ["images/saree-ivory.jpg", "Mogra Pleat", "center 30%"],
  ["images/saree-rose-sequin.jpg", "Gulabi Sitara", "center 30%"],
];

export function Lookbook() {
  return (
    <>
      <header className="border-b border-ink/15 bg-paper pt-[68px]">
        <div className="mx-auto grid max-w-[1440px] gap-8 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-maroon">
                <span className="h-px w-10 bg-gold" /> Lookbook · the reel feed
              </p>
            </Reveal>
            <Lines
              as="h1"
              delay={140}
              className="display mt-6 text-[clamp(44px,7.4vw,96px)] text-ink"
              lines={["Everything,", "in motion"]}
            />
          </div>
          <div className="lg:col-span-5 lg:pt-16">
            <Reveal delay={420}>
              <p className="text-[15px] leading-relaxed text-ink/75">
                Our largest room. Full-height frames alternate between stills and looping clips —
                the way the feed runs on a phone, but printed on ivory. Clips autoplay as they enter
                the frame and stop when they leave it.
              </p>
              <p className="eyebrow mt-5 text-gold">Scroll for the vertical reel column ↓</p>
            </Reveal>
          </div>
        </div>
      </header>

      {/* vertical reel column — full-height panels */}
      <section className="bg-ink">
        <div className="mx-auto max-w-[1440px] px-0 sm:px-8">
          <div className="grid gap-px bg-ivory/10 sm:grid-cols-2 lg:grid-cols-3">
            {reels.map((r, i) => (
              <Reveal key={r.look} delay={(i % 3) * 120} mode="zoom" className="bg-ink">
                <div className="group relative h-[76svh] min-h-[520px] w-full overflow-hidden">
                  {r.kind === "film" && r.frames ? (
                    <Film
                      frames={r.frames}
                      interval={4000}
                      reel
                      alt={r.look}
                      startDelay={i * 260}
                      className="h-full w-full"
                    />
                  ) : (
                    <>
                      <img
                        src={r.src}
                        alt={r.look}
                        loading="lazy"
                        style={{ objectPosition: r.pos }}
                        className="h-full w-full object-cover transition-transform duration-[1.8s] ease-out group-hover:scale-[1.06]"
                      />
                      <div className="absolute inset-x-0 top-3 flex gap-1.5">
                        <div className="h-[3px] flex-1 rounded-full bg-ivory/80" />
                      </div>
                      <span className="eyebrow absolute right-3 top-2.5 text-ivory/85">Photo</span>
                    </>
                  )}

                  {/* reel UI */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent p-5 pt-16">
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold-light text-[11px] text-gold-light">
                        VH
                      </span>
                      <span className="eyebrow text-ivory">{r.handle}</span>
                    </div>
                    <p className="display mt-3 text-[26px] leading-tight text-ivory">{r.look}</p>
                    <p className="mt-1.5 max-w-[92%] text-[13.5px] leading-snug text-ivory/80">
                      {r.caption}
                    </p>
                    <div className="mt-3 flex items-center gap-5 text-ivory/75">
                      <span className="eyebrow">♡ {r.likes}</span>
                      <span className="eyebrow">↗ Share</span>
                      <span className="eyebrow text-gold-light">Save</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* editorial grid */}
      <section className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal>
              <p className="eyebrow text-gold">Plates 01 – 06</p>
            </Reveal>
            <Lines
              as="h2"
              delay={120}
              className="display mt-4 text-[clamp(32px,5vw,62px)] text-ink"
              lines={["Printed on ivory"]}
            />
          </div>
          <Reveal delay={240}>
            <Link
              to="/collections"
              className="eyebrow link-underline border-b border-ink/40 pb-1 text-ink hover:border-maroon hover:text-maroon"
            >
              Shop these lots
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {editorial.map(([src, cap, pos], i) => (
            <Reveal
              key={src}
              delay={(i % 3) * 110}
              mode="zoom"
              className={i === 1 || i === 4 ? "lg:mt-16" : ""}
            >
              <figure className="group">
                <div className="relative aspect-[3/4] overflow-hidden bg-beige">
                  <img
                    src={src}
                    alt={cap}
                    loading="lazy"
                    style={{ objectPosition: pos }}
                    className="h-full w-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-[1.07]"
                  />
                  <img
                    src="images/detail-zardozi.jpg"
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-[900ms] group-hover:opacity-100"
                  />
                  <span className="num absolute left-0 top-0 bg-ivory/95 px-2.5 py-1.5 text-[10px] tracking-[0.16em] text-maroon">
                    PL-{String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <figcaption className="mt-3 flex items-baseline justify-between border-t border-ink/15 pt-3">
                  <span className="display text-[21px] text-ink group-hover:text-maroon">{cap}</span>
                  <span className="eyebrow text-ink/70">Hover · detail</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
