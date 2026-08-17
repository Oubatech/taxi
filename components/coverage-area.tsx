import { siteConfig } from "@/lib/site-config";
import { WhatsAppButton } from "./cta-buttons";

export function CoverageArea() {
  return (
    <section id="areas" className="bg-brand-black py-16 text-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-extrabold sm:text-3xl">אזורי שירות: חיפה והצפון</h2>
          <p className="mt-3 text-neutral-300">
            אנחנו מגיעים לאיסוף מכל אזור חיפה והצפון, ומסיעים ישירות לשדה התעופה בן גוריון וממנו.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {siteConfig.areasServed.map((city) => (
            <span
              key={city}
              className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium"
            >
              {city}
            </span>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <WhatsAppButton />
        </div>
      </div>
    </section>
  );
}
