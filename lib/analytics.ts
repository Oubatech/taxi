declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

// Fires a GA4 event when a visitor taps a call/WhatsApp button — this is the
// real conversion signal for this business, not pageviews. Can later be
// marked as a "key event" in GA4 and imported into Google Ads as a conversion.
export function trackContactClick(method: "call" | "whatsapp") {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", "contact_click", { method });
}
