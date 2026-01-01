import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-stone-900 pt-16 pb-8 text-stone-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-white mb-4">Allons Voir Si La Rose</h3>
            <p className="text-sm leading-6 mb-4 text-stone-400">
              Artisan fleuriste à Avranches. Nous composons avec passion des bouquets uniques pour tous les moments de la vie.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-white">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">Accueil</Link></li>
              <li><Link href="/creations" className="hover:text-white transition-colors">Nos Créations</Link></li>
              <li><Link href="/mariage" className="hover:text-white transition-colors">Mariage</Link></li>
              <li><Link href="/deuil" className="hover:text-white transition-colors">Deuil</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-white">Nous trouver</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2">
                <MapPin className="h-5 w-5 text-stone-500 flex-shrink-0" />
                <span>31 Rue Saint-Saturnin,<br/>50300 Avranches</span>
              </li>
              <li className="flex gap-2">
                <Phone className="h-5 w-5 text-stone-500 flex-shrink-0" />
                <a href="tel:+33233580000" className="hover:text-white transition-colors">02 33 58 00 00</a>
              </li>
              <li className="flex gap-2">
                <Mail className="h-5 w-5 text-stone-500 flex-shrink-0" />
                <a href="mailto:contact@allonsvoirsilarose.fr" className="hover:text-white transition-colors">contact@allonsvoirsilarose.fr</a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-bold mb-4 text-white">Horaires</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between border-b border-stone-800 pb-2">
                <span>Lun - Sam</span>
                <span className="font-medium text-white">08:45 – 19:30</span>
              </li>
              <li className="flex justify-between border-b border-stone-800 pb-2">
                <span>Dimanche</span>
                <span className="font-medium text-white">08:45 – 19:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 text-center text-xs text-stone-500">
          <p>&copy; {new Date().getFullYear()} Allons Voir Si La Rose. Tous droits réservés. <Link href="/mentions-legales" className="underline hover:text-stone-400">Mentions légales</Link></p>
        </div>
      </div>
    </footer>
  );
}

