import { siteConfig, capacityWithRequestNote } from "@/lib/site-config";

export const faqItems = [
  {
    question: "מתי כדאי להזמין מונית לשדה התעופה?",
    answer:
      "מומלץ להזמין מונית לשדה התעופה מראש, יום־יומיים לפני הטיסה, כדי להבטיח זמינות רכב בשעה הרצויה — בעיקר בטיסות מוקדמות בבוקר, מאוחרות בלילה, בסופי שבוע ובתקופות עומס. עם זאת, ניתן להזמין מונית גם מספר שעות לפני הנסיעה, בהתאם לזמינות באותו מועד. ככלל, ככל שההזמנה מוקדמת יותר כך קל יותר להבטיח את הרכב המתאים בשעה המבוקשת.",
  },
  {
    question: "אפשר להזמין מונית ברגע האחרון?",
    answer:
      "במידת הצורך אפשר לנסות להזמין גם בהתראה קצרה של מספר שעות, ואנחנו נעשה את המקסימום כדי לסייע בהתאם לזמינות הרכבים באותה שעה. יחד עם זאת, הזמנה מראש תמיד עדיפה ומבטיחה שקט נפשי, במיוחד בימי עומס.",
  },
  {
    question: "כמה זמן לפני הטיסה כדאי לצאת מהבית?",
    answer:
      "זמן הנסיעה מחיפה והצפון לשדה התעופה בן גוריון נע בדרך כלל בין שעה לשעה וחצי, בהתאם לנקודת המוצא ולעומסי הדרכים. מומלץ לקחת בחשבון גם את זמן ההמתנה בשדה התעופה (כשעתיים־שלוש לפני טיסות בינלאומיות) ולתאם את שעת האיסוף בהתאם, כדי להגיע בנחת וללא לחץ.",
  },
  {
    question: `כמה נוסעים אפשר להזמין ברכב אחד?`,
    answer: `גודל הרכב מותאם למספר הנוסעים בבקשה שלכם, ${capacityWithRequestNote} בנסיעה אחת, כולל מקום נוח למזוודות ולציוד טיסה, כך שמשפחות וקבוצות יכולות לנסוע יחד ברכב אחד.`,
  },
  {
    question: "האם שעת האיסוף מותאמת לשעת הטיסה בפועל?",
    answer:
      "כן. בעת ההזמנה נתאם יחד את שעת הטיסה והיעד, ונקבע את שעת האיסוף כך שתגיעו לשדה התעופה בזמן הנוח ביותר, מבלי להימצא בלחץ מיותר.",
  },
  {
    question: "אילו אזורים אתם מכסים?",
    answer: `אנחנו מספקים שירות איסוף והסעה בחיפה, ${siteConfig.areasServed
      .filter((a) => a !== "חיפה" && a !== "כל אזור הצפון")
      .join(", ")} וביתר אזורי הצפון.`,
  },
  {
    question: "איך מזמינים מונית לשדה התעופה?",
    answer:
      "אפשר להזמין בקלות בשיחת טלפון או בהודעת ווטסאפ ישירות מהאתר. נשמח לתאם עבורכם את כל פרטי הנסיעה — כתובת איסוף, שעת טיסה ומספר נוסעים.",
  },
];

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
            שאלות נפוצות על הזמנת מונית לשדה התעופה
          </h2>
        </div>

        <div className="mt-8 flex flex-col gap-3">
          {faqItems.map((item) => (
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
