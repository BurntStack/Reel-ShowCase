/**
 * Photograph slots.
 *
 * Every image on the site is addressed by a filename in /public/images.
 * Drop the client photograph in over that filename and it appears everywhere
 * it is used — no code change needed.
 *
 * Slots below are the newest requests; until their file exists the site falls
 * back to the nearest stand-in, then to a typographic plate.
 */
export const SLOT_FALLBACK: Record<string, string> = {
  "images/saree-rose-sequin.jpg": "images/saree-ivory.jpg",
};

/** Catches broken <img> loads: try the stand-in, otherwise render a designed plate. */
export function installImageFallback() {
  const onErr = (e: Event) => {
    const el = e.target as HTMLImageElement | null;
    if (!el || el.tagName !== "IMG") return;
    const src = (el.getAttribute("src") || "").replace(/^\.\//, "");
    if (!el.dataset.slotTried && SLOT_FALLBACK[src]) {
      el.dataset.slotTried = "1";
      el.src = SLOT_FALLBACK[src];
      return;
    }
    el.dataset.plate = "1";
    el.style.visibility = "hidden";
    const holder = el.parentElement;
    if (holder) {
      holder.classList.add("is-plate");
      if (!holder.getAttribute("data-plate")) {
        holder.setAttribute(
          "data-plate",
          (el.getAttribute("alt") || "Vastraa Heritage · Jaipur").slice(0, 90),
        );
      }
    }
  };
  window.addEventListener("error", onErr, true);
  return () => window.removeEventListener("error", onErr, true);
}
