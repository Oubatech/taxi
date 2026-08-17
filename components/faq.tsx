import { siteConfig, capacityWithRequestNote } from "@/lib/site-config";

const immediateFaqItems = [
  {
    question: "איך מזמינים מונית מיידית בחיפה או בצפון?",
    answer:
      "מתקשרים אלינו או שולחים הודעת ווטסאפ עם כתובת האיסוף והיעד, ואנחנו שולחים מונית בהקדם האפשרי — ללא צורך בהזמנה מראש.",
  },
  {
    question: "כמה זמן לוקח לרכב להגיע?",
    answer:
      "זמן ההגעה משתנה בהתאם למיקום שלכם ולעומס באותו רגע, אך אנחנו פועלים להגיע במהירות האפשרית לכל נקודה בחיפה ובכל אזור הצפון.",
  },
  {
    question: "אילו אזורים אתם מכסים?",
    answer: `אנחנו מספקים שירות איסוף והסעה בחיפה, ${siteConfig.areasServed
      .filter((a) => a !== "חיפה" && a !== "כל אזור הצפון")
      .join(", ")} וביתר אזורי הצפון.`,
  },
  {
    question: "כמה נוסעים אפשר להזמין ברכב אחד?",
    answer: `גודל הרכב מותאם למספר הנוסעים בבקשה שלכם, ${capacityWithRequestNote} בנסיעה אחת, כולל מקום נוח למזוודות, כך שמשפחות וקבוצות יכולות לנסוע יחד ברכב אחד.`,
  },
];

const airportFaqItems = [
  {
    question: "מתי כדאי להזמין מונית לשדה התעופה?",
    answer: `מומלץ להזמין מונית לשדה התעופה מראש, יום־יומיים לפני הטיסה, כדי להבטיח זמינות רכב בשעה הרצויה — בין אם מדובר בטיסה מ${siteConfig.bengurionAirport} או מ${siteConfig.haifaAirport}. עם זאת, ניתן להזמין מונית גם מספר שעות לפני הנסיעה, בהתאם לזמינות באותו מועד. ככלל, ככל שההזמנה מוקדמת יותר כך קל יותר להבטיח את הרכב המתאים בשעה המבוקשת.`,
  },
  {
    question: "אפשר להזמין מונית ברגע האחרון לשדה התעופה?",
    answer:
      "במידת הצורך אפשר לנסות להזמין גם בהתראה קצרה של מספר שעות, ואנחנו נעשה את המקסימום כדי לסייע בהתאם לזמינות הרכבים באותה שעה. יחד עם זאת, הזמנה מראש תמיד עדיפה ומבטיחה שקט נפשי, במיוחד בימי עומס.",
  },
  {
    question: "כמה זמן לפני הטיסה כדאי לצאת מהבית?",
    answer: `זה תלוי לאיזה שדה תעופה טסים. הנסיעה מחיפה ל${siteConfig.haifaAirport} קצרה משמעותית, בעוד שהנסיעה ל${siteConfig.bengurionAirport} נעה בדרך כלל בין שעה לשעה וחצי, בהתאם לנקודת המוצא ולעומסי הדרכים. מומלץ לקחת בחשבון גם את זמן ההמתנה בשדה התעופה ולתאם את שעת האיסוף בהתאם, כדי להגיע בנחת וללא לחץ.`,
  },
  {
    question: "האם שעת האיסוף מותאמת לשעת הטיסה בפועל?",
    answer:
      "כן. בעת ההזמנה נתאם יחד את שעת הטיסה, היעד ושדה התעופה, ונקבע את שעת האיסוף כך שתגיעו בזמן הנוח ביותר, מבלי להימצא בלחץ מיותר.",
  },
  {
    question: "איך מזמינים מונית מראש לשדה התעופה?",
    answer:
      "אפשר להזמין בקלות בשיחת טלפון או בהודעת ווטסאפ ישירות מהאתר. נשמח לתאם עבורכם את כל פרטי הנסיעה — כתובת איסוף, שדה התעופה, שעת טיסה ומספר נוסעים.",
  },
];

export const faqItems = [...immediateFaqItems, ...airportFaqItems];

export function FAQ() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section id="faq" className="bg-brand-gray py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="mx-auto max-w-3xl px-4">
        <div className="text-center">
          <h2 className="text-2xl font-extrabold text-brand-black sm:text-3xl">
            שאלות נפוצות
          </h2>
        </div>

        <h3 className="mt-8 text-lg font-bold text-brand-black">
          נסיעות מיידיות בחיפה ובצפון
        </h3>
        <div className="mt-3 flex flex-col gap-3">
          {immediateFaqItems.map((item) => (
            <details
              key={item.question}
              className="group rounded-xl border border-black/5 bg-white p-4 open:shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-bold text-brand-black">
                {item.question}
                <span
                  className="shrink-0 text-xl text-neutral-400 transition group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                {item.answer}
              </p>
            </details>
          ))}
        </div>

        <h3 className="mt-10 text-lg font-bold text-brand-black">
          הזמנת מונית מראש לשדה התעופה
        </h3>
        <div className="mt-3 flex flex-col gap-3">
          {airportFaqItems.map((item) => (
            <details
              key={item.question}
              className="group rounded-xl border border-black/5 bg-white p-4 open:shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-bold text-brand-black">
                {item.question}
                <span
                  className="shrink-0 text-xl text-neutral-400 transition group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
