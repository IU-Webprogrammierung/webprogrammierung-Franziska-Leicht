# UX Portfolio Website // Franziska Leicht

## Projektbeschreibung & Ziele

Dieses Projekt entstand im Rahmen des Moduls **Web-Programmierung** (DLBUXPWP01) im Bachelorstudiengang **UX Design** an
der IU
Internationale Hochschule. Ziel war die Erstellung einer **Portfolio-Website**, die meine bisherigen UX Studienprojekte und
Kenntnisse
präsentiert und zugleich aktuelle Webstandards, Accessibility-Standards (WCAG/WAI-ARIA) sowie responsive Gestaltung
berücksichtigt.

## Informationsarchitektur & Bereiche

Die Portfolio-Website ist als **Onepager** konzipiert und folgt einer klaren, linearen Struktur mit alternierenden
Hintergründen je Sektion. Alle Inhalte sind über die Hauptnavigation erreichbar, die als Sticky Header fixiert ist.

1. **Hero/Startseite** – Einstieg mit Profilbild, Name, Berufsbezeichnung, Claim und zentralem Call-to-Action Button
2. **Über mich** – Kurzvorstellung, Motivation, persönliche Einblicke
3. **Berufserfahrung und Bildung** – Timeline als visuelle Zeitachse
4. **Kenntnisse** – Übersicht zu UX-, Tech- und Soft Skills mit Chips
5. **Portfolio** – Uni-Praxisprojekte mit Bildern, Text und externen Links zu Prototypen
6. **Human-Centered-Design Prozess** – Meine UX-Projekt-Vorgehensweise in 3 Phasen
7. **Kontakt** – Kontaktmöglichkeiten, Social Links und UX Pinnwand zur Inspiration

## Eingesetzte Technologien & Methoden

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
- **Font Awesome** für Icon-Darstellung (lokal im Projekt eingebunden), Icons mit `<div>` anstatt `<i>`
- **WebP Format** bei allen Bildern (max. 200 KB je Bild) für optimierte Performance
- **CSS Variablen** zur globalen Farbanpassung
- **CSS Nesting** zur modernen Verschachtelung
- **CSS Animationen** bei Profilbild, Projektkarten, Footer-Icons und Scroll-to-Top Button
    - **Hero-Bild animiert** (Transition mit ease: bewegt sich beim Hovern leicht nach oben, wie ein Winken)
- **Hover-Effekte** und **Mauszeiger Zustände** (Pfeil, Hand) für Buttons, Navigation
- **Scroll-to-Top Button** mit Smooth-Scrolling(`script.js`)
- **Code Kommentare** bei JavaScript
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
- **Screenreader-Test** (Chrome, Firefox) erfolgreich, Inhalte sind barrierefrei zugänglich

### Git-Workflow

- **Repository auf GitHub:** [
  `IU-Webprogrammierung/webprogrammierung-Franziska-Leicht`](https://github.com/IU-Webprogrammierung/webprogrammierung-Franziska-Leicht)
- **Regelmäßige Commits** zur Nachvollziehbarkeit und englische Commit Messages nach Conventional Commits Standard, über
  160
  Commits
- **2 Git Tags** für die ersten beiden Projektphasen, um Projektabgaben zu markieren
- **1 Branch** für ein umfangreiches neues Feature (Subpages mit Web Components), aber nicht weiter verfolgt
- **gitignore** Datei, um Systemdateien und IDE Workspace Files nicht versehentlich zu committen

### Testing und Qualitätssicherung

- **Lighthouse Test**: Best Practices und Accessibility ≥ 90 %
    - Letzter Desktop-Test am 07.12.2025 um 1:34 Uhr: 100 Punkte Barrierefreiheit, 96 Punkte Best Practices
    - Letzter Mobil-Test am 07.12.2025 um 1:37 Uhr: 100 Punkte Barrierefreiheit, 100 Punkte Best Practices
- Prüfung für die **Browser** Safari, Firefox und Chrome: Es wurden keine Fehler festgestellt
    - MacOS Version: Tahoe 26.1 (25B78)
    - Firefox 145.0.1 (aarch64)
    - Safari Version 26.1 (21622.2.11.11.9)
    - Chrome 142.0.7444.176 (Offizieller Build) (arm64)

## Herausforderungen & Learnings

### Herausforderungen

- **Responsivität und mehrere Breakpoints**  
  Die Website umfasst viele Komponenten (Hero-Bereich, Flipcards, Timeline, Cards etc.), die
  in verschiedenen Viewports unterschiedlich reagieren müssen. Eine Herausforderung war, für Desktop ein großzügiges, luftiges Layout zu gestalten und gleichzeitig auf
  mobilen Geräten eine kompakte, klare und gut lesbare Darstellung sicherzustellen. Mehrere Breakpoints waren notwendig, weil einzelne Elemente unterschiedlich stark auf Größenänderungen reagieren.
- **Dark-Mode-Toggle**  
  Ein eigener Toggle-Switch wurde entwickelt, aber verworfen, da er das systemseitige `prefers-color-scheme`
  überschrieben hätte und der Aufwand (Cookie-Handling, User-Persistierung) für dieses Projekt unverhältnismäßig gewesen
  wäre. Sinnvoll wäre es zum Beispiel einen Cookie
  initial mit der Systemauswahl anzulegen. Diesen dann durch eine Auswahl vom User durch den Dark/Light Theme Button zu
  überschreiben und dann bei Seitenneuladen diesen auszuwerten. Der Media-Query-basierte Dark Mode ist ausreichend und
  barrierefrei.

- **Web Components für Subpages**  
  Für mögliche Projekt-Unterseiten wurden Header und Footer als Web Components prototypisch entwickelt. Die Idee wurde
  nicht weiterverfolgt, da sie das Onepager-Konzept brechen und die Komplexität ohne Mehrwert erhöhen würde.

- **Flippable Projekt-Cards**  
  Die Kombination aus Bild- und Textseite je Card sowie die Anforderungen an Responsivität machten die Umsetzung
  anspruchsvoll.
  Gelöst durch:
    - Einsatz von `z-index` und `opacity`
    - Verwendung von CSS Grid mit Breakpoints
    - Flexbox für die innere Struktur

### Learnings

- **Responsivität & Breakpoints**  
  Vertieftes Verständnis für komplexe responsive Layouts und den Umgang mit mehreren Breakpoints über verschiedene
  Komponenten hinweg.

- **CSS-Potenzial**  
  Viele Funktionen konnten rein mit CSS umgesetzt werden; JavaScript wurde bewusst nur für nicht-essentielle Features
  genutzt, um Performance und Stabilität zu sichern.

- **Semantisches HTML**  
  Gestärktes Bewusstsein für die Bedeutung semantischer HTML-Elemente im Kontext der Barrierefreiheit.

- **Barrierefreiheit (WCAG & ARIA)**  
  Erweiterte Kenntnisse in zugänglichem Webdesign, inklusive Farbkontraste, Rollen, Alternativtexte und
  Navigationsstrukturen.

- **Git-Workflow**  
  Praktische Erfahrung in strukturierter Code Versionierung und branchbasierter Entwicklung.

- **Font Awesome lokal eingebunden**  
  Keine externen Serveranfragen, dadurch datenschutzfreundlicher (DSGVO) und unabhängig von CDN-Ausfällen.

© 2025 Franziska Leicht – IU Internationale Hochschule | Modul Web-Programmierung

