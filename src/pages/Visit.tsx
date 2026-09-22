import { useState } from "react";
import { Lines, Reveal } from "../components/Reveal";
import { Parallax } from "../components/Parallax";
import { store } from "../data";

const MAP_SRC =
  "https://www.google.com/maps?q=Civil%20Lines%2C%20Jaipur%2C%20Rajasthan&z=15&output=embed";
const MAP_LINK =
  "https://www.google.com/maps/search/?api=1&query=Civil+Lines%2C+Jaipur%2C+Rajasthan";

export function Visit() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <header className="relative overflow-hidden border-b border-ink/15 pt-[68px]">
        <div className="absolute inset-0">
          <Parallax strength={44}>
            <img
              src="images/boutique.jpg"
              alt="Inside the Vastraa Heritage showroom"
              className="h-[125%] w-full object-cover"
            />
          </Parallax>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-ivory via-ivory/85 to-ivory/25" />
        <div className="relative mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:py-28">
          <Reveal>
            <p className="eyebrow flex items-center gap-3 text-maroon">
              <span className="h-px w-10 bg-gold" /> Visit us · Jaipur
            </p>
          </Reveal>
          <Lines
            as="h1"
            delay={140}
            className="display mt-6 max-w-[860px] text-[clamp(40px,6.6vw,88px)] text-ink"
            lines={["First floor,", "above the tailor's"]}
          />
          <Reveal delay={640}>
            <p className="mt-6 max-w-[470px] text-[15px] leading-relaxed text-ink/75">
              Ring the brass bell beside the blue door. There is chai, a full-length mirror, and no
              appointment needed outside bridal season.
            </p>
          </Reveal>
        </div>
      </header>

      <section className="mx-auto grid max-w-[1440px] gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:py-24">
        {/* form */}
        <div className="lg:col-span-7">
          <Reveal>
            <p className="eyebrow text-gold">Request an appointment</p>
            <h2 className="display mt-3 text-[clamp(30px,3.8vw,48px)] text-ink">
              Tell us the occasion
            </h2>
          </Reveal>

          {sent ? (
            <Reveal className="mt-8 border border-gold bg-paper p-8">
              <p className="eyebrow text-gold">Received</p>
              <p className="display mt-3 text-[30px] leading-tight text-ink">
                Thank you — we'll write back within a day.
              </p>
              <p className="mt-3 text-sm text-ink/70">
                For anything urgent, message the atelier on WhatsApp at{" "}
                <span className="num text-maroon">{store.phone}</span>.
              </p>
            </Reveal>
          ) : (
            <form
              className="mt-8 grid gap-6 sm:grid-cols-2"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              {[
                { id: "name", label: "Your name", type: "text", ph: "Ananya Rathore" },
                { id: "phone", label: "Phone / WhatsApp", type: "tel", ph: "+91 98290 00000" },
                { id: "email", label: "Email", type: "email", ph: "you@email.com" },
                { id: "date", label: "Preferred date", type: "date", ph: "" },
              ].map((f) => (
                <div key={f.id}>
                  <label htmlFor={f.id} className="eyebrow block text-ink/70">
                    {f.label}
                  </label>
                  <input
                    id={f.id}
                    type={f.type}
                    required
                    placeholder={f.ph}
                    className="mt-2 w-full border-b border-ink/30 bg-transparent pb-2 text-[15px] text-ink placeholder:text-ink/55 focus:border-maroon focus:outline-none"
                  />
                </div>
              ))}

              <div>
                <label htmlFor="interest" className="eyebrow block text-ink/70">
                  I'm here for
                </label>
                <select
                  id="interest"
                  className="mt-2 w-full border-b border-ink/30 bg-transparent pb-2 text-[15px] text-ink focus:border-maroon focus:outline-none"
                  defaultValue="Bridal Lehenga"
                >
                  <option>Bridal Lehenga</option>
                  <option>Festive Lehenga</option>
                  <option>Saree — handloom silk</option>
                  <option>Saree — casual / everyday</option>
                  <option>Not sure yet</option>
                </select>
              </div>

              <div>
                <label htmlFor="budget" className="eyebrow block text-ink/70">
                  Budget band
                </label>
                <select
                  id="budget"
                  className="mt-2 w-full border-b border-ink/30 bg-transparent pb-2 text-[15px] text-ink focus:border-maroon focus:outline-none"
                  defaultValue="₹50,000 – ₹1,00,000"
                >
                  <option>Under ₹25,000</option>
                  <option>₹25,000 – ₹50,000</option>
                  <option>₹50,000 – ₹1,00,000</option>
                  <option>₹1,00,000 and above</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="msg" className="eyebrow block text-ink/70">
                  The occasion
                </label>
                <textarea
                  id="msg"
                  rows={4}
                  placeholder="December wedding in Udaipur, reception only, already have the jewellery…"
                  className="mt-2 w-full resize-none border-b border-ink/30 bg-transparent pb-2 text-[15px] text-ink placeholder:text-ink/55 focus:border-maroon focus:outline-none"
                />
              </div>

              <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
                <button
                  type="submit"
                  className="eyebrow bg-maroon px-8 py-4 text-ivory transition-colors hover:bg-maroon-light"
                >
                  Send request
                </button>
                <a
                  href={`https://wa.me/${store.whatsapp}?text=Namaste%20Vastraa%20Heritage`}
                  target="_blank"
                  rel="noreferrer"
                  className="eyebrow border border-ink/40 px-8 py-4 text-ink transition-colors hover:border-maroon hover:text-maroon"
                >
                  WhatsApp instead
                </a>
              </div>
            </form>
          )}
        </div>

        {/* details */}
        <aside className="lg:col-span-5">
          <Reveal delay={140}>
            <div className="border border-ink/15 bg-paper p-7">
              <p className="eyebrow text-gold">The room</p>
              <p className="mt-4 font-display text-[27px] leading-snug text-ink">
                {store.address1}
                <br />
                {store.address2}
              </p>
              <div className="mt-5 space-y-2 border-t border-ink/15 pt-5 text-sm">
                <p className="num flex justify-between gap-4">
                  <span className="text-ink/70">Telephone</span>
                  <a href={`tel:${store.phone.replace(/\s/g, "")}`} className="text-maroon hover:underline">
                    {store.phone}
                  </a>
                </p>
                <p className="flex justify-between gap-4">
                  <span className="text-ink/70">Email</span>
                  <a href={`mailto:${store.email}`} className="text-maroon hover:underline">
                    {store.email}
                  </a>
                </p>
              </div>

              <dl className="mt-6 border-t border-ink/15 pt-5">
                <p className="eyebrow mb-3 text-ink/70">Hours</p>
                {store.hours.map(([d, h]) => (
                  <div key={d} className="flex justify-between gap-4 border-b border-ink/10 py-2 text-sm">
                    <dt className="text-ink/70">{d}</dt>
                    <dd className="num text-ink">{h}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 text-[13px] italic text-maroon">{store.bridalFitting}</p>
            </div>
          </Reveal>

          <Reveal delay={240} className="mt-6">
            <a
              href={`https://wa.me/${store.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between gap-4 bg-maroon px-6 py-5 text-ivory transition-colors hover:bg-maroon-light"
            >
              <span>
                <span className="eyebrow block text-gold-light">WhatsApp</span>
                <span className="display block text-[24px] leading-tight">Message the atelier</span>
              </span>
              <span className="text-2xl transition-transform group-hover:translate-x-1">→</span>
            </a>
          </Reveal>
        </aside>
      </section>

      {/* map */}
      <section className="border-t border-ink/15 bg-beige">
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="eyebrow text-maroon">Finding us</p>
              <h2 className="display mt-2 text-[clamp(28px,3.6vw,46px)] text-ink">
                Civil Lines, two minutes from C-Scheme
              </h2>
            </div>
            <a
              href={MAP_LINK}
              target="_blank"
              rel="noreferrer"
              className="eyebrow link-underline border-b border-ink/40 pb-1 text-ink hover:border-maroon hover:text-maroon"
            >
              Open in Google Maps →
            </a>
          </div>

          <Reveal delay={140} className="mt-8">
            <div className="relative h-[380px] w-full overflow-hidden border border-ink/20 bg-paper sm:h-[460px]">
              {/* designed fallback sits behind the embed */}
              <div className="absolute inset-0 grid place-items-center px-6 text-center">
                <div>
                  <p className="deva text-[13px] text-ink/70">जयपुर · सिविल लाइंस</p>
                  <p className="display mt-2 text-[28px] text-ink">{store.address1}</p>
                  <p className="num mt-1 text-sm text-ink/70">26.9089° N, 75.7994° E</p>
                </div>
              </div>
              <iframe
                title="Map of Vastraa Heritage, Civil Lines, Jaipur"
                src={MAP_SRC}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full"
                style={{
                  border: 0,
                  filter: "sepia(0.42) saturate(0.72) contrast(0.95) brightness(1.03)",
                }}
              />
            </div>
          </Reveal>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              ["By car", "Parking on the lane behind the shop; the blue door is the first one."],
              ["By metro", "Chandpole station, then an eight-minute rickshaw towards C-Scheme."],
              ["Bridal visits", "Weekday mornings, one family at a time, two hours held for you."],
            ].map(([t, d], i) => (
              <Reveal key={t} delay={i * 110} className="border-t border-ink/25 pt-4">
                <p className="eyebrow text-gold">{t}</p>
                <p className="mt-2 text-[14px] leading-relaxed text-ink/75">{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
