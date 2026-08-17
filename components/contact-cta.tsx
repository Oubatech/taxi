import { siteConfig } from "@/lib/site-config";
import { CallButton, WhatsAppButton } from "./cta-buttons";

export function ContactCTA() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
      <div className="rounded-3xl bg-brand-yellow px-6 py-12 text-center sm:px-12">
        <h2 className="text-2xl font-extrabold text-brand-black sm:text-3xl">
          צריכים מונית? מזמינים עכשיו
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-brand-black/80">
          זמינים 24/7 בטלפון ובווטסאפ — {siteConfig.phoneDisplay}. נסיעה מיידית
          לכל יעד בחיפה ובצפון, וגם הזמנה מראש לשדה התעופה — פשוט תגידו לנו מה
          אתם צריכים.
        </p>
        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <WhatsAppButton />
          <CallButton />
        </div>
      </div>
    </section>
  );
}
