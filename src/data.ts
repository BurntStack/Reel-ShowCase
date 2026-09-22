export type Item = {
  lot: string;
  name: string;
  type: "Saree" | "Lehenga";
  fabric: string;
  craft: string;
  color: string;
  price: string;
  img: string;
  pos?: string;
  note: string;
};

export type Collection = {
  slug: string;
  name: string;
  eyebrow: string;
  blurb: string;
  intro: string;
  hero: string;
  film: string[];
  filmCaption: string;
  items: Item[];
};

const IMG = "images/";

export const collections: Collection[] = [
  {
    slug: "sarees",
    name: "Sarees",
    eyebrow: "Collection I",
    blurb: "Handloom silks, tissue and chiffon — draped, not designed.",
    intro:
      "Four lengths of cloth, one six-yard argument for restraint. Our sarees are chosen at the loom in Kanchipuram, Varanasi and Bhuj, then finished in Jaipur with borders cut to sit flat on the shoulder.",
    hero: IMG + "saree-gold-sun.jpg",
    film: [IMG + "saree-gold-sun.jpg", IMG + "saree-ivory.jpg", IMG + "saree-black-gold.jpg"],
    filmCaption: "Tissue gold in 4 p.m. window light",
    items: [
      {
        lot: "VH-101",
        name: "Ratanpur Kanjivaram",
        type: "Saree",
        fabric: "Pure mulberry tissue silk · 6.3 m",
        craft: "Half-fine zari border, maroon selvedge",
        color: "Antique gold",
        price: "42,500",
        img: IMG + "saree-gold-sun.jpg",
        pos: "center 22%",
        note: "Woven in three panels so the pleats fall without weight.",
      },
      {
        lot: "VH-104",
        name: "Shyamali Banarasi",
        type: "Saree",
        fabric: "Katan silk · 5.5 m + blouse piece",
        craft: "Cutwork kadhua buti, gold-wrapped pallu",
        color: "Black / old gold",
        price: "38,900",
        img: IMG + "saree-black-gold.jpg",
        pos: "center 30%",
        note: "The paisley is drawn by hand each season — no two pallus repeat.",
      },
      {
        lot: "VH-108",
        name: "Mogra Pleat",
        type: "Saree",
        fabric: "Japanese crepe · pre-stitched falls",
        craft: "Hand-beaded bodice, raw ruffle edge",
        color: "Ivory / shell",
        price: "26,400",
        img: IMG + "saree-ivory.jpg",
        pos: "center 28%",
        note: "For the guest who arrives alone and drapes in ninety seconds.",
      },
      {
        lot: "VH-112",
        name: "Bel Phool Chanderi",
        type: "Saree",
        fabric: "Silk-cotton Chanderi · 5.5 m",
        craft: "Zari buti, hand-rolled hem",
        color: "Ivory / pale gold",
        price: "18,750",
        img: IMG + "about-editorial.jpg",
        pos: "62% center",
        note: "Light enough for a Jaipur afternoon, formal enough for a sangeet.",
      },
      {
        lot: "VH-116",
        name: "Gulabi Sitara",
        type: "Saree",
        fabric: "Pre-draped crepe · blouse piece included",
        craft: "All-over sequin buti, tonal stone border",
        color: "Rose / dusty mauve",
        price: "22,800",
        img: "images/saree-rose-sequin.jpg",
        pos: "center 30%",
        note: "Arrives pre-pleated; the border is set so the pallu never slips.",
      },
    ],
  },
  {
    slug: "bridal-lehengas",
    name: "Bridal Lehengas",
    eyebrow: "Collection II",
    blurb: "The heavy ones. Fitted over three months, never hurried.",
    intro:
      "A bridal lehenga leaves our room after eleven fittings. We build the can-can, the weight of the dupatta and the height of the heel before a single stitch of zardozi is laid.",
    hero: IMG + "lehenga-maroon-court.jpg",
    film: [IMG + "lehenga-maroon-court.jpg", IMG + "hero.jpg", IMG + "lehenga-plum.jpg"],
    filmCaption: "Oxblood silk turning in the courtyard",
    items: [
      {
        lot: "VH-201",
        name: "Rani Baori",
        type: "Lehenga",
        fabric: "Raw silk · 14-panel kalis",
        craft: "Zardozi hem, mirrorwork waistband",
        color: "Oxblood / maroon",
        price: "2,84,000",
        img: IMG + "lehenga-maroon-court.jpg",
        pos: "center 35%",
        note: "Eleven weeks on the frame. The border alone runs 9 metres.",
      },
      {
        lot: "VH-205",
        name: "Angoori Jharokha",
        type: "Lehenga",
        fabric: "Silk brocade with fuchsia weft",
        craft: "Banarasi weave, naqshi belt",
        color: "Plum / silver zari",
        price: "3,46,000",
        img: IMG + "lehenga-plum.jpg",
        pos: "center 40%",
        note: "Photographed seated — the skirt is cut to fan, not to hang.",
      },
      {
        lot: "VH-209",
        name: "Saanwariya",
        type: "Lehenga",
        fabric: "Georgette · hand-turned flare",
        craft: "Gota-patti border, sequin buti",
        color: "Deep maroon",
        price: "1,96,000",
        img: IMG + "hero.jpg",
        pos: "center 45%",
        note: "Made for the pheras — 4.2 metres of flare, 900 g total.",
      },
      {
        lot: "VH-213",
        name: "Aabhaar, in close",
        type: "Lehenga",
        fabric: "Silk ground · detail shown",
        craft: "Zardozi, sitara and mirror",
        color: "Maroon / burnished gold",
        price: "On request",
        img: IMG + "detail-zardozi.jpg",
        pos: "center",
        note: "The same border at 1:1 — every coil of dabka set by hand.",
      },
    ],
  },
  {
    slug: "festive-lehengas",
    name: "Festive Lehengas",
    eyebrow: "Collection III",
    blurb: "Diwali, sangeet, ras garba — colour that holds a room.",
    intro:
      "Lighter than bridal, quicker on the feet. Festive lehengas are built in organza, tissue and soft net so you can dance from nine till the last aarti.",
    hero: IMG + "lehenga-sage.jpg",
    film: [IMG + "lehenga-sage.jpg", IMG + "lehenga-plum.jpg", IMG + "lehenga-maroon-court.jpg"],
    filmCaption: "Sage organza, fringe dupatta in motion",
    items: [
      {
        lot: "VH-301",
        name: "Kesar Patti",
        type: "Lehenga",
        fabric: "Organza · soft can-can",
        craft: "Sequin buti, beaded fringe dupatta",
        color: "Sage green / gold",
        price: "78,500",
        img: IMG + "lehenga-sage.jpg",
        pos: "center 40%",
        note: "The fringe is strung bead by bead — it moves half a beat late.",
      },
      {
        lot: "VH-306",
        name: "Rang Mahal",
        type: "Lehenga",
        fabric: "Silk brocade",
        craft: "Brocade body, contrast border",
        color: "Plum / antique gold",
        price: "96,000",
        img: IMG + "lehenga-plum.jpg",
        pos: "center 55%",
        note: "Woven for us in Varanasi on a four-shuttle pit loom.",
      },
      {
        lot: "VH-310",
        name: "Ghunghroo",
        type: "Lehenga",
        fabric: "Georgette flare",
        craft: "Gota hem, tasselled waist",
        color: "Maroon / gold",
        price: "64,900",
        img: IMG + "hero.jpg",
        pos: "center 30%",
        note: "Cut short at the waist for garba — nothing to trip over.",
      },
      {
        lot: "VH-314",
        name: "Marigold Hour",
        type: "Lehenga",
        fabric: "Tissue / net",
        craft: "Mirror chain, pearl spatter",
        color: "Plum / silver",
        price: "71,200",
        img: IMG + "detail-zardozi.jpg",
        pos: "70% center",
        note: "Detail: mirrors set at an angle so they catch low lamp light.",
      },
    ],
  },
  {
    slug: "casual-sarees",
    name: "Casual Sarees",
    eyebrow: "Collection IV",
    blurb: "Everyday six yards — office, lunch, an unplanned evening.",
    intro:
      "The sarees we actually wear. Washable crepe, chanderi and tissue at prices that don't ask for an occasion. Half are pre-stitched; all come with a fall and picot already set.",
    hero: IMG + "saree-ivory.jpg",
    film: [IMG + "saree-ivory.jpg", IMG + "about-editorial.jpg", IMG + "saree-gold-sun.jpg"],
    filmCaption: "Crepe pleats, ninety-second drape",
    items: [
      {
        lot: "VH-401",
        name: "Aamras Crepe",
        type: "Saree",
        fabric: "Washable crepe · 5.5 m",
        craft: "Raw ruffle pallu, no blouse piece",
        color: "Ivory",
        price: "9,450",
        img: IMG + "saree-ivory.jpg",
        pos: "center 45%",
        note: "Folds into a handbag. This is the one we reorder most.",
      },
      {
        lot: "VH-404",
        name: "Chai Ghar Chanderi",
        type: "Saree",
        fabric: "Silk-cotton Chanderi",
        craft: "Zari buti, machine-finished edge",
        color: "Ivory / pale gold",
        price: "11,200",
        img: IMG + "about-editorial.jpg",
        pos: "68% center",
        note: "Stiff for the first wear, then it remembers you.",
      },
      {
        lot: "VH-407",
        name: "Tissue Din",
        type: "Saree",
        fabric: "Lightweight tissue",
        craft: "Woven border, no lining needed",
        color: "Antique gold",
        price: "14,600",
        img: IMG + "saree-gold-sun.jpg",
        pos: "center 55%",
        note: "Reads as gold in the evening, as beige at noon.",
      },
      {
        lot: "VH-411",
        name: "Shaam Kalamkari",
        type: "Saree",
        fabric: "Viscose-silk blend",
        craft: "Printed kadhua motif, gold pallu",
        color: "Black / gold",
        price: "12,900",
        img: IMG + "saree-black-gold.jpg",
        pos: "center 20%",
        note: "Our one black saree, kept in stock since 1996.",
      },
    ],
  },
];

export const testimonials = [
  {
    name: "Ananya Rathore",
    place: "Jaipur",
    occasion: "Wedded, November · Rani Baori",
    quote:
      "I went in for a saree and left with a lehenga I hadn't planned. What sold me was the fitting — they marked the hem while I was wearing my own heels, and it landed exactly at the floor.",
    img: "images/lehenga-maroon-court.jpg",
    pos: "center 25%",
  },
  {
    name: "Meher Kaur Sethi",
    place: "Chandigarh",
    occasion: "Sister of the bride · Kesar Patti",
    quote:
      "The sage organza moved better than anything else I tried all season. Three fittings, no drama, and they repacked the dupatta in muslin after the function.",
    img: "images/lehenga-sage.jpg",
    pos: "center 30%",
  },
  {
    name: "Ishita Bhandari",
    place: "Udaipur",
    occasion: "Reception · Shyamali Banarasi",
    quote:
      "Six people asked if the black banarasi was my grandmother's. It was eleven days old. That is the whole point of this place.",
    img: "images/saree-black-gold.jpg",
    pos: "center 28%",
  },
  {
    name: "Rhea Menon",
    place: "Bengaluru",
    occasion: "Diwali · Angoori Jharokha",
    quote:
      "They let me sit on the floor in the skirt to check whether the pleats would fan. Nobody had thought to do that for me before.",
    img: "images/lehenga-plum.jpg",
    pos: "center 35%",
  },
  {
    name: "Aditi Sharma",
    place: "New Delhi",
    occasion: "Engagement · Mogra Pleat",
    quote:
      "Ivory crepe, draped in ninety seconds, and the beaded bodice never once needed adjusting through the evening.",
    img: "images/saree-ivory.jpg",
    pos: "center 30%",
  },
  {
    name: "Priyanka Vijayvargiya",
    place: "Indore",
    occasion: "Coat ceremony · Ratanpur Kanjivaram",
    quote:
      "The tissue has a weight to it that photographs cannot carry. My mother touched the border once and said, 'this is real'.",
    img: "images/saree-gold-sun.jpg",
    pos: "center 25%",
  },
];

export const navLinks = [
  { label: "About", path: "/about" },
  { label: "Collections", path: "/collections" },
  { label: "Lookbook", path: "/lookbook" },
  { label: "Testimonials", path: "/testimonials" },
  { label: "Visit", path: "/visit" },
];

export const store = {
  address1: "12 Jacob Road, Civil Lines",
  address2: "Jaipur, Rajasthan 302006",
  phone: "+91 141 4004 197",
  whatsapp: "919829019740",
  email: "atelier@vastraaheritage.in",
  hours: [
    ["Tuesday – Saturday", "11:00 – 20:00"],
    ["Sunday", "12:00 – 18:00"],
    ["Monday", "By appointment"],
  ],
  bridalFitting: "Bridal fittings: 11:00, by appointment only",
};

/** Lowest numeric price in a collection, in Indian digit grouping. */
export function fromPrice(c: Collection): string {
  const nums = c.items
    .map((i) => parseInt(i.price.replace(/[^0-9]/g, ""), 10))
    .filter((n) => !Number.isNaN(n));
  if (!nums.length) return "—";
  return Math.min(...nums).toLocaleString("en-IN");
}
