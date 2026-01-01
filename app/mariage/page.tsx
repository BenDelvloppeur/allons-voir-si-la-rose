import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Fleuriste Mariage Avranches | Bouquet de Mariée & Décoration",
  description: "Sublimez votre mariage à Avranches avec nos créations florales sur mesure. Bouquet de mariée, centre de table, église, voiture.",
};

export default function MariagePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Mariage */}
      <div className="relative h-[60vh] flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image
          src="/images/mariage/baniere mariage.jpg"
          alt="Mariage fleuri"
          fill
          className="object-cover"
        />
        <div className="relative z-20 max-w-3xl px-4">
          <h1 className="text-5xl md:text-7xl font-serif font-bold drop-shadow-xl mb-6 text-white">Oui, pour la vie</h1>
          <p className="text-xl md:text-2xl drop-shadow-lg font-light text-gray-100">
            Accompagner le plus beau jour de votre vie avec élégance et poésie.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-accent mb-6">Des créations sur mesure pour votre mariage</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Du bouquet de la mariée à la décoration de la salle de réception, en passant par l'église et la voiture, nous imaginons avec vous une scénographie florale qui vous ressemble.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="space-y-4">
             <div className="relative h-80 rounded-lg overflow-hidden">
                <Image src="/images/mariage/bouquet mariee.jpg" alt="Bouquet mariée" fill className="object-cover" />
             </div>
             <h3 className="text-xl font-bold font-serif text-accent">Le Bouquet de la Mariée</h3>
             <p className="text-gray-600 text-sm">Rond, flou, cascade ou champêtre, il est l'accessoire indispensable qui sublimera votre tenue.</p>
          </div>
          <div className="space-y-4">
             <div className="relative h-80 rounded-lg overflow-hidden">
                <Image src="/images/mariage/lieux reception.jpg" alt="Décoration de table" fill className="object-cover" />
             </div>
             <h3 className="text-xl font-bold font-serif text-accent">Lieux & Réception</h3>
             <p className="text-gray-600 text-sm">Centres de table, arches fleuries, décoration de buffet pour une ambiance inoubliable.</p>
          </div>
          <div className="space-y-4">
             <div className="relative h-80 rounded-lg overflow-hidden">
                <Image src="/images/mariage/cortege.jpg" alt="Accessoires mariés" fill className="object-cover" />
             </div>
             <h3 className="text-xl font-bold font-serif text-accent">Le Cortège</h3>
             <p className="text-gray-600 text-sm">Boutonnières pour ces messieurs, bracelets ou couronnes pour les demoiselles d'honneur.</p>
          </div>
        </div>

        <div className="bg-stone-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-serif font-bold text-accent mb-6">Comment ça se passe ?</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <Check className="text-secondary h-6 w-6 flex-shrink-0" />
                  <span className="text-gray-700">Premier rendez-vous découverte à la boutique</span>
                </li>
                <li className="flex gap-3">
                  <Check className="text-secondary h-6 w-6 flex-shrink-0" />
                  <span className="text-gray-700">Proposition d'un moodboard et devis personnalisé</span>
                </li>
                <li className="flex gap-3">
                  <Check className="text-secondary h-6 w-6 flex-shrink-0" />
                  <span className="text-gray-700">Sélection des plus belles fleurs de saison</span>
                </li>
                <li className="flex gap-3">
                  <Check className="text-secondary h-6 w-6 flex-shrink-0" />
                  <span className="text-gray-700">Livraison et installation le jour J</span>
                </li>
              </ul>
              <div className="mt-8">
                <Button size="lg" asChild>
                  <Link href="/contact">Prendre rendez-vous</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-64 md:h-full min-h-[300px] rounded-lg overflow-hidden">
               <Image src="/images/mariage/daniel-diesenreither-VqLB9qE9C4o-unsplash.jpg" alt="Préparation mariage" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

