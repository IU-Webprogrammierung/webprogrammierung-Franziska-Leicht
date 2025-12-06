# UX Portfolio Website – Franziska Leicht

## Projektbeschreibung & Ziele

Dieses Projekt entstand im Rahmen des Moduls **Web-Programmierung** (DLBUXPWP01) im Bachelorstudiengang **UX Design** an
der IU
Internationale Hochschule. Ziel war die Erstellung einer **Website**, die meine bisherigen Studienprojekte und
Kenntnisse
präsentiert und zugleich aktuelle Webstandards, Accessibility-Standards (WCAG/WAI-ARIA) sowie responsive Gestaltung
berücksichtigt.

## Informationsarchitektur & Bereiche

Die Portfolio-Website ist als **Onepager** konzipiert und folgt einer klaren, linearen Struktur mit alternierenden
Hintergründen je Sektion. Alle Inhalte sind über die Hauptnavigation erreichbar, die als Sticky Header fixiert ist.

1. **Hero** – Einstieg mit Profilbild, Name, Berufsbezeichnung, Claim und zentralem Call-to-Action Button
2. **Über mich** – Kurzvorstellung, Motivation, persönliche Einblicke + Timeline – Berufserfahrung und Bildung als
   visuelle Zeitachse
4. **Kenntnisse (Skills)** – Übersicht zu UX-, Tech- und Soft Skills mit Chips
5. **Projekte (Portfolio)** – Uni-Praxisprojekte mit Bildern, Text und externen Links zu Prototypen
6. **Kontakt & Inspiration** – Kontaktmöglichkeiten, Social Links und UX Pinnwand zur Inspiration

## Errungenschaften

### HTML, CSS & JavaScript

- **HTML5** mit semantischer Strukturierung (`<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`, `<article>`,
  `<ul>`, `<li>`)
- **Flexbox** und **CSS Grid** für responsives Layout
- **Media Queries** für Breakpoints:
    - `min-width: 1201px` (Desktops)
    - `max-width: 1200px` (Größere Tablets)
    - `max-width: 1000px` (kleine Tablets)
    - `max-width: 640px` (Smartphones)
- **Favicon** mit eigenem Logo
- **Sticky Header** (sehr aufwendig) mit Transparenz, Navigation zu jeder Sektion, "Franziska Leicht" ist klickbar und
  führt zum Start der Website
    - Ab Smartphone-Ansicht Switch zum **Hamburger-Menü** (ohne Framework, via Checkbox-Interaktion, Hamburger-Icon wird
      beim Öffnen zum X-Icon)
- **Alternierende Sektions-Hintergründe** mit skalierbarem **Fraktal** als
  Hintergrund ([hier zum Bild](images/noise.svg))
- **Flippable Projekt-Cards mit 2 Seiten** (sehr aufwendig): Einheitliche Bildgrößen für bessere Responsivität, bei
  Klick auf Bilder oder "+"-Button erscheint eine Beschreibung des Projekts in Textform und der "+"-Button rotiert durch
  CSS und wird zum "X"-Button (Schließen), das Bild bleibt leicht transparent im Hintergrund sichtbar
- **Responsive Timeline (sehr aufwendig)**: Horizontal bei Desktop-Ansicht, vertikal bei Smartphone/Tablet-Ansicht
- **Konsistente UI Components** (Chips, Buttons, Cards, Grid-Items)
- **Font Awesome** für Icon-Darstellung (lokal im Projekt eingebunden), Icons mit `<div>` anstatt `<i>`
- Komprimierte Bilder im **WebP Format** (max. 200 KB je Bild)
- **CSS Custom Properties (Variablen)** zur globalen Farbanpassung
- **CSS Nesting** zur modernen Verschachtelung
- **CSS Animationen** bei Profilbild, Projektkarten, Footer-Icons und Scroll-to-Top Button
    - **Hero-Bild animiert** (bewegt sich beim Hovern leicht nach oben, wie ein Winken)
- **Hover-Effekte** und **Mauszeiger Zustände** (Pfeil, Hand) für Buttons, Navigation
- **Scroll-to-Top Button** (`script.js`)
- **Dark Mode**-Unterstützung über `@media (prefers-color-scheme: dark)`. Website färbt sich somit passend zur
  Geräteeinstellung. Nutzt und überschreibt das eigene Farbsystem über CSS Variablen
- **Externe Projekt-Links** öffnen sicher in neuen Tabs (`target="_blank"`, `rel="noopener noreferrer"`)
- **Mail-Icon-Link (Mailto)** zur Kontaktaufnahme per E-Mail und direktem Öffnen des eigenen Mail-Clients anstatt
  sicherheitsgefährdendes Kontaktformular (E-Mail Injection)
- **Minimaler Einsatz von JavaScript** - Umsetzung essenzieller Features mit CSS und Checkbox Inputs
- **Web Compontents** für Projekt Subpages (sehr aufwendig) in extra Branch (`feature/project-subpages`, nicht in main),
  aber verworfen und nur konzeptartig umgesetzt
- **Refactoring** mit WebStorm, um weitere Erfahrung mit Entwicklungsumgebungen zu sammeln

### Barrierefreiheit (**WCAG 2.1 AA** und **WAI-ARIA**)

- **Semantische HTML-Struktur**
- **ARIA-Labels** für Navigation, Buttons, Icons und Links
- **Alt-Texte** für alle Bilder (inhaltlich beschreibend)
- **aria-hidden="true"** bei rein dekorativen Icons
- **Farben mit AA-Kontrastwerten** geprüft (Lighthouse-Test)
- **Visuell klarer Fokuszustand** durch Hover-Effekte und klare Hierarchie
- **Buttons mit `role="button"`** für Screenreader-Unterstützung

### Git-Workflow

- **Repository auf GitHub:** [
  `IU-Webprogrammierung/webprogrammierung-Franziska-Leicht`](https://github.com/IU-Webprogrammierung/webprogrammierung-Franziska-Leicht)
- **Regelmäßige Commits** zur Nachvollziehbarkeit und englische Commit Messages nach Conventional Commits Standard, über
  140
  Commits
- **2 Git Tags** für die ersten beiden Projektphasen, um Projektabgaben zu markieren
- **1 Branch** für ein umfangreiches neues Feature (Subpages mit Web Components), aber nicht weiter verfolgt
- **gitignore** Datei, um Systemdateien und IDE Workspace Files nicht versehentlich zu committen

### Testing und Qualitätssicherung

- **Lighthouse Test**: Best Practices und Accessibility ≥ 90 % // Letzter Lighthouse Test am 07.12.2025 - 100 Punkte (
  Best Practices + Accessibility)
- Prüfung für die **Browser** Safari, Firefox und Chrome: Es wurden keine Fehler festgestellt
    - MacOS Version: Tahoe 26.1 (25B78)
    - Firefox 145.0.1 (aarch64)
    - Safari Version 26.1 (21622.2.11.11.9)
    - Chrome 142.0.7444.176 (Offizieller Build) (arm64)

## Herausforderungen & Learnings

### Herausforderungen

- **Toggle Switch Dark Mode**: ich habe einen Toggle Switch mit HTML, CSS und JS für den Dark Mode gebaut, diesen aber
  wieder verworfen, da ich im Nachhinein gemerkt habe, dass dieser mit meinem Dark Mode Media Query Systemzustand
  überschreiben würde und es dann für so ein kleines Feature zu komplex wäre. Sinnvoll wäre es zum Beispiel einen Cookie
  initial mit der Systemauswahl anzulegen. Diesen dann durch eine Auswahl vom User durch den Dark/Light Theme Button zu
  überschreiben und dann bei Seitenneuladen diesen auszuwerten. Mein
  Media Query ist aber ausreichend und deswegen braucht es kein Toggle Button.
- **Web Components** bei Projekt-Subpages: ich habe beispielhaft für eine neue Projekt Subpage in einem extra Branch Web
  Components für Header mit Navigation, als auch den Footer entwickelt. Die Idee war für weitere Subseiten diese
  Komponenten wiederverwenden zu können. Die Idee wurde aber nicht weiterverfolgt, da es ein Bruch mit meinem Onepager
  Konzept wäre und auch Aufwand & Komplexität ungerechtfertigt steigen würden.
- **Flippable Projekt-Cards**: Design, Funktion und Responsivität waren teilweise sehr schwierig umzusetzen, da eine
  Seite der Card Bild und eine Text hat. Lösung durch:
    - CSS-Properties `z-index`, `opacity`
    - CSS-Grid für Flipcard Container mit Breakpoints
    - CSS-Flex für Flipcard Inhalt

### Learnings

- **CSS-Möglichkeiten**: Mit CSS ist sehr viel möglich, es muss nicht immer direkt JavaScript oder ein Framework sein.
  JavaScript wurde nur bei nicht essentiellen Funktionalitäten eingesetzt, damit die Website auch immer gut funktioniert
  und schnell lädt.
- **Semantisches HTML** für Barrierefreiheit: Nicht alle Tags sind semantisch, im Projekt habe ich die Bedeutung von
  Semantik
  und semantischen HTML Tags für die Barrierefreiheit gelernt
    - Beispiele: Icons mit `<div>` anstatt `<i>`, semantische Abfolge von H1, H2, H3 etc.
- **Git Versionierung**: Sehr hilfreich und nützlich für die agile Arbeit an einem größeren Web-Projekt und wenn man
  etwas
  verwerfen oder auf einen alten Stand zurücksetzen möchte
- **Font Awesome**: Die Icons wurden lokal eingebunden. IP-Adresse des Users soll nicht an US-Server weitergegeben
  werden,
  um theoretisch DSGVO-konform zu bleiben. Außerdem verbessert sich die Unabhängigkeit zu weiteren Servern.

© 2025 Franziska Leicht – IU Internationale Hochschule | Modul Web-Programmierung

