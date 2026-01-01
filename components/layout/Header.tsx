"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ShoppingBag, Phone, Flower2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Accueil", href: "/" },
  { name: "Nos Créations", href: "/creations" },
  { name: "Mariage", href: "/mariage" },
  { name: "Deuil", href: "/deuil" },
  { name: "À Propos", href: "/apropos" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-stone-100 shadow-sm transition-all duration-300">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2 group">
            <div className="relative flex items-center justify-center h-10 w-10 bg-primary/20 rounded-full group-hover:bg-primary/30 transition-colors">
               <Flower2 className="h-6 w-6 text-accent group-hover:rotate-12 transition-transform duration-500" />
            </div>
            <span className="font-serif text-xl md:text-2xl font-bold tracking-tight text-accent group-hover:text-stone-800 transition-colors">
              Allons Voir Si La Rose
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Ouvrir le menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-secondary transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-4">
           <Button variant="ghost" asChild>
            <a href="tel:+33233580000" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>Appeler</span>
            </a>
          </Button>
          <Button asChild>
            <Link href="/commande" className="flex items-center gap-2">
              <ShoppingBag className="h-4 w-4" />
              <span>Commander</span>
            </Link>
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b shadow-lg p-4 flex flex-col gap-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="mt-4 flex flex-col gap-2">
            <Button className="w-full" asChild onClick={() => setMobileMenuOpen(false)}>
              <Link href="/commande">Commander un bouquet</Link>
            </Button>
             <Button variant="outline" className="w-full" asChild>
              <a href="tel:+33233580000">Nous appeler</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

