import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import { siteConfig, capacityWithRequestNote } from "@/lib/site-config";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["hebrew", "latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const title = `${siteConfig.businessName} | מונית מיידית בחיפה ובצפון`;
const description = `הזמנת מונית מיידית לכל יעד בחיפה, עכו, נהריה, הקריות וכל אזור הצפון. ניתן גם להזמין מראש נסיעה ל${siteConfig.bengurionAirport} ול${siteConfig.haifaAirport}. רכב נוח ${capacityWithRequestNote}, זמינות 24/7. הזמינו עכשיו בטלפון או בווטסאפ.`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: title,
    template: `%s | ${siteConfig.businessName}`,
  },
  description,
  keywords: [
    "מונית מיידית בחיפה",
    "מונית עכשיו בצפון",
    "מוניות חיפה",
    "מונית לשדה התעופה מחיפה",
    "מונית לנתבג מהצפון",
    "מונית לשדה התעופה חיפה",
    "מונית חוף הכרמל",
    "הזמנת מונית לנתבג",
    `מונית ${siteConfig.maxPassengers} נוסעים`,
    "מוניות צפון",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: siteConfig.siteUrl,
    siteName: siteConfig.businessName,
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "TaxiService",
  name: siteConfig.businessName,
  image: `${siteConfig.siteUrl}/opengraph-image`,
  telephone: siteConfig.phoneTel,
  url: siteConfig.siteUrl,
  priceRange: "$$",
  areaServed: siteConfig.areasServed.map((city) => ({
    "@type": "City",
    name: city,
  })),
  address: {
    "@type": "PostalAddress",
    addressRegion: "חיפה והצפון",
    addressCountry: "IL",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${rubik.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
