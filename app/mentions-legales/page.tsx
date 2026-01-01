import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions Légales | Allons Voir Si La Rose",
  description: "Mentions légales et politique de confidentialité du site Allons Voir Si La Rose, fleuriste à Avranches.",
};

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-stone-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-serif font-bold text-accent mb-8">Mentions Légales</h1>
        
        <div className="bg-white p-8 rounded-xl shadow-sm space-y-8 text-gray-700">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">1. Édition du site</h2>
            <p>
              En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site internet <strong>Allons Voir Si La Rose</strong> l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi :
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Propriétaire du site :</strong> Allons Voir Si La Rose (Entrepreneur individuel / Société)</li>
              <li><strong>Adresse :</strong> 31 Rue Saint-Saturnin, 50300 Avranches, France</li>
              <li><strong>Contact :</strong> contact@allonsvoirsilarose.fr | 02 33 58 00 00</li>
              <li><strong>SIRET :</strong> [Numéro SIRET à insérer]</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">2. Hébergement</h2>
            <p>
              Le site est hébergé par Vercel Inc., 340 S Lemon Ave #4133 Walnut, CA 91789, USA.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">3. Propriété intellectuelle</h2>
            <p>
              L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">4. Données personnelles</h2>
            <p>
              Conformément à la loi « Informatique et Libertés » et au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression des données vous concernant. Pour l'exercer, adressez-vous à nous via le formulaire de contact. Aucune donnée n'est vendue à des tiers.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

