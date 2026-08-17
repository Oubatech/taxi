import { siteConfig, telHref, whatsappHref } from "@/lib/site-config";
import { PhoneIcon, WhatsAppIcon } from "./icons";

const navLinks = [
  { href: "#services", label: "שירותים" },
  { href: "#areas", label: "אזורי שירות" },
  { href: "#faq", label: "שאלות נפוצות" },
  { href: "#contact", label: "יצירת קשר" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <a href="#top" className="flex items-center gap-2 text-lg font-extrabold text-brand-black">
          <span className="flex size-9 items-center justify-center rounded-full bg-brand-yellow text-brand-black">
            🚕
          </span>
          {siteConfig.businessName}
        </a>

        <nav className="hidden items-center gap-6 text-sm font-medium text-neutral-700 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-brand-black">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex size-10 items-center justify-center rounded-full bg-[#25D366] text-white shadow transition hover:opacity-90"
            aria-label="הזמנה בווטסאפ"
          >
            <WhatsAppIcon />
          </a>
          <a
            href={telHref}
            className="hidden items-center gap-2 rounded-full bg-brand-black px-4 py-2.5 text-sm font-bold text-white shadow transition hover:opacity-90 sm:flex"
            aria-label={`התקשרו עכשיו למספר ${siteConfig.phoneDisplay}`}
          >
            <PhoneIcon className="size-4" />
            {siteConfig.phoneDisplay}
          </a>
        </div>
      </div>
    </header>
  );
}
