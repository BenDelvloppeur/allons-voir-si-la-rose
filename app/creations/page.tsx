import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Nos Créations | Bouquets & Plantes - Allons Voir Si La Rose",
  description: "Découvrez nos collections de bouquets ronds, compositions florales, plantes vertes et fleuries. Commandez ou faites livrer à Avranches.",
};

const categories = [
  {
    title: "Bouquets Ronds",
    description: "L'élégance intemporelle pour toutes les occasions.",
    image: "/images/creations/bouquet-saison-rond.jpg",
    slug: "bouquets"
  },
  {
    title: "Compositions Hautes",
    description: "Des créations structurées pour un effet majestueux.",
    image: "/images/creations/composition haute.jpg",
    slug: "compositions"
  },
  {
    title: "Plantes Vertes & Fleuries",
    description: "Orchidées, succulentes et plantes d'intérieur durables.",
    image: "/images/creations/md-nazmul-haque-nayeem-BWK7wCWwVJk-unsplash.jpg",
    slug: "plantes"
  },
  {
    title: "Fleurs Séchées",
    description: "La tendance bohème et durable pour votre décoration.",
    image: "/images/creations/micheile-henderson-XPCdZXncj64-unsplash.jpg",
    slug: "sechees"
  }
];

export default function CreationsPage() {
  return (
    <div className="min-h-screen bg-stone-50 pb-20">
      <div className="bg-white py-12 border-b">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-serif font-bold text-accent">Nos Créations</h1>
          <p className="mt-4 text-gray-600">Laissez-vous inspirer par nos collections du moment.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12">
        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((cat, idx) => (
            <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif font-bold text-accent mb-2">{cat.title}</h3>
                <p className="text-gray-600 mb-6">{cat.description}</p>
                <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-white" asChild>
                  <Link href="/commande">Commander ce style</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-primary/20 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-serif font-bold text-accent mb-4">Une envie particulière ?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Nous réalisons des compositions sur mesure selon votre budget et vos couleurs préférées.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/contact">Nous contacter</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white" asChild>
              <a href="tel:+33233580000">02 33 58 00 00</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

