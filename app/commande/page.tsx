"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function OrderPage() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/merci");
  };

  return (
    <div className="min-h-screen bg-stone-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm p-8 md:p-12">
          <h1 className="text-3xl font-serif font-bold text-accent mb-6 text-center">Commander un Bouquet</h1>
          <p className="text-gray-600 text-center mb-8">
            Remplissez ce formulaire pour pré-commander vos fleurs. Nous vous rappellerons pour confirmer la commande et le paiement.
          </p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            
            {/* Coordonnées */}
            <div className="space-y-4">
              <h2 className="font-bold text-lg text-gray-800 border-b pb-2">1. Vos Coordonnées</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Nom complet</label>
                  <input type="text" id="name" className="w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none" required placeholder="Jean Dupont" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">Téléphone</label>
                  <input type="tel" id="phone" className="w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none" required placeholder="06 12 34 56 78" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <input type="email" id="email" className="w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none" required placeholder="jean@exemple.fr" />
              </div>
            </div>

            {/* La Commande */}
            <div className="space-y-4">
              <h2 className="font-bold text-lg text-gray-800 border-b pb-2">2. Votre Commande</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="type" className="text-sm font-medium">Type de composition</label>
                  <select id="type" className="w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none bg-white">
                    <option>Bouquet du fleuriste (Surprise)</option>
                    <option>Bouquet Rond</option>
                    <option>Composition Piquée</option>
                    <option>Plante</option>
                    <option>Deuil / Gerbe</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="budget" className="text-sm font-medium">Budget approximatif (€)</label>
                  <input type="number" id="budget" className="w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none" placeholder="ex: 40" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="colors" className="text-sm font-medium">Préférences (Couleurs, fleurs...)</label>
                <textarea id="colors" className="w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none min-h-[80px]" placeholder="J'aimerais des tons pastels, sans lys..." />
              </div>
            </div>

            {/* Livraison */}
            <div className="space-y-4">
              <h2 className="font-bold text-lg text-gray-800 border-b pb-2">3. Retrait ou Livraison</h2>
               <div className="space-y-2">
                  <label htmlFor="mode" className="text-sm font-medium">Mode de réception</label>
                  <select id="mode" className="w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none bg-white">
                    <option>Retrait en boutique (Gratuit)</option>
                    <option>Livraison Avranches (+5€)</option>
                    <option>Livraison Alentours (sur devis)</option>
                  </select>
                </div>
                 <div className="space-y-2">
                  <label htmlFor="date" className="text-sm font-medium">Date souhaitée</label>
                  <input type="date" id="date" className="w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none" required />
                </div>
                 <div className="space-y-2">
                  <label htmlFor="address" className="text-sm font-medium">Adresse de livraison (si applicable)</label>
                  <textarea id="address" className="w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none min-h-[60px]" placeholder="Adresse complète, code d'accès..." />
                </div>
                 <div className="space-y-2">
                  <label htmlFor="card-msg" className="text-sm font-medium">Message pour la carte (Offert)</label>
                  <textarea id="card-msg" className="w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none min-h-[60px]" placeholder="Joyeux anniversaire..." />
                </div>
            </div>

            <div className="pt-4">
              <Button type="submit" size="lg" className="w-full text-lg">Envoyer ma demande</Button>
              <p className="text-xs text-center text-gray-500 mt-2">Ceci est une demande de pré-commande. Aucun paiement n'est requis maintenant.</p>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

