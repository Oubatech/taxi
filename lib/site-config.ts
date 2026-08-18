// Central place for all business details.

// Read from env vars (set in Vercel → Project → Settings → Environment
// Variables) at build time, since this is a static export with no server to
// read env vars at request time. Both fall back to real values if unset.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://htaxi.online";
const gaMeasurementId =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-CQK9ZLGCV0";

export const siteConfig = {
  businessName: "מלך המוניות",
  tagline: "מונית מיידית בחיפה ובצפון",
  phoneDisplay: "054-277-6251",
  phoneTel: "+972542776251", // used for tel: links
  whatsappNumber: "972542776251", // used for wa.me links (no leading 0, no +)
  siteUrl,
  gaMeasurementId,
  defaultWhatsappMessage: "שלום, אני מעוניין/ת להזמין מונית",
  // Primary service: immediate/on-demand rides anywhere in Haifa & the North.
  // Secondary (lower-priority, advance-booking) service: airport transfers.
  bengurionAirport: "נתב\"ג (שדה התעופה בן גוריון)",
  haifaAirport: "שדה התעופה חיפה (חוף הכרמל)",
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
