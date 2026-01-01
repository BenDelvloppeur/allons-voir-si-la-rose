import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "À Propos | Allons Voir Si La Rose - Fleuriste Avranches",
  description: "Découvrez l'histoire de votre artisan fleuriste à Avranches. Une équipe passionnée, des fleurs fraîches et un savoir-faire unique depuis des années.",
};

export default function AboutPage() {
  return (
    <div className="bg-background min-h-screen pb-20">
      {/* Header */}
      <div className="bg-primary/30 py-16 text-center">
        <h1 className="text-4xl font-serif font-bold text-accent">Notre Histoire</h1>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto px-4">
          Plus qu'un métier, une véritable passion pour le végétal et l'émotion.
        </p>
      </div>

      <div className="container mx-auto px-4 mt-12 space-y-20">
        {/* Section 1 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/accueil/Au coeur d'avranches.jpg"
              alt="Atelier fleuriste Avranches"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-accent">Au cœur d'Avranches</h2>
            <p className="text-gray-600 leading-relaxed">
              Installés au <strong>31 Rue Saint-Saturnin</strong>, nous avons fait de notre boutique un lieu de vie et de créativité. 
              Chez <em>Allons Voir Si La Rose</em>, nous croyons que chaque fleur raconte une histoire. C'est pourquoi nous sélectionnons nos végétaux avec la plus grande rigueur, privilégiant la fraîcheur et la saisonnalité.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Notre équipe d'artisans fleuristes met tout son savoir-faire à votre service pour composer des bouquets qui vous ressemblent, du petit plaisir quotidien aux grandes cérémonies de la vie.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
          <div className="space-y-6 order-2 md:order-1">
            <h2 className="text-3xl font-serif font-bold text-accent">Notre Philosophie</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="h-2 w-2 mt-2 rounded-full bg-secondary block" />
                <p className="text-gray-600"><strong>Écoute & Conseil :</strong> Nous prenons le temps de comprendre vos envies pour créer la composition parfaite.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="h-2 w-2 mt-2 rounded-full bg-secondary block" />
                <p className="text-gray-600"><strong>Qualité Artisanale :</strong> Pas de travail à la chaîne, chaque bouquet est assemblé main dans notre atelier.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="h-2 w-2 mt-2 rounded-full bg-secondary block" />
                <p className="text-gray-600"><strong>Proximité :</strong> Un commerce de quartier, ancré dans la vie locale d'Avranches.</p>
              </li>
            </ul>
          </div>
           <div className="relative h-96 rounded-lg overflow-hidden shadow-lg order-1 md:order-2">
            <Image
              src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=1000"
              alt="Fleurs fraîches et détails"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

