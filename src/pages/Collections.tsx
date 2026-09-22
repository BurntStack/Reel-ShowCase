import { Link } from "../router";
import { Lines, Reveal } from "../components/Reveal";
import { collections, fromPrice } from "../data";

export function Collections() {
  return (
    <>
      <header className="border-b border-ink/15 bg-paper pt-[68px]">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:py-28">
          <Reveal>
            <p className="eyebrow flex items-center gap-3 text-maroon">
              <span className="h-px w-10 bg-gold" /> The catalogue · 2026
            </p>
          </Reveal>
          <Lines
            as="h1"
            delay={140}
            className="display mt-6 text-[clamp(34px,7.4vw,104px)] text-ink"
            lines={["Four collections.", "Sarees and lehengas."]}
          />
          <Reveal delay={700}>
            <p className="mt-7 max-w-[520px] text-[15px] leading-relaxed text-ink/75">
              Read it as a ledger, not a shop. Every lot below is numbered, priced, and held in the
              room on Jacob Road until someone takes it home.
            </p>
          </Reveal>
        </div>
      </header>

      {/* catalogue table as hero */}
      <section className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:py-20">
        <div className="eyebrow grid grid-cols-[2.4rem_1fr_5.5rem] gap-4 border-b border-ink/30 pb-2 text-ink/70 md:grid-cols-[3rem_1fr_7rem_9rem_7rem_3rem]">
          <span>№</span>
          <span>Collection</span>
          <span className="hidden md:block">Lots</span>
          <span className="hidden md:block">Cloth</span>
          <span className="text-right">From</span>
          <span className="hidden text-right md:block">→</span>
        </div>

        {collections.map((c, i) => (
          <Reveal key={c.slug} delay={i * 100}>
            <Link
              to={`/collections/${c.slug}`}
              className="group grid grid-cols-[2.4rem_1fr_5.5rem] items-center gap-4 border-b border-ink/15 py-7 transition-colors duration-500 hover:bg-beige/60 md:grid-cols-[3rem_1fr_7rem_9rem_7rem_3rem]"
            >
              <span className="num text-[12px] text-gold">{String(i + 1).padStart(2, "0")}</span>
              <span>
                <span className="display block text-[30px] leading-none text-ink transition-colors duration-300 group-hover:text-maroon md:text-[40px]">
                  {c.name}
                </span>
                <span className="mt-2 block max-w-[460px] text-[13.5px] text-ink/65">{c.blurb}</span>
                <span className="mt-3 flex items-center gap-3 md:hidden">
                  <img src={c.hero} alt="" className="h-16 w-12 object-cover" />
                  <span className="num text-xs text-ink/70">{c.items.length} lots</span>
                </span>
              </span>
              <span className="num hidden text-[13px] text-ink/70 md:block">{c.items.length}</span>
              <span className="hidden text-[13px] leading-snug text-ink/70 md:block">
                {c.slug.includes("lehenga") ? "Silk, organza, georgette" : "Tissue, crepe, Chanderi"}
              </span>
              <span className="num text-right font-display text-[20px] text-maroon">
                ₹{fromPrice(c)}
              </span>
              <span className="hidden text-right text-maroon opacity-0 transition-opacity group-hover:opacity-100 md:block">
                →
              </span>
            </Link>
          </Reveal>
        ))}
      </section>

      {/* alternating full-bleed entries */}
      <section className="border-t border-ink/15 bg-paper">
        {collections.map((c, i) => (
          <div key={c.slug} className="border-b border-ink/15 last:border-b-0">
            <div
              className={
                "mx-auto grid max-w-[1440px] items-center gap-8 px-5 py-14 sm:px-8 lg:grid-cols-12 lg:py-20 " +
                (i % 2 ? "" : "")
              }
            >
              <Reveal
                mode="zoom"
                className={"lg:col-span-6 " + (i % 2 ? "lg:order-2" : "")}
              >
                <Link to={`/collections/${c.slug}`} className="group block overflow-hidden">
                  <div className="relative aspect-[4/3] overflow-hidden bg-beige">
                    <img
                      src={c.hero}
                      alt={c.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-[1.06]"
                      style={{ objectPosition: "center 32%" }}
                    />
                    <span className="eyebrow absolute bottom-4 left-4 bg-ivory/90 px-3 py-1.5 text-maroon">
                      {c.eyebrow}
                    </span>
                  </div>
                </Link>
              </Reveal>

              <Reveal
                delay={140}
                className={"lg:col-span-6 " + (i % 2 ? "lg:order-1 lg:pr-10" : "lg:pl-10")}
              >
                <p className="eyebrow text-gold">{c.eyebrow}</p>
                <h2 className="display mt-3 text-[clamp(32px,4.4vw,56px)] text-ink">{c.name}</h2>
                <p className="mt-4 max-w-[460px] text-[15px] leading-relaxed text-ink/75">
                  {c.intro}
                </p>
                <dl className="mt-6 grid max-w-[430px] grid-cols-2 gap-x-6 gap-y-2 border-t border-ink/20 pt-4 text-[13px]">
                  <dt className="text-ink/70">Lots in stock</dt>
                  <dd className="num text-right text-ink">{c.items.length}</dd>
                  <dt className="text-ink/70">Lead time</dt>
                  <dd className="text-right text-ink">
                    {c.slug.includes("bridal") ? "8–11 weeks" : "3–10 days"}
                  </dd>
                  <dt className="text-ink/70">Price from</dt>
                  <dd className="num text-right text-maroon">₹{fromPrice(c)}</dd>
                </dl>
                <Link
                  to={`/collections/${c.slug}`}
                  className="eyebrow mt-7 inline-block border-b border-maroon pb-1 text-maroon hover:border-gold hover:text-gold"
                >
                  Open {c.name} →
                </Link>
              </Reveal>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
