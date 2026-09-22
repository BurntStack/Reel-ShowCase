import type { Item } from "../data";

export function OutfitCard({
  item,
  index = 0,
  ratio = "aspect-[3/4]",
  showDetail = true,
}: {
  item: Item;
  index?: number;
  ratio?: string;
  showDetail?: boolean;
}) {
  const crossfade = showDetail && item.img !== "images/detail-zardozi.jpg";
  return (
    <article className="reveal" style={{ ["--rd" as string]: `${(index % 3) * 110}ms` }}>
      <div className={"group relative overflow-hidden bg-beige " + ratio}>
        <img
          src={item.img}
          alt={`${item.name} — ${item.type} in ${item.color}`}
          loading="lazy"
          style={{ objectPosition: item.pos || "center" }}
          className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.07]"
        />
        {crossfade && (
          <img
            src="images/detail-zardozi.jpg"
            alt={`Embroidery detail of ${item.name}`}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-[900ms] ease-out group-hover:opacity-100"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/5 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

        <span className="num absolute left-0 top-0 bg-ivory/95 px-2.5 py-1.5 text-[10px] tracking-[0.16em] text-maroon">
          {item.lot}
        </span>

        <div className="absolute inset-x-0 bottom-0 translate-y-3 p-4 opacity-0 transition-all duration-700 ease-out group-hover:translate-y-0 group-hover:opacity-100">
          <p className="text-[13px] leading-snug text-ivory/90">{item.note}</p>
          <p className="eyebrow mt-2 text-gold-light">
            {crossfade ? "Hover · embroidery at 1:1" : item.craft}
          </p>
        </div>
      </div>

      <div className="mt-4 flex items-start justify-between gap-4 border-t border-ink/15 pt-3">
        <div>
          <h3 className="display text-[24px] text-ink">{item.name}</h3>
          <p className="mt-1 text-[13px] leading-relaxed text-ink/65">{item.fabric}</p>
          <p className="text-[13px] text-ink/65">{item.color}</p>
        </div>
        <div className="shrink-0 text-right">
          <p className="eyebrow text-gold">{item.type}</p>
          <p className="num mt-1 font-display text-[19px] text-maroon">
            {item.price === "On request" ? item.price : `₹${item.price}`}
          </p>
        </div>
      </div>
    </article>
  );
}
