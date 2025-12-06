# UX Portfolio Website – Franziska Leicht

## Projektbeschreibung & Ziele

Dieses Projekt entstand im Rahmen des Moduls **Web-Programmierung** (DLBUXPWP01) im Bachelorstudiengang **UX Design** an der IU
Internationalen Hochschule. Ziel war die Erstellung einer **Website**, die meine bisherigen Studienprojekte und Kenntnisse
präsentiert und zugleich aktuelle Webstandards, Accessibility-Standards (WCAG/WAI-ARIA) sowie responsive Gestaltung
berücksichtigt.

## Informationsarchitektur & Bereiche

Die Portfolio-Website ist als **Onepager** konzipiert und folgt einer klaren, linearen Struktur.  
Alle Inhalte sind über die Hauptnavigation erreichbar, die als Sticky Header fixiert ist.

1. **Hero** – Einstieg mit Name, Claim, Profilbild und zentralem Call-to-Action
2. **Über mich** – Kurzvorstellung, Motivation, persönliche Einblicke
3. **Timeline** – Berufserfahrung und Bildung als visuelle Zeitachse
4. **Kenntnisse (Skills)** – Übersicht zu UX-, Tech- und Soft Skills in strukturierter Kartenform
5. **Projekte (Portfolio)** – Präsentation der Studien- und Praxisprojekte mit Bildern und externen Links zu Prototypen
6. **Kontakt (Footer)** – Kontaktmöglichkeiten, Social Links und UX Pinnwand

## Technologien und Methoden

### ✍🏻 Struktur und Layout

- **HTML5** mit semantischer Strukturierung (`<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`, `<article>`,
  `<ul>`, `<li>`)
- **Flexbox** und **CSS Grid** für responsives Layout
- **Media Queries** für Breakpoints:
    - `min-width: 1201px` (Desktops)
    - `max-width: 1200px` (Größere Tablets)
    - `max-width: 1000px` (kleine Tablets)
    - `max-width: 640px` (Smartphones)
- **Sticky Header** mit Navigation


### 🎨 Design und Styles

- **CSS Nesting** zur modernen Verschachtelung
- **Font Awesome** für Icon-Darstellung
- Einsatz von **CSS Custom Properties (Variablen)** zur globalen Farbanpassung
- **Dark Mode**-Unterstützung über `@media (prefers-color-scheme: dark)`
- **Hover-Effekte** für Buttons, Navigation und Icons
- **Abgerundete Card-Layouts** für Projekte, Skills und Timeline
- **Typografisches Hierarchiesystem** mit skalierbaren Fontgrößen
- **Consistent UI Components** (Chips, Buttons, Cards, Grid-Items)


### ⚙️ Interaktion & JavaScript

- **Hamburger-Menü** (ohne Framework, via Checkbox-Interaktion)
- **Scroll-to-Top Button** (`script.js`) mit sanfter Animation
- Externe Projekt-Links öffnen in neuen Tabs (`target="_blank"`, `rel="noopener noreferrer"`)


### ♿ Barrierefreiheit (Accessibility)

- Umsetzung gemäß **WCAG 2.1 AA** und **WAI-ARIA**:
    - **Semantische HTML-Struktur**
    - **ARIA-Labels** für Navigation, Buttons, Icons und Links
    - **Alt-Texte** für alle Bilder (inhaltlich beschreibend, nicht redundant)
    - **aria-hidden="true"** bei rein dekorativen Icons
    - **Farben mit AA-Kontrastwerten** geprüft (Lighthouse-Test)
    - **Visuell klarer Fokuszustand** durch Hover-Effekte und klare Hierarchie
    - **Buttons mit `role="button"**` für Screenreader-Unterstützung


### 🧾 Git-Workflow

- Repository auf GitHub:  
  [
  `IU-Webprogrammierung/webprogrammierung-Franziska-Leicht`](https://github.com/IU-Webprogrammierung/webprogrammierung-Franziska-Leicht)
- Regelmäßige Commits zur Nachvollziehbarkeit und Commit Messages nach Conventional Commits Standard
- 2 Tags für die ersten beiden Projektphasen


### 🔍 Testing und Qualitätssicherung

- **Lighthouse Test**: Best Practices und Accessibility ≥ 90 % // Letzter Lighthouse Test am 07.12.2025 - 100 Punkte (Best Practices + Accessibility)
- Die Website wurde für die Browser Safari, Firefox und Chrome geprüft: es wurden keine Fehler festgestellt


## 🚧 Herausforderungen

-



© 2025 Franziska Leicht – IU Internationale Hochschule | Modul Web-Programmierung

