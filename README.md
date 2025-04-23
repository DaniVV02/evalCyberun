# JSONForms Read-Only Renderer

Ce projet est une démonstration d'une **interface en lecture seule** basée sur `React`, `TypeScript` et `jsonforms.io`, en utilisant **exclusivement les vanilla-renderers** (sans `@jsonforms/react`).

## Stack technique

- React + TypeScript
- [@jsonforms/core](https://github.com/eclipsesource/jsonforms)
- [@jsonforms/vanilla-renderers](https://github.com/eclipsesource/jsonforms)
- CSS-in-JS (inline style)

## Objectif

Afficher un formulaire JSON Forms **en lecture seule** avec un rendu personnalisé :

- Champs texte simple : affichés avec libellé à gauche, réponse à droite
- Champs texte multiligne : affichés pleine largeur sous la question
- Champs énumération : affichés sous forme de **badges stylisés**
- Tableaux avec pays et pourcentage : affichage clair et lisible
- Pas de champs modifiables, pas de boutons
- Design sobre et responsive

## Installation

```bash
git clone https://github.com/DaniVV02/evalCyberun.git
cd jsonforms-demo
npm install
npm run dev
