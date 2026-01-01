import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Truck, Heart, MapPin } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* HERO SECTION */}
      <section className="relative h-[80vh] flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0 z-0">
           <Image 
            src="/images/accueil/Bannière accueil.jpg"
            alt="Fleuriste Avranches - Allons Voir Si La Rose"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-20 px-4 max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight text-white drop-shadow-md">
            Allons Voir Si La Rose
          </h1>
          <p className="text-lg md:text-xl font-light text-gray-100 max-w-2xl mx-auto drop-shadow">
            Votre artisan fleuriste à Avranches. Des créations florales uniques, de la fraîcheur et de la poésie pour chaque instant de votre vie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="text-lg px-8 bg-secondary hover:bg-secondary/90 text-white border-none" asChild>
              <Link href="/commande">Commander un bouquet</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 hover:bg-white/20 text-white border-white backdrop-blur-sm" asChild>
              <Link href="/contact">Nous rendre visite</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* POURQUOI NOUS CHOISIR */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-xl shadow-sm border border-stone-100">
              <div className="h-12 w-12 rounded-full bg-primary/30 flex items-center justify-center text-accent">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-gray-900">Artisan Passionné</h3>
              <p className="text-gray-600">
                Chaque bouquet est une œuvre unique, composée avec amour et savoir-faire artisanal dans notre atelier d'Avranches.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-xl shadow-sm border border-stone-100">
              <div className="h-12 w-12 rounded-full bg-primary/30 flex items-center justify-center text-accent">
                <Star className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-gray-900">Fraîcheur Garantie</h3>
              <p className="text-gray-600">
                Des arrivages quotidiens pour vous garantir des fleurs éclatantes qui durent longtemps. La qualité avant tout.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-xl shadow-sm border border-stone-100">
              <div className="h-12 w-12 rounded-full bg-primary/30 flex items-center justify-center text-accent">
                <Truck className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-gray-900">Livraison Locale</h3>
              <p className="text-gray-600">
                Nous livrons vos émotions à Avranches et ses alentours (50300). Service rapide et soigné.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NOS UNIVERS */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-accent mb-4">Nos Univers Floraux</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez nos collections pour célébrer, remercier, ou simplement faire plaisir.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Bouquets de Saison", img: "/images/creations/bouquet-saison-rond.jpg", href: "/creations", desc: "La fraîcheur du moment" },
              { title: "Mariages", img: "/images/mariage/ahmed-DGivPYwcRls-unsplash.jpg", href: "/mariage", desc: "Pour le plus beau jour" },
              { title: "Deuil & Hommage", img: "/images/deuil/hanna-morjane-LPmfi1ITENM-unsplash.jpg", href: "/deuil", desc: "Accompagner avec douceur" },
              { title: "Plantes Vertes", img: "/images/creations/md-nazmul-haque-nayeem-BWK7wCWwVJk-unsplash.jpg", href: "/creations", desc: "Nature durable" },
            ].map((item, idx) => (
              <Link key={idx} href={item.href} className="group relative h-80 overflow-hidden rounded-lg shadow-md block">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-xl font-serif font-bold mb-1 text-white drop-shadow-md">{item.title}</h3>
                  <p className="text-sm text-gray-200 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 drop-shadow-sm">
                    {item.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-white" asChild>
              <Link href="/creations">Voir toutes nos créations</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* MAP & HORAIRES - Redesign avec carte flottante */}
      <section className="relative h-[600px] w-full">
        {/* Carte en arrière-plan pleine largeur */}
        <div className="absolute inset-0 z-0">
           <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2633.649987654321!2d-1.365!3d48.686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480ec0123456789%3A0x123456789abcdef!2s31%20Rue%20Saint-Saturnin%2C%2050300%20Avranches!5e0!3m2!1sfr!2sfr!4v1620000000000!5m2!1sfr!2sfr" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: "grayscale(20%)" }} 
            allowFullScreen 
            loading="lazy" 
            title="Carte localisation Fleuriste Avranches"
          />
        </div>
        
        {/* Carte d'information flottante */}
        <div className="relative z-10 container mx-auto h-full flex items-center px-4 pointer-events-none">
          <div className="bg-white/95 backdrop-blur-sm p-8 md:p-10 rounded-2xl shadow-2xl max-w-md w-full border border-stone-100 pointer-events-auto">
             <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary/20 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900">Nous rendre visite</h2>
             </div>
             
             <div className="space-y-6">
                <div className="space-y-1">
                  <p className="font-semibold text-gray-900 text-lg">31 Rue Saint-Saturnin</p>
                  <p className="text-gray-600">50300 Avranches, France</p>
                </div>

                <div className="space-y-3 border-t border-gray-100 pt-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-medium text-gray-900">Lundi - Samedi</span>
                    <span className="bg-stone-100 px-3 py-1 rounded-full text-stone-700">08:45 – 19:30</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-medium text-gray-900">Dimanche</span>
                    <span className="bg-stone-100 px-3 py-1 rounded-full text-stone-700">08:45 – 19:00</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Button className="w-full text-lg h-12 shadow-lg hover:shadow-xl transition-all" asChild>
                    <a href="https://www.google.com/maps/dir//Allons+Voir+Si+La+Rose+Avranches" target="_blank" rel="noreferrer">
                      Calculer mon itinéraire
                    </a>
                  </Button>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}

