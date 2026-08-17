import { capacityWithRequestNote } from "@/lib/site-config";
import { CheckIcon } from "./icons";

const points = [
  {
    title: "אמינות ודייקנות",
    description: "הגעה בזמן לאיסוף, כך שתגיעו לטיסה בלי לחץ ובלי עיכובים.",
  },
  {
    title: "התחשבות בשעת הטיסה",
    description: "שעת האיסוף מתואמת מראש בהתאם לשעת הטיסה שלכם, יעד הטיסה ועומסי הדרכים.",
  },
  {
    title: "רכב נוח ומרווח",
    description: `מקום נוח ${capacityWithRequestNote}, עם מקום למזוודות ולציוד טיסה.`,
  },
  {
    title: "זמינות בכל שעה",
    description: "טיסות בוקר מוקדם, לילה מאוחר או חג — אנחנו זמינים 24/7.",
  },
];

export function WhyUs() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-extrabold text-brand-black sm:text-3xl">למה לבחור בנו</h2>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {points.map((point) => (
          <div key={point.title} className="flex gap-4 rounded-2xl bg-brand-gray p-5">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-brand-yellow text-brand-black">
              <CheckIcon className="size-4" />
            </span>
            <div>
              <h3 className="font-bold text-brand-black">{point.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-neutral-600">
                {point.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
