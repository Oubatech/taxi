import { siteConfig, capacityWithRequestNote } from "@/lib/site-config";

const services = [
  {
    icon: "🚕",
    title: "נסיעה מיידית בחיפה ובצפון",
    description:
      "מתקשרים או שולחים הודעת ווטסאפ, ומקבלים מונית בהקדם האפשרי לכל כתובת בחיפה, עכו, נהריה, הקריות וכל אזור הצפון — ללא צורך בהזמנה מראש.",
  },
  {
    icon: "✈️",
    title: "הזמנת מונית מראש לשדה התעופה",
    description: `לצד הנסיעות המיידיות, ניתן גם להזמין מראש נסיעה ל${siteConfig.bengurionAirport} או ל${siteConfig.haifaAirport}. מומלץ להזמין מראש, וניתן במידת הצורך גם בהתראה קצרה יותר.`,
  },
  {
    icon: "👨‍👩‍👧‍👦",
    title: `רכב מרווח, ${capacityWithRequestNote}`,
    description:
      "גודל הרכב מותאם למספר הנוסעים בבקשה שלכם, כך שמשפחות וקבוצות יכולות לנסוע יחד עם המזוודות, בלי צורך בשני רכבים נפרדים.",
  },
  {
    icon: "🕒",
    title: "זמינות 24/7",
    description:
      "בין אם מדובר בנסיעה מיידית או בטיסה מוקדמת בבוקר, מאוחרת בלילה או בסוף שבוע — אנחנו זמינים בכל שעה, כל ימות השבוע.",
  },
];

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-extrabold text-brand-black sm:text-3xl">
          השירותים שלנו
        </h2>
        <p className="mt-3 text-neutral-600">
          נסיעה מיידית לכל יעד בחיפה ובצפון, ולצד זאת גם הזמנת מונית מראש לשדה
          התעופה.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <div className="mb-3 flex size-12 items-center justify-center rounded-xl bg-brand-yellow/20 text-2xl" aria-hidden="true">
              {service.icon}
            </div>
            <h3 className="text-lg font-bold text-brand-black">{service.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
