# example-project

Beispielwebsite für ein fiktives Bewertungsportal für regionale Dienstleister auf Basis von Vue.js.

Die Startseite bietet eine Übersicht. Die Seiten "Gesundheit", "Einzelhandel", "Gastronomie" und "Handwerk"
zeigen Dienstleister der jeweiligen Kategorie.
Werden auf der Seite "Eigener Eintrag" eigene Einträge hinzugefügt, werden sie in den Tabellen der Start-
seite bzw. auf der Seite der passenden Kategorie hinzugefügt.
Die Tabelleneinträge können durch Anklicken der Sortier-Icons alphanumerisch oder nach Datum auf- und
absteigend sortiert werden.

Es handelt sich um eine reine FrontEnd-Anwendung ohne BackEnd-Anbindung. Tabelleneinträge werden lokal im
LocalStorage hinterlegt und bei jedem Seitenwechsel von dort abgerufen.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
