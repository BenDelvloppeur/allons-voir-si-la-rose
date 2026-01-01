"use client";

import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ContactPage() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/merci");
  };

  return (
    <div className="min-h-screen bg-stone-50 py-12">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-accent">Contactez-nous</h1>
          <p className="mt-4 text-gray-600">Une question ? Un projet ? Nous sommes à votre écoute.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* Info Card */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm space-y-6">
              <h2 className="font-serif font-bold text-xl text-accent">Nos Coordonnées</h2>
              
              <div className="flex gap-4 items-start">
                <MapPin className="text-secondary w-6 h-6 shrink-0" />
                <div>
                  <h3 className="font-bold text-sm">Adresse</h3>
                  <p className="text-gray-600 text-sm">31 Rue Saint-Saturnin<br/>50300 Avranches</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Phone className="text-secondary w-6 h-6 shrink-0" />
                <div>
                  <h3 className="font-bold text-sm">Téléphone</h3>
                  <a href="tel:+33233580000" className="text-gray-600 text-sm hover:text-secondary">02 33 58 00 00</a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Mail className="text-secondary w-6 h-6 shrink-0" />
                <div>
                  <h3 className="font-bold text-sm">Email</h3>
                  <a href="mailto:contact@allonsvoirsilarose.fr" className="text-gray-600 text-sm hover:text-secondary">contact@allonsvoirsilarose.fr</a>
                </div>
              </div>

               <div className="flex gap-4 items-start">
                <Clock className="text-secondary w-6 h-6 shrink-0" />
                <div>
                  <h3 className="font-bold text-sm">Horaires</h3>
                  <div className="text-gray-600 text-sm space-y-1">
                    <p>Lun - Sam : 08:45 – 19:30</p>
                    <p>Dimanche : 08:45 – 19:00</p>
                  </div>
                </div>
              </div>
            </div>
             <div className="bg-primary/20 p-6 rounded-xl shadow-sm text-center">
                <p className="font-serif italic text-accent">"Dites-le avec des fleurs, nous nous occupons du reste."</p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 bg-white p-8 rounded-xl shadow-sm">
            <h2 className="font-serif font-bold text-xl text-accent mb-6">Envoyez-nous un message</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Nom complet</label>
                  <input type="text" id="name" className="w-full rounded-md border border-gray-300 p-3 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none" placeholder="Votre nom" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <input type="email" id="email" className="w-full rounded-md border border-gray-300 p-3 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none" placeholder="votre@email.com" required />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">Sujet</label>
                <input type="text" id="subject" className="w-full rounded-md border border-gray-300 p-3 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none" placeholder="Mariage, Devis, Question..." required />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Votre message</label>
                <textarea id="message" className="w-full rounded-md border border-gray-300 p-3 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none min-h-[150px]" placeholder="Comment pouvons-nous vous aider ?" required />
              </div>
              <Button type="submit" size="lg">Envoyer le message</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
