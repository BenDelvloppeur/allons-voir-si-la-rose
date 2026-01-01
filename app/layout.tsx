import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Allons Voir Si La Rose | Fleuriste Artisan à Avranches (50300)",
  description: "Artisan fleuriste à Avranches. Bouquets sur mesure, compositions mariage & deuil, plantes. Livraison de fleurs à Avranches et alentours. Commandez en ligne.",
  keywords: ["fleuriste avranches", "fleurs avranches", "livraison fleurs manche", "mariage avranches", "fleuriste 50300"],
  openGraph: {
    title: "Allons Voir Si La Rose - Fleuriste Avranches",
    description: "Créations florales uniques et fleurs fraîches à Avranches. Livraison et retrait en boutique.",
    url: "https://www.allonsvoirsilarose-avranches.fr", // URL fictive mais réaliste pour le SEO
    siteName: "Allons Voir Si La Rose",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${playfair.variable} ${inter.variable} min-h-screen flex flex-col`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Florist",
              "name": "Allons Voir Si La Rose",
              "image": "https://images.unsplash.com/photo-1562690868-60bbe7293e94", // Image principale
              "description": "Artisan fleuriste à Avranches. Bouquets sur mesure, mariages, deuil.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "31 Rue Saint-Saturnin",
                "addressLocality": "Avranches",
                "postalCode": "50300",
                "addressCountry": "FR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 48.686, 
                "longitude": -1.365
              },
              "url": "https://www.allonsvoirsilarose-avranches.fr",
              "telephone": "+33233580000",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  "opens": "08:45",
                  "closes": "19:30"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Sunday",
                  "opens": "08:45",
                  "closes": "19:00"
                }
              ],
              "priceRange": "$$"
            }),
          }}
        />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

