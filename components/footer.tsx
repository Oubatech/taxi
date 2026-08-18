"use client";

import { siteConfig, telHref } from "@/lib/site-config";
import { trackContactClick } from "@/lib/analytics";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/5 bg-white pb-24 pt-10 md:pb-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 text-sm text-neutral-600 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-bold text-brand-black">{siteConfig.businessName}</p>
          <p className="mt-1">מונית מיידית וגם הזמנה מראש לשדה התעופה — חיפה והצפון</p>
        </div>
        <div className="flex flex-col gap-1 sm:items-end">
          <a
            href={telHref}
            onClick={() => trackContactClick("call")}
            className="font-medium text-brand-black hover:underline"
          >
            {siteConfig.phoneDisplay}
          </a>
          <p>&copy; {year} {siteConfig.businessName}. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  );
}
