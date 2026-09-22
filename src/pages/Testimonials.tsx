import { Link } from "../router";
import { Lines, Reveal } from "../components/Reveal";
import { testimonials } from "../data";

export function Testimonials() {
  return (
    <>
      <header className="border-b border-ink/15 bg-paper pt-[68px]">
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:py-24">
          <Reveal>
            <p className="eyebrow flex items-center gap-3 text-maroon">
              <span className="h-px w-10 bg-gold" /> Testimonials
            </p>
          </Reveal>
          <Lines
            as="h1"
            delay={140}
            className="display mt-6 text-[clamp(42px,7vw,92px)] text-ink"
            lines={["Told after the", "function was over"]}
          />
          <Reveal delay={600}>
            <dl className="mt-10 grid max-w-[640px] grid-cols-3 gap-6 border-t border-ink/20 pt-6">
              {[
                ["4.9", "average / 5"],
                ["212", "written reviews"],
                ["61%", "come back for a second lot"],
              ].map(([n, l]) => (
                <div key={l}>
                  <dt className="num font-display text-[clamp(32px,4vw,52px)] leading-none text-maroon">
                    {n}
                  </dt>
                  <dd className="eyebrow mt-2 text-ink/70">{l}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </header>

      <section className="mx-auto max-w-[1440px] px-5 sm:px-8">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 60}>
            <figure
              className={
                "grid gap-8 border-b border-ink/15 py-12 lg:grid-cols-12 lg:gap-12 lg:py-16 " +
                (i % 2 ? "lg:[direction:rtl]" : "")
              }
            >
              <div className="lg:col-span-4 lg:[direction:ltr]">
                <div className="aspect-[3/4] overflow-hidden bg-beige">
                  <img
                    src={t.img}
                    alt={`${t.name} wearing ${t.occasion.split("· ")[1] || "her piece"}`}
                    loading="lazy"
                    style={{ objectPosition: t.pos }}
                    className="h-full w-full object-cover transition-transform duration-[1.5s] hover:scale-105"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center lg:col-span-8 lg:[direction:ltr]">
                <span className="num text-[12px] text-gold">
                  {String(i + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
                </span>
                <blockquote className="mt-4 font-display text-[clamp(22px,2.6vw,34px)] leading-[1.4] text-ink italic">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-7 flex flex-wrap items-baseline gap-x-5 gap-y-1 border-t border-ink/15 pt-5">
                  <span className="display text-[24px] text-maroon">{t.name}</span>
                  <span className="eyebrow text-ink/70">{t.place}</span>
                  <span className="eyebrow text-ink/70">{t.occasion}</span>
                  <span className="eyebrow ml-auto text-gold">★★★★★</span>
                </figcaption>
              </div>
            </figure>
          </Reveal>
        ))}
      </section>

      <section className="bg-beige">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-6 px-5 py-16 sm:px-8">
          <div>
            <p className="eyebrow text-maroon">Your turn</p>
            <p className="display mt-2 max-w-[640px] text-[clamp(28px,3.8vw,46px)] text-ink">
              We ask for a line or two after every fitting. These are all of them, unedited.
            </p>
          </div>
          <Link
            to="/visit"
            className="eyebrow bg-maroon px-7 py-4 text-ivory transition-colors hover:bg-maroon-light"
          >
            Book a fitting
          </Link>
        </div>
      </section>
    </>
  );
}
