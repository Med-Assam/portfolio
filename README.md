# Portfolio Astro + Vercel

Portfolio moderne construit avec Astro, structure modulaire et contenu centralise dans un seul fichier TypeScript.

**URL cible personnalisee:** `https://portfolio-mohamed-assam.vercel.app`

---

## ✨ Fonctionnalites

- 🌓 **Theme clair/sombre** : Basculement avec persistance localStorage
- 🤖 **Assistant IA** : Chatbot interactif pour naviguer le portfolio
- 📄 **Export CV** : Generation PDF et Word compatible ATS
- 📊 **Vercel Analytics** : Suivi des visiteurs et pages vues
- 📱 **Responsive** : Design adapte mobile/tablette/desktop
- 🎨 **Glassmorphism** : Effets visuels modernes
- ⚡ **Sections conditionnelles** : Masquage automatique des sections vides
- 🔗 **Navigation dynamique** : Liens generes selon les sections actives

---

## 🚀 Installation Rapide (Windows)

### Methode 1 : Script automatique (recommande)

1. Ouvrez le dossier `C:\Users\PC\portfolio`
2. Double-cliquez sur `install-nodejs.bat`
3. Attendez la fin de l'installation (telechargement ~35 MB)
4. **Fermez et rouvrez un nouveau terminal**
5. Double-cliquez sur `setup.bat` pour finaliser

### Methode 2 : Installation manuelle

#### Étape 1 : Installer Node.js

**Option A - Installateur officiel (plus simple):**
1. Allez sur https://nodejs.org/
2. Telechargez la version LTS (Long Term Support)
3. Lancez l'installateur et suivez les etapes
4. Redemarrez votre terminal

**Option B - Portable (sans admin):**
1. Telechargez: https://nodejs.org/dist/v20.11.1/node-v20.11.1-win-x64.zip
2. Extrayez dans `C:\Users\PC\nodejs`
3. Ajoutez au PATH:
   ```cmd
   setx PATH "C:\Users\PC\nodejs;%PATH%"
   ```
4. Redemarrez le terminal

#### Étape 2 : Installer les dependances du projet

```bash
cd C:\Users\PC\portfolio
npm install
```

#### Étape 3 : Tester localement

```bash
npm run dev
```

Ouvrez http://localhost:4321 dans votre navigateur

---

## 📁 Structure du projet

```
portfolio/
├── src/
│   ├── data/
│   │   └── profile.ts          ← SOURCE UNIQUE DE DONNEES
│   ├── layouts/
│   │   └── BaseLayout.astro    ← Layout global + styles
│   ├── components/
│   │   ├── Header.astro        ← Navigation sticky + menu mobile
│   │   ├── Hero.astro          ← Section hero avec stats
│   │   ├── About.astro         ← Cartes presentation
│   │   ├── Skills.astro        ← Competences techniques + soft
│   │   ├── Education.astro     ← Timeline academique
│   │   ├── Experience.astro    ← Experiences professionnelles
│   │   ├── Publications.astro  ← Publications academiques
│   │   ├── Certifications.astro ← Certifications et formations
│   │   ├── Projects.astro      ← Projets personnels/academiques
│   │   ├── Contact.astro       ← Formulaire de contact
│   │   ├── Footer.astro        ← Pied de page
│   │   ├── BackToTop.astro     ← Bouton retour haut
│   │   ├── AiAssistant.astro   ← Chatbot IA interactif
│   │   └── ResumeExport.astro  ← Export CV PDF/Word
│   └── pages/
│       └── index.astro         ← Page principale (sections conditionnelles)
├── public/                     ← Ressources statiques
├── astro.config.mjs           ← Configuration Astro + Vercel
├── vercel.json                ← Configuration alias Vercel
├── package.json               ← Dependances npm
├── install-nodejs.bat         ← Script installation Node.js
└── setup.bat                  ← Script configuration complete
```

---

## 🎨 Personnalisation du contenu

**TOUT se configure dans 1 seul fichier:** `src/data/profile.ts`

### Sections automatiquement conditionnelles

Le portfolio **masque automatiquement** les sections vides:

- ✅ **Toujours affichees:** Hero, Header, Footer
- 🔄 **Conditionnelles:** About, Skills, Education, Experience, Publications, Certifications, Projects, Contact

**Exemple:** Si `education: []` est vide, la section Education et son lien dans la navigation n'apparaissent pas.

### Comment ajouter du contenu

#### 1. Informations personnelles

```typescript
export const profile: ProfileData = {
  firstName: "Mohamed",
  lastName: "ASSAM",
  fullName: "Mohamed ASSAM",
  title: "Etudiant en Informatique",      // ← Modifier ici
  subtitle: "Votre sous-titre...",         // ← Modifier ici
  availabilityBadge: "Disponible pour un stage", // ← Modifier ici
  avatar: "https://...",                   // ← URL ou chemin local
  // ...
}
```

#### 2. Ajouter des competences techniques

```typescript
technicalSkills: [
  {
    category: "Frontend",
    icon: "code-2",
    items: ["React", "Vue.js", "TypeScript"]
  },
  // Ajouter d'autres categories...
]
```

#### 3. Ajouter une education

```typescript
education: [
  {
    period: "2024 - Present",
    degree: "Licence Informatique",
    field: "Genie Logiciel",
    institution: "ESISA",
    institutionUrl: "https://esisa.ac.ma",
    description: "Formation en developpement logiciel...",
    latest: true
  }
]
```

#### 4. Ajouter une experience

```typescript
experience: [
  {
    period: "Juin 2025 - Sept 2025",
    role: "Stagiaire Developpeur",
    organization: "Entreprise XYZ",
    organizationUrl: "https://...",
    description: "Mission sur projet web...",
    current: false
  }
]
```

#### 5. Ajouter un projet

```typescript
projects: [
  {
    title: "Mon Application Web",
    url: "https://github.com/Med-Assam/mon-app",
    description: "Application full-stack avec React et Node.js",
    tags: ["React", "Node.js", "MongoDB"],
    kind: "personal" // ou "academic" ou "professional"
  }
]
```

#### 6. Modifier les liens sociaux

```typescript
socialLinks: [
  { label: "GitHub", href: "https://github.com/Med-Assam", icon: "github" },
  { label: "LinkedIn", href: "https://linkedin.com/in/...", icon: "link" },
  { label: "Email", href: "mailto:m.assam@esisa.ac.ma", icon: "mail" }
]
```

**Apres modification:** Rechargez simplement la page en dev (`npm run dev`)

---

## 📦 Commandes npm disponibles

```bash
npm install          # Installer les dependances
npm run dev          # Serveur de developpement (http://localhost:4321)
npm run build        # Build de production dans dist/
npm run preview      # Apercu du build de production
npm run deploy       # Deployer sur Vercel (necessite Vercel CLI)
```

---

## 🚢 Deploiement sur Vercel

### Methode 1 : Dashboard Vercel (plus simple)

1. Allez sur [vercel.com](https://vercel.com)
2. Connectez-vous avec GitHub
3. Cliquez sur **"New Project"**
4. Importez le repo `Med-Assam/portfolio`
5. Vercel detecte Astro automatiquement
6. Cliquez sur **"Deploy"**
7. Une fois deploye, allez dans **Settings > Domains**
8. Ajoutez le domaine: `portfolio-mohamed-assam.vercel.app`

### Methode 2 : Vercel CLI

#### Installation de Vercel CLI

```bash
npm install -g vercel
```

#### Authentification

```bash
vercel login
```

#### Deploiement

```bash
vercel --prod
```

#### Configuration de l'alias personnalise

Apres le premier deploiement, Vercel vous donne une URL temporaire comme `portfolio-abc123.vercel.app`.

Pour utiliser l'alias personnalise:

```bash
vercel alias set portfolio-abc123.vercel.app portfolio-mohamed-assam.vercel.app
```

Les prochains deploiements avec `vercel --prod` utiliseront automatiquement cet alias.

---

## 🔗 Pousser le code vers GitHub

### Installation de GitHub CLI (recommande)

Telechargez depuis: https://cli.github.com/

### Authentification GitHub

```bash
gh auth login
gh auth setup-git
```

### Push du code

```bash
cd C:\Users\PC\portfolio
git init
git add .
git commit -m "Initial commit - Portfolio Astro complet"
git branch -M main
git remote add origin https://github.com/Med-Assam/portfolio.git
git push -u origin main
```

---

## 🎯 Statut actuel du portfolio

### ✅ Composants implementes

- [x] Layout global avec background anime
- [x] Header sticky avec menu hamburger mobile
- [x] Hero avec stats et photo profile animee
- [x] Section About (cartes numerotees)
- [x] Section Skills (techniques + soft skills)
- [x] Section Education (timeline)
- [x] Section Experience
- [x] Section Publications (avec metriques)
- [x] Section Certifications
- [x] Section Projects (grille avec tags)
- [x] Section Contact (formulaire via FormSubmit)
- [x] Footer avec navigation dynamique
- [x] Bouton back-to-top flottant
- [x] Animations scroll-reveal
- [x] Navigation active automatique
- [x] Design responsive complet
- [x] Theme sombre avec glassmorphism
- [x] Icones Lucide SVG inline

### 📊 Donnees actuelles

Les donnees ont ete remplies avec les sources verifiables disponibles:

- **GitHub:** `https://github.com/Med-Assam`
- **Email:** `m.assam@esisa.ac.ma`
- **Avatar:** Photo GitHub publique
- **Statistiques:** Basees sur le profil GitHub
- **Projet actuel:** Ce portfolio lui-meme

### 📝 A completer (selon votre profil)

Editez `src/data/profile.ts` pour ajouter:

- [ ] Parcours academique complet (`education`)
- [ ] Experiences professionnelles/stages (`experience`)
- [ ] Certifications obtenues (`certifications`)
- [ ] Autres projets personnels/academiques (`projects`)
- [ ] Publications academiques si applicable (`publications`)
- [ ] URL LinkedIn (`socialLinks`)
- [ ] Competences techniques detaillees (`technicalSkills`)

---

## 🛠️ Technologies utilisees

- **Framework:** Astro 5.3
- **Langage:** TypeScript
- **Styles:** CSS custom properties
- **Icones:** Lucide (SVG inline)
- **Formulaire:** FormSubmit.co
- **Hebergement:** Vercel
- **Versioning:** Git + GitHub

---

## 📞 Support

Pour toute question ou probleme:

1. Verifiez que Node.js est installe: `node -v` et `npm -v`
2. Verifiez que les dependances sont installees: `npm install`
3. Consultez la documentation Astro: https://docs.astro.build
4. Consultez la documentation Vercel: https://vercel.com/docs

---

## 📄 Licence

Ce portfolio est un projet personnel. Vous pouvez le reutiliser comme template en modifiant le contenu dans `src/data/profile.ts`.
