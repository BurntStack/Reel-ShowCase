import { useState } from "react";
import { Link } from "../router";
import { Film } from "../components/Film";
import { Parallax } from "../components/Parallax";
import { Lines, Reveal } from "../components/Reveal";
import { collections, fromPrice, store, testimonials } from "../data";

const showcase = [
  { img: "images/lehenga-maroon-court.jpg", lot: "VH-201", name: "Rani Baori", type: "Bridal Lehenga", pos: "center 35%" },
  { img: "images/saree-ivory.jpg", lot: "VH-108", name: "Mogra Pleat", type: "Saree", pos: "center 28%" },
  { img: "images/lehenga-sage.jpg", lot: "VH-301", name: "Kesar Patti", type: "Festive Lehenga", pos: "center 40%" },
  { img: "images/saree-gold-sun.jpg", lot: "VH-101", name: "Ratanpur Kanjivaram", type: "Saree", pos: "center 22%" },
  { img: "images/lehenga-plum.jpg", lot: "VH-205", name: "Angoori Jharokha", type: "Bridal Lehenga", pos: "center 40%" },
  { img: "images/saree-black-gold.jpg", lot: "VH-104", name: "Shyamali Banarasi", type: "Saree", pos: "center 30%" },

];

export function Home() {
  const [hovered, setHovered] = useState(0);

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative h-[94svh] min-h-[600px] w-full overflow-hidden bg-ink">
        <Film
          frames={["images/hero.jpg", "images/lehenga-maroon-court.jpg", "images/saree-gold-sun.jpg"]}
          interval={5200}
          alt="A model turning in a maroon silk lehenga against ivory drapes"
          className="absolute inset-0 h-full w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ivory via-ivory/70 to-transparent sm:via-ivory/45" />
        <div className="absolute inset-0 bg-ivory/45 sm:hidden" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />

        <div className="relative flex h-full items-end pb-16 sm:items-center sm:pb-0">
          <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 sm:pt-24 md:pl-16">
            <div className="max-w-[760px]">
              <Reveal delay={80}>
                <p className="eyebrow flex items-center gap-3 text-maroon">
                  <span className="h-px w-10 bg-gold" />
                  Jaipur · Est. 1978 · Sarees &amp; Lehengas
                </p>
              </Reveal>
              <Lines
                as="h1"
                delay={240}
                className="display mt-6 text-[clamp(44px,8.4vw,110px)] text-ink"
                lines={[
                  "Where Tradition",
                  <>
                    Meets <em className="font-normal italic text-maroon">Timeless</em>
                  </>,
                  "Elegance",
                ]}
              />
              <Reveal delay={760}>
                <p className="mt-7 max-w-[430px] text-[15px] leading-relaxed text-ink/75">
                  Vastraa Heritage keeps two things and nothing else: the six-yard saree and the
                  lehenga. Each piece is cut, fitted and finished in our Civil Lines room — one
                  lot at a time.
                </p>
                <div className="mt-9 flex flex-wrap items-center gap-4">
                  <Link
                    to="/collections"
                    className="eyebrow bg-maroon px-7 py-4 text-ivory transition-colors duration-500 hover:bg-maroon-light"
                  >
                    View the catalogue
                  </Link>
                  <Link
                    to="/lookbook"
                    className="eyebrow link-underline border-b border-ink/40 pb-1 text-ink hover:border-maroon hover:text-maroon"
                  >
                    Or watch the lookbook
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 right-5 hidden items-center gap-3 sm:right-8 md:flex">
          <span className="eyebrow text-ink/70">Scroll</span>
          <span className="h-px w-14 origin-right animate-pulse bg-ink/40" />
        </div>
      </section>

      {/* ── MAROON BAND ──────────────────────────────────── */}
      <div className="overflow-hidden border-y border-maroon/30 bg-maroon py-3.5">
        <div className="marquee flex w-max gap-10 whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, k) => (
            <span key={k} className="flex gap-10">
              {[
                "Sarees",
                "Bridal Lehengas",
                "Festive Lehengas",
                "Casual Sarees",
                "Two garments, forty-eight years",
                "Draping appointments on request",
              ].map((t) => (
                <span key={t} className="eyebrow flex items-center gap-10 text-ivory/85">
                  {t} <span className="text-gold-light">✦</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ── SHOWCASE STRIP ───────────────────────────────── */}
      <section className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal>
              <p className="eyebrow text-gold">Recently lot-numbered</p>
            </Reveal>
            <Lines
              as="h2"
              delay={120}
              className="display mt-4 text-[clamp(34px,5vw,64px)] text-ink"
              lines={["The showcase strip"]}
            />
          </div>
          <Reveal delay={260}>
            <p className="max-w-[330px] text-sm leading-relaxed text-ink/70">
              Six pieces from the current ledger. Hover any frame to read the embroidery at 1:1.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 -mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 sm:-mx-8 sm:px-8">
          {showcase.map((s, i) => (
            <Reveal
              key={s.lot}
              delay={i * 90}
              className="w-[74vw] shrink-0 snap-start sm:w-[44vw] lg:w-[27vw]"
            >
              <Link to="/lookbook" className="group block">
                <div className="relative aspect-[3/4] overflow-hidden bg-beige">
                  <img
                    src={s.img}
                    alt={`${s.name} — ${s.type}`}
                    loading="lazy"
                    style={{ objectPosition: s.pos }}
                    className="h-full w-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-[1.08]"
                  />
                  <img
                    src="images/detail-zardozi.jpg"
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-[900ms] group-hover:opacity-100"
                  />
                  <span className="num absolute left-0 top-0 bg-ivory/95 px-2.5 py-1.5 text-[10px] tracking-[0.16em] text-maroon">
                    {s.lot}
                  </span>
                </div>
                <div className="mt-3 flex items-baseline justify-between border-t border-ink/15 pt-3">
                  <span className="display text-[22px] text-ink group-hover:text-maroon">{s.name}</span>
                  <span className="eyebrow text-ink/70">{s.type}</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── COLLECTIONS: catalogue index ─────────────────── */}
      <section className="border-y border-ink/15 bg-paper">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:py-28">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <p className="eyebrow text-gold">Index of collections</p>
              </Reveal>
              <Lines
                as="h2"
                delay={120}
                className="display mt-4 text-[clamp(34px,4.6vw,58px)] text-ink"
                lines={["Four shelves,", "nothing else"]}
              />
              <Reveal delay={400}>
                <div className="mt-8 hidden aspect-[4/5] w-full max-w-[420px] overflow-hidden bg-beige lg:block">
                  <img
                    src={collections[hovered].hero}
                    alt={collections[hovered].name}
                    className="h-full w-full object-cover transition-all duration-700"
                    style={{ objectPosition: "center 35%" }}
                  />
                </div>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="eyebrow grid grid-cols-[2.2rem_1fr_5rem] gap-4 border-b border-ink/25 pb-2 text-ink/70 sm:grid-cols-[2.5rem_1fr_6rem_6rem]">
              <span>№</span>
              <span>Collection</span>
              <span className="hidden sm:block">Lots</span>
              <span className="text-right">From</span>
            </div>

            {collections.map((c, i) => (
              <Reveal key={c.slug} delay={i * 90}>
                <Link
                  to={`/collections/${c.slug}`}
                  onMouseEnter={() => setHovered(i)}
                  className="group grid grid-cols-[2.2rem_1fr_5rem] items-center gap-4 border-b border-ink/15 py-6 transition-colors duration-500 hover:bg-beige/50 sm:grid-cols-[2.5rem_1fr_6rem_6rem]"
                >
                  <span className="num text-[12px] text-gold">{String(i + 1).padStart(2, "0")}</span>
                  <span>
                    <span className="display block text-[27px] leading-tight text-ink transition-colors group-hover:text-maroon sm:text-[33px]">
                      {c.name}
                    </span>
                    <span className="mt-1 block text-[13px] text-ink/70">{c.blurb}</span>
                    <span className="mt-2 block h-20 w-16 overflow-hidden bg-beige sm:hidden">
                      <img src={c.hero} alt="" className="h-full w-full object-cover" />
                    </span>
                  </span>
                  <span className="num hidden text-[13px] text-ink/70 sm:block">{c.items.length} lots</span>
                  <span className="num text-right font-display text-[19px] text-maroon">
                    ₹{fromPrice(c)}
                  </span>
                </Link>
              </Reveal>
            ))}

            <Reveal delay={200}>
              <p className="mt-6 max-w-[520px] text-sm leading-relaxed text-ink/65">
                Every lot is finished in-house and photographed in daylight, unretouched — the
                colour you see on this page is the colour that arrives.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── PARALLAX QUOTE BAND ──────────────────────────── */}
      <section className="relative h-[62svh] min-h-[420px] overflow-hidden">
        <div className="absolute inset-0">
          <Parallax strength={70}>
            <img
              src="images/boutique.jpg"
              alt="The Vastraa Heritage showroom in Civil Lines, Jaipur"
              className="h-[130%] w-full object-cover"
            />
          </Parallax>
        </div>
        <div className="absolute inset-0 bg-ink/45" />
        <div className="relative mx-auto flex h-full max-w-[1440px] items-center px-5 sm:px-8">
          <Reveal>
            <blockquote className="max-w-[760px]">
              <p className="display text-[clamp(26px,3.6vw,46px)] leading-[1.2] text-ivory italic">
                “A saree is four and a half metres of cloth and one lifetime of occasions. We only
                ever stocked the cloth that keeps up.”
              </p>
              <footer className="eyebrow mt-6 text-gold-light">
                Kumudini Devi — founder, Vastraa Heritage
              </footer>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* ── TESTIMONIALS PREVIEW ────────────────────────── */}
      <section className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal>
              <p className="eyebrow text-gold">Worn and written about</p>
            </Reveal>
            <Lines
              as="h2"
              delay={120}
              className="display mt-4 text-[clamp(34px,5vw,64px)] text-ink"
              lines={["What they said after"]}
            />
          </div>
          <Reveal delay={240}>
            <Link
              to="/testimonials"
              className="eyebrow link-underline border-b border-ink/40 pb-1 text-ink hover:border-maroon hover:text-maroon"
            >
              All 212 reviews
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-px border border-ink/15 bg-ink/15 md:grid-cols-3">
          {testimonials.slice(0, 3).map((t, i) => (
            <Reveal key={t.name} delay={i * 120} className="bg-ivory">
              <figure className="flex h-full flex-col justify-between p-7">
                <blockquote className="font-display text-[21px] leading-[1.45] text-ink italic">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-7 flex items-center gap-3 border-t border-ink/15 pt-5">
                  <img
                    src={t.img}
                    alt={t.name}
                    loading="lazy"
                    style={{ objectPosition: t.pos }}
                    className="h-11 w-11 rounded-full object-cover"
                  />
                  <span>
                    <span className="block text-sm text-ink">{t.name}</span>
                    <span className="eyebrow block text-ink/70">{t.occasion}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── FOOTER CTA ───────────────────────────────────── */}
      <section className="border-t border-ink/15 bg-beige">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-6">
            <Reveal>
              <p className="eyebrow text-maroon">Come in</p>
            </Reveal>
            <Lines
              as="h2"
              delay={120}
              className="display mt-4 text-[clamp(34px,5vw,62px)] text-ink"
              lines={["Bring the occasion,", "we'll bring the cloth."]}
            />
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={`https://wa.me/${store.whatsapp}?text=Namaste%20Vastraa%20Heritage%2C%20I'd%20like%20an%20appointment`}
                target="_blank"
                rel="noreferrer"
                className="eyebrow bg-maroon px-7 py-4 text-ivory transition-colors duration-500 hover:bg-maroon-light"
              >
                WhatsApp the atelier
              </a>
              <Link
                to="/visit"
                className="eyebrow border border-ink/40 px-7 py-4 text-ink transition-colors duration-500 hover:border-maroon hover:bg-maroon hover:text-ivory"
              >
                Visit us
              </Link>
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-6">
            <Reveal delay={120}>
              <p className="eyebrow text-gold">Address</p>
              <p className="mt-3 font-display text-[23px] leading-snug text-ink">
                {store.address1}
                <br />
                {store.address2}
              </p>
            </Reveal>
            <Reveal delay={220}>
              <p className="eyebrow text-gold">Hours</p>
              <dl className="mt-3 space-y-1.5">
                {store.hours.map(([d, h]) => (
                  <div key={d} className="flex justify-between gap-4 border-b border-ink/15 pb-1.5 text-sm">
                    <dt className="text-ink/70">{d}</dt>
                    <dd className="num text-ink">{h}</dd>
                  </div>
                ))}
              </dl>
              <p className="num mt-4 text-sm text-maroon">{store.phone}</p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
