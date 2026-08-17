import { CallButton, WhatsAppButton } from "./cta-buttons";

export function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-black/10 bg-white/95 p-3 backdrop-blur md:hidden">
      <WhatsAppButton className="flex-1 !px-3 !py-3 text-sm" />
      <CallButton className="flex-1 !px-3 !py-3 text-sm" />
    </div>
  );
}
