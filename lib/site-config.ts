// Central place for all business details.
// UPDATE siteUrl once a real domain is purchased — it feeds canonical URLs,
// the sitemap, and structured data.

export const siteConfig = {
  businessName: "מלך המוניות",
  tagline: "מונית לשדה התעופה מחיפה והצפון",
  phoneDisplay: "054-277-6251",
  phoneTel: "+972542776251", // used for tel: links
  whatsappNumber: "972542776251", // used for wa.me links (no leading 0, no +)
  siteUrl: "https://example.co.il", // TODO: replace with real domain before going live
  defaultWhatsappMessage:
    "שלום, אני מעוניין/ת להזמין מונית לשדה התעופה",
  areasServed: [
    "חיפה",
    "עכו",
    "נהריה",
    "קריית אתא",
    "קריית ביאליק",
    "קריית מוצקין",
    "קריית ים",
    "כרמיאל",
    "טבריה",
    "נצרת",
    "עפולה",
    "זכרון יעקב",
    "כל אזור הצפון",
  ],
  maxPassengers: 6,
} as const;

export const whatsappHref = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
  siteConfig.defaultWhatsappMessage
)}`;

export const telHref = `tel:${siteConfig.phoneTel}`;

// Single source of truth for how car capacity is phrased across the site —
// the vehicle is matched to the request, up to this many passengers.
export const capacityShort = `עד ${siteConfig.maxPassengers} נוסעים`;
export const capacityWithRequestNote = `עד ${siteConfig.maxPassengers} נוסעים, בהתאם לבקשה`;
