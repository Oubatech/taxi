"use client";

import { telHref, whatsappHref, siteConfig } from "@/lib/site-config";
import { trackContactClick } from "@/lib/analytics";
import { PhoneIcon, WhatsAppIcon } from "./icons";

export function CallButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={telHref}
      onClick={() => trackContactClick("call")}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-brand-black px-6 py-3.5 text-base font-bold text-white shadow-lg transition hover:opacity-90 ${className}`}
      aria-label={`התקשרו עכשיו למספר ${siteConfig.phoneDisplay}`}
    >
      <PhoneIcon className="size-5" />
      <span>התקשרו עכשיו</span>
    </a>
  );
}

export function WhatsAppButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackContactClick("whatsapp")}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-base font-bold text-white shadow-lg transition hover:opacity-90 ${className}`}
      aria-label="שלחו הודעת ווטסאפ להזמנת מונית"
    >
      <WhatsAppIcon className="size-5" />
      <span>הזמנה בווטסאפ</span>
    </a>
  );
}
