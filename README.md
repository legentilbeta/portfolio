# Portfolio de beta

Mon portfolio personnel : une carte de profil façon Discord, mes compétences et mes moyens de contact.

## Technologies

- HTML
- CSS
- JavaScript

Aucun framework, aucune dépendance.

## Structure du projet

```
portofilio/
├── index.html
└── asset/
    ├── css/
    │   ├── style.css
    │   └── script.js
    ├── font/
    │   └── bubbleboddy/
    └── image/
        ├── code/        logos des technologies
        ├── discord/     avatar, décoration, bannière
        │   └── badges/  badges Discord
        └── fond/        image de fond
```

## Lancer le site en local

1. Clone le dépôt :
   ```bash
   git clone https://github.com/legentilbeta/portfolio.git
   ```
2. Ouvre le dossier `portfolio`.
3. Double-clique sur `index.html`, ou lance-le avec l'extension **Live Server** de VS Code.

## Déploiement

Le site est hébergé sur [Vercel](https://portfolio-lemon-pi-jzbdfxeoy5.vercel.app/), relié à ce dépôt : chaque `git push` sur la branche `main` met le site à jour automatiquement.

## Personnaliser

- **Textes** (bio, pseudo, liens) : dans `index.html`
- **Couleurs, tailles, polices** : dans `asset/css/style.css`
- **Compétences** : ajoute ou retire des logos dans `asset/image/code/`, puis modifie les balises `<img>` correspondantes dans `index.html`

## Crédits

- Design inspiré (recopié) du site de **v1em**
- Police : **Bubbleboddy** (version d'essai, vérifier la licence avant tout usage commercial)

## Contact

- Discord : legentilbeta
- GitHub : [@legentilbeta](https://github.com/legentilbeta)