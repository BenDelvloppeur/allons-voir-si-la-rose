import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Fleurs Deuil Avranches | Couronnes & Compositions - Allons Voir Si La Rose",
  description: "Fleuriste funéraire à Avranches. Couronnes, gerbes, dessus de cercueil. Livraison sur les lieux de cérémonie et cimetières (50300).",
};

export default function DeuilPage() {
  return (
    <div className="min-h-screen bg-stone-50 pb-20">
      <div className="bg-white py-12 border-b">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-serif font-bold text-accent">Deuil & Hommage</h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Exprimer vos sentiments et rendre un dernier hommage avec dignité et douceur.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 md:order-1 space-y-6">
            <h2 className="text-2xl font-serif font-bold text-gray-800">Nous vous accompagnons</h2>
            <p className="text-gray-600 leading-relaxed">
              Dans ces moments difficiles, nous sommes à votre écoute pour composer les pièces florales qui traduiront votre affection. Que ce soit pour une cérémonie religieuse, une crémation ou un dépôt au cimetière, nous assurons la livraison sur les lieux de recueillement à Avranches et ses environs.
            </p>
            <Button variant="outline" asChild>
              <Link href="/contact">Nous contacter directement</Link>
            </Button>
          </div>
           <div className="order-1 md:order-2 relative h-80 rounded-lg overflow-hidden shadow-sm">
            <Image
              src="/images/deuil/hanna-morjane-T0U648Wl0HM-unsplash.jpg"
              alt="Fleurs blanches deuil"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <h2 className="text-2xl font-serif font-bold text-center mb-8">Nos Compositions</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { title: "Gerbes & Bouquets", desc: "Pour exprimer sa sympathie simplement.", img: "/images/deuil/Gerbes & Bouquets.jpg" },
            { title: "Coussins & Cœurs", desc: "Des formes douces pour un dernier adieu.", img: "/images/deuil/coeur.jpg" },
            { title: "Dessus de Cercueil", desc: "La pièce maîtresse de la cérémonie.", img: "/images/deuil/the-good-funeral-guide-pawEgfvDUqg-unsplash.jpg" },
            { title: "Coupes de Plantes", desc: "Un hommage durable pour le souvenir.", img: "/images/creations/md-nazmul-haque-nayeem-BWK7wCWwVJk-unsplash.jpg" },
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-sm overflow-hidden">
               <div className="relative h-48">
                 <Image src={item.img} alt={item.title} fill className="object-cover" />
               </div>
               <div className="p-4">
                 <h3 className="font-bold text-lg text-accent mb-2">{item.title}</h3>
                 <p className="text-sm text-gray-600">{item.desc}</p>
               </div>
            </div>
          ))}
        </div>

         <div className="mt-16 bg-white border border-stone-200 p-8 rounded-xl text-center max-w-2xl mx-auto">
            <h3 className="font-bold text-xl mb-4">Livraison aux Pompes Funèbres et Églises</h3>
            <p className="text-gray-600 mb-6">
              Nous livrons directement aux chambres funéraires, à l'église Saint-Gervais, Notre-Dame des Champs, ou au cimetière d'Avranches.
            </p>
            <Button className="w-full md:w-auto" asChild>
              <a href="tel:+33233580000">Appeler pour commander</a>
            </Button>
         </div>

      </div>
    </div>
  );
}

