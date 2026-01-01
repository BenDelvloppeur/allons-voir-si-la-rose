# Allons Voir Si La Rose - Site Web Fleuriste

Ce projet est le site vitrine moderne et optimisé pour le référencement local (SEO) de l'artisan fleuriste **Allons Voir Si La Rose** à Avranches.

## 🛠 Stack Technique

- **Framework :** [Next.js 14+](https://nextjs.org/) (App Router)
- **Langage :** TypeScript
- **Styles :** Tailwind CSS
- **Icônes :** Lucide React
- **Polices :** Playfair Display (Titres) & Inter (Texte)

## 🚀 Installation & Démarrage

1.  **Prérequis :** Avoir Node.js installé (v18+ recommandé).
2.  **Installation des dépendances :**

```bash
npm install
```

3.  **Lancer le serveur de développement :**

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur pour voir le résultat.

## 📁 Structure du Projet

- `app/` : Contient toutes les pages (Router).
  - `page.tsx` : Page d'accueil.
  - `layout.tsx` : Structure globale (Header, Footer, Fontes, Metadatas).
  - `creations/`, `mariage/`, `deuil/`... : Pages de contenu.
- `components/` : Composants réutilisables.
  - `ui/` : Boutons, Inputs, etc.
  - `layout/` : Header et Footer.
- `lib/` : Utilitaires (configuration Tailwind merge).
- `public/` : Images statiques (favicon, logos).

## 🎨 Personnalisation

### Couleurs
Les couleurs sont définies dans `app/globals.css` (variables CSS) et étendues dans `tailwind.config.ts`.
- **Primary** (Rose pâle) : `--primary`
- **Secondary** (Vert sauge) : `--secondary`
- **Accent** (Taupe) : `--accent`

### Images
Actuellement, le site utilise des images libres de droits (Unsplash) comme placeholders. Pour passer en production, remplacez-les par vos propres photos de réalisations.

## 📦 Déploiement

Le site est prêt à être déployé sur **Vercel** (recommandé pour Next.js) ou tout autre hébergeur Node.js.

1.  Créez un compte sur [Vercel](https://vercel.com).
2.  Importez votre dépôt Git.
3.  Vercel détectera automatiquement Next.js et déploiera le site.

---
*Projet généré par Assistant IA - 2026*

