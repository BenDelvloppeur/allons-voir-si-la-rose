import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Merci ! | Allons Voir Si La Rose",
  description: "Votre demande a bien été reçue.",
};

export default function MerciPage() {
  return (
    <div className="min-h-screen bg-stone-50 flex items-center justify-center p-4">
      <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg max-w-lg w-full text-center space-y-6">
        <div className="flex justify-center">
          <div className="bg-green-100 p-4 rounded-full">
            <CheckCircle2 className="h-12 w-12 text-green-600" />
          </div>
        </div>
        
        <h1 className="text-3xl font-serif font-bold text-accent">Merci !</h1>
        
        <p className="text-gray-600 text-lg">
          Votre demande a bien été reçue. Nous vous répondrons dans les plus brefs délais.
        </p>
        
        <div className="pt-6 space-y-3">
          <Button size="lg" className="w-full" asChild>
            <Link href="/">Retour à l'accueil</Link>
          </Button>
          <Button variant="outline" className="w-full" asChild>
            <Link href="/creations">Voir nos créations</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
