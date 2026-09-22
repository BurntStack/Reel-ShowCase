import { Link } from "../router";
import { Film } from "../components/Film";
import { Lines, Reveal } from "../components/Reveal";
import { OutfitCard } from "../components/OutfitCard";
import { collections, fromPrice, store } from "../data";

export function CollectionDetail({ slug }: { slug: string }) {
  const idx = collections.findIndex((c) => c.slug === slug);
  const c = collections[idx];
  if (!c) {
    return (
      <div className="mx-auto max-w-[1440px] px-5 py-40 text-center">
        <p className="eyebrow text-gold">404</p>
        <h1 className="display mt-4 text-5xl text-ink">That lot has left the room</h1>
        <Link to="/collections" className="eyebrow mt-8 inline-block text-maroon underline">
          Back to the catalogue
        </Link>
      </div>
    );
  }
  const next = collections[(idx + 1) % collections.length];
  const prev = collections[(idx - 1 + collections.length) % collections.length];

  const specs: [string, string][] = [
    ["Lots", `${c.items.length} in the current ledger`],
    ["Cloth", c.slug.includes("lehenga") ? "Silk, organza, georgette" : "Tissue, crepe, Chanderi"],
    ["Lead time", c.slug.includes("bridal") ? "8–11 weeks, three fittings" : "3–10 days"],
    ["Draping", c.slug.includes("saree") ? "Free, with every purchase" : "Dupatta setting included"],
    ["Care", "Dry clean · stored in muslin"],
    ["Price from", "₹" + fromPrice(c)],
  ];

  return (
    <>
      <header className="relative overflow-hidden border-b border-ink/15 bg-ink pt-[68px]">
        <img
          src={c.hero}
          alt={c.name}
          className="absolute inset-0 h-full w-full object-cover opacity-70"
          style={{ objectPosition: "center 30%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/45 to-ink/30" />
        <div className="relative mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:py-28">
          <nav className="eyebrow flex items-center gap-2 text-ivory/70">
            <Link to="/collections" className="hover:text-gold-light">
              Collections
            </Link>
            <span>/</span>
            <span className="text-gold-light">{c.name}</span>
          </nav>
          <Lines
            as="h1"
            delay={120}
            className="display mt-6 text-[clamp(42px,7.6vw,96px)] text-ivory"
            lines={[c.name]}
          />
          <Reveal delay={520}>
            <p className="mt-5 max-w-[540px] text-[15px] leading-relaxed text-ivory/85">{c.intro}</p>
            <p className="eyebrow mt-6 text-gold-light">{c.eyebrow} · {c.items.length} lots</p>
          </Reveal>
        </div>
      </header>

      {/* editorial split: sticky spec column / scrolling pieces */}
      <section className="mx-auto grid max-w-[1440px] gap-10 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:gap-14 lg:py-24">
        <aside className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <p className="eyebrow text-gold">The specification</p>
              <dl className="mt-5">
                {specs.map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-4 border-b border-ink/15 py-2.5 text-[13.5px]">
                    <dt className="text-ink/70">{k}</dt>
                    <dd className="text-right text-ink">{v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={160} mode="zoom" className="mt-8">
              <Film
                frames={c.film}
                interval={4400}
                alt={`${c.name} in motion`}
                caption={c.filmCaption}
                className="relative aspect-[4/5] w-full"
              />
            </Reveal>

            <Reveal delay={260}>
              <a
                href={`https://wa.me/${store.whatsapp}?text=Namaste%2C%20I'd%20like%20to%20see%20the%20${encodeURIComponent(c.name)}`}
                target="_blank"
                rel="noreferrer"
                className="eyebrow mt-7 inline-block w-full bg-maroon px-6 py-4 text-center text-ivory transition-colors hover:bg-maroon-light"
              >
                Reserve this collection
              </a>
              <p className="mt-3 text-[13px] leading-relaxed text-ink/70">
                Pieces are held for 48 hours without payment. Alterations quoted before any stitching
                begins.
              </p>
            </Reveal>
          </div>
        </aside>

        <div className="lg:col-span-8">
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2">
            {c.items.map((item, i) => (
              <OutfitCard key={item.lot} item={item} index={i} />
            ))}
          </div>

          <Reveal delay={120}>
            <div className="mt-14 grid gap-6 border-t border-ink/20 pt-8 sm:grid-cols-2">
              <Link to={`/collections/${prev.slug}`} className="group">
                <span className="eyebrow text-ink/70">← Previous shelf</span>
                <span className="display mt-2 block text-[28px] text-ink group-hover:text-maroon">
                  {prev.name}
                </span>
              </Link>
              <Link to={`/collections/${next.slug}`} className="group text-right">
                <span className="eyebrow text-ink/70">Next shelf →</span>
                <span className="display mt-2 block text-[28px] text-ink group-hover:text-maroon">
                  {next.name}
                </span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-ink/15 bg-beige">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-6 px-5 py-14 sm:px-8">
          <div>
            <p className="eyebrow text-maroon">Not sure which shelf</p>
            <p className="display mt-2 text-[clamp(26px,3.4vw,42px)] text-ink">
              Bring the invitation. We'll read it with you.
            </p>
          </div>
          <Link
            to="/visit"
            className="eyebrow border border-ink/40 px-7 py-4 text-ink transition-colors hover:bg-maroon hover:border-maroon hover:text-ivory"
          >
            Book a fitting
          </Link>
        </div>
      </section>
    </>
  );
}
