import { useState } from "react";
import { Link, navigate } from "../router";
import { navLinks, store } from "../data";

export function Mark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" fill="none">
      <path
        d="M32 57C18.5 51.5 12 40.5 14.5 29.5C17 18.5 27 8.5 38 8.5C47.5 8.5 54 15.5 52.5 24C51 32 44 36.5 37.5 34.5C32.5 33 30.5 27.5 33.5 24.5C36.5 21.5 41.5 23 42.5 27"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path d="M32 57V63" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="24" cy="40" r="2" fill="currentColor" />
      <circle cx="30" cy="30" r="1.6" fill="currentColor" />
    </svg>
  );
}

/** Fixed vertical rail — the maroon index tab of the swatch book. */
export function Rail() {
  return (
    <div className="fixed inset-y-0 left-0 z-40 hidden w-11 flex-col items-center justify-between border-r border-maroon/30 bg-maroon py-5 text-ivory md:flex">
      <Link to="/" aria-label="Vastraa Heritage home" className="text-gold-light transition-opacity hover:opacity-70">
        <Mark className="h-6 w-6" />
      </Link>
      <div className="vert eyebrow flex items-center gap-6 text-ivory/80">
        <span className="deva text-[13px] tracking-normal">वस्त्रा हेरिटेज</span>
        <span>Sarees &amp; Lehengas</span>
        <span className="num text-gold-light">EST. 1978 · JAIPUR</span>
      </div>
      <span className="num text-[10px] tracking-widest text-ivory/50">01</span>
    </div>
  );
}

export function Nav({ route }: { route: string }) {
  const [open, setOpen] = useState(false);
  const active = (p: string) => route === p || (p !== "/" && route.startsWith(p));

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 md:pl-11">
        <div
          className={
            "backdrop-blur-md transition-all duration-500 " +
            (open ? "bg-ivory" : "bg-ivory/92")
          }
        >
          <div className="mx-auto flex h-[68px] max-w-[1440px] items-center justify-between px-5 sm:px-8">
            <Link to="/" className="group flex items-baseline gap-3" onClick={() => setOpen(false)}>
              <Mark className="h-7 w-7 shrink-0 self-center text-maroon transition-transform duration-700 group-hover:rotate-[-12deg]" />
              <span className="flex flex-col leading-none">
                <span className="display text-[22px] text-ink sm:text-[25px]">Vastraa</span>
                <span className="eyebrow mt-1 text-[9px] text-gold">Heritage · Jaipur</span>
              </span>
            </Link>

            <nav className="hidden items-center gap-7 lg:flex">
              {navLinks.map((l) => (
                <Link
                  key={l.path}
                  to={l.path}
                  className={
                    "eyebrow link-underline pb-1 transition-colors " +
                    (active(l.path) ? "text-maroon" : "text-ink/75 hover:text-maroon")
                  }
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/visit"
                className="eyebrow rounded-none border border-maroon px-4 py-2.5 text-maroon transition-colors duration-500 hover:bg-maroon hover:text-ivory"
              >
                Book a fitting
              </Link>
            </nav>

            <button
              className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              <span
                className={"h-px w-6 bg-ink transition-transform duration-300 " + (open ? "translate-y-[3px] rotate-45" : "")}
              />
              <span
                className={"h-px w-6 bg-ink transition-transform duration-300 " + (open ? "-translate-y-[3px] -rotate-45" : "")}
              />
            </button>
          </div>
          <div className="h-px w-full bg-ink/12" />
        </div>
      </header>

      {/* mobile sheet */}
      <div
        className={
          "fixed inset-0 z-40 bg-ivory transition-[opacity,visibility] duration-500 lg:hidden " +
          (open ? "visible opacity-100" : "invisible opacity-0")
        }
      >
        <div className="flex h-full flex-col justify-between px-6 pb-10 pt-28">
          <nav className="flex flex-col gap-1">
            {[{ label: "Home", path: "/" }, ...navLinks].map((l, i) => (
              <Link
                key={l.path}
                to={l.path}
                onClick={() => setOpen(false)}
                className="group flex items-baseline justify-between border-b border-ink/10 py-4"
              >
                <span className="display text-[34px] text-ink group-hover:text-maroon">{l.label}</span>
                <span className="num eyebrow text-gold">{String(i + 1).padStart(2, "0")}</span>
              </Link>
            ))}
          </nav>
          <div className="text-ink/70">
            <p className="eyebrow text-gold">The house</p>
            <p className="mt-2 font-display text-xl">{store.address1}</p>
            <p className="font-display text-xl">{store.address2}</p>
            <p className="num mt-3 text-sm">{store.phone}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export function Footer() {
  const [sent, setSent] = useState(false);
  return (
    <footer className="relative border-t border-ink/15 bg-paper">
      <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          {/* instagram */}
          <div className="lg:col-span-5">
            <div className="flex items-baseline justify-between">
              <p className="eyebrow text-gold">@vastraaheritage</p>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="eyebrow link-underline text-ink/70 hover:text-maroon"
              >
                Follow the feed
              </a>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-1.5">
              {[
                "images/lehenga-maroon-court.jpg",
                "images/saree-ivory.jpg",
                "images/lehenga-sage.jpg",
                "images/saree-gold-sun.jpg",
                "images/lehenga-plum.jpg",
                "images/saree-rose-sequin.jpg",
              ].map((src) => (
                <a
                  key={src}
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="group relative aspect-square overflow-hidden bg-beige"
                >
                  <img
                    src={src}
                    alt="Vastraa Heritage on Instagram"
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                  />
                  <span className="absolute inset-0 bg-maroon/0 transition-colors duration-500 group-hover:bg-maroon/25" />
                </a>
              ))}
            </div>
          </div>

          {/* links */}
          <div className="lg:col-span-2">
            <p className="eyebrow text-gold">Navigate</p>
            <ul className="mt-4 space-y-2">
              {[{ label: "Home", path: "/" }, ...navLinks].map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="link-underline text-ink/80 hover:text-maroon">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="eyebrow text-gold">Collections</p>
            <ul className="mt-4 space-y-2">
              {[
                ["Sarees", "/collections/sarees"],
                ["Bridal Lehengas", "/collections/bridal-lehengas"],
                ["Festive Lehengas", "/collections/festive-lehengas"],
                ["Casual Sarees", "/collections/casual-sarees"],
              ].map(([label, path]) => (
                <li key={path}>
                  <Link to={path} className="link-underline text-ink/80 hover:text-maroon">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* newsletter */}
          <div className="lg:col-span-3">
            <p className="eyebrow text-gold">The ledger</p>
            <p className="mt-4 font-display text-[26px] leading-[1.15] text-ink">
              Four letters a year — new lots, no noise.
            </p>
            <form
              className="mt-5"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              {sent ? (
                <p className="border-b border-gold pb-3 text-sm text-maroon">
                  Added. The next letter goes out with the Diwali lots.
                </p>
              ) : (
                <div className="flex items-center gap-3 border-b border-ink/30 pb-2 focus-within:border-maroon">
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    aria-label="Email address"
                    className="w-full bg-transparent text-sm text-ink placeholder:text-ink/55 focus:outline-none"
                  />
                  <button type="submit" className="eyebrow shrink-0 text-maroon hover:text-gold">
                    Join →
                  </button>
                </div>
              )}
            </form>
            <p className="mt-5 text-sm text-ink/70">
              {store.address1}
              <br />
              {store.address2}
              <br />
              <span className="num">{store.phone}</span>
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-ink/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="eyebrow text-ink/70">© 2026 Vastraa Heritage · Sarees &amp; lehengas only</p>
          <p className="eyebrow flex items-center gap-3 text-ink/70">
            <span className="deva text-[13px] tracking-normal">वस्त्रा</span>
            <span>Cut, fitted and finished in Jaipur</span>
          </p>
        </div>
      </div>
      <button
        onClick={() => navigate("/visit")}
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:bg-maroon focus:px-4 focus:py-2 focus:text-ivory"
      >
        Skip to contact
      </button>
    </footer>
  );
}
