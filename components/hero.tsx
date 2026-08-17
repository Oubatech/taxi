import { siteConfig, capacityWithRequestNote } from "@/lib/site-config";
import { CallButton, WhatsAppButton } from "./cta-buttons";
import { CheckIcon } from "./icons";

const badges = [
  "נסיעה מיידית, זמינים 24/7 בכל שעה",
  `רכב שמתאים לצרכים שלכם, עד ${siteConfig.maxPassengers} נוסעים`,
  "גם הזמנה מראש לשדה התעופה",
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-brand-gray">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-2 md:items-center md:py-20">
        <div>
          <p className="mb-3 inline-block rounded-full bg-brand-yellow px-4 py-1 text-sm font-bold text-brand-black">
            {siteConfig.businessName} · חיפה והצפון
          </p>
          <h1 className="text-3xl font-extrabold leading-tight text-brand-black sm:text-4xl md:text-5xl">
            מונית מיידית בכל שעה
            <br />
            בחיפה ובצפון
          </h1>
          <p className="mt-4 text-lg text-neutral-700">
            מתקשרים ומקבלים רכב בהקדם האפשרי לכל יעד בחיפה, עכו, נהריה, הקריות
            וכל אזור הצפון, ברכב המתאים לבקשה שלכם — {capacityWithRequestNote}.
            מציעים גם הזמנת מונית מראש לשדה התעופה בן גוריון ולשדה התעופה חיפה.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton className="w-full sm:w-auto" />
            <CallButton className="w-full sm:w-auto" />
          </div>

          <ul className="mt-8 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6">
            {badges.map((badge) => (
              <li key={badge} className="flex items-center gap-2 text-sm font-medium text-neutral-800">
                <span className="flex size-5 items-center justify-center rounded-full bg-brand-black text-white">
                  <CheckIcon className="size-3" />
                </span>
                {badge}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto flex aspect-square w-full max-w-sm items-center justify-center rounded-full bg-brand-yellow/20 md:max-w-md">
          <div className="flex size-4/5 items-center justify-center rounded-full bg-brand-yellow text-[7rem] shadow-inner sm:text-[9rem]" aria-hidden="true">
            🚕
          </div>
        </div>
      </div>
    </section>
  );
}
