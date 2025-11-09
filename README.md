# UX Portfolio Website – Franziska Leicht

## Projektbeschreibung
Dieses Projekt entstand im Rahmen des Moduls **Web-Programmierung** im Bachelorstudiengang **UX Design** an der IU Internationalen Hochschule.  
Ziel war die Erstellung einer **Onepager-Portfolio-Website**, die meine bisherigen Studienprojekte und Kenntnisse präsentiert und zugleich aktuelle Webstandards, Accessibility-Standards (WCAG/WAI-ARIA) sowie responsive Gestaltung berücksichtigt.

---

## Ziele
- Entwicklung einer **modernen, barrierefreien Portfolio-Website**
- Umsetzung eines **klar strukturierten Onepagers** mit responsivem Layout
- Integration meiner **UX-, UI-, und eCommerce-Projekte**
- Anwendung von **aktuellen HTML-, CSS- und Accessibility-Standards**
- Technisch saubere und nachvollziehbare Projektstruktur mit Git-Versionierung

---

## Technologien und Methoden

### 🧱 Struktur und Layout
- **HTML5** mit semantischer Strukturierung (`<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`, `<article>`, `<ul>`, `<li>`)
- **Flexbox** und **CSS Grid** für responsives Layout
- **Media Queries** für Breakpoints:
  - `max-width: 1200px` (Tablet Landscape)
  - `max-width: 1000px` (Tablet Portrait)
  - `max-width: 800px` (kleine Tablets)
  - `max-width: 640px` (Smartphones mit Hamburger-Menü)
  - `max-width: 500px` (Kleine Smartphones)
- **Sticky Header** mit Navigation
- **Scroll-to-Top Button** mit JS (sichtbar beim Scrollen)

---

### 🎨 Design und Styles
- **CSS Nesting** zur modernen Verschachtelung
- **Font Awesome** (CDN) für Icon-Darstellung
- Einsatz von **CSS Custom Properties (Variablen)** zur globalen Farbanpassung
- **Dark Mode**-Unterstützung über `@media (prefers-color-scheme: dark)`
- **Hover-Effekte** für Buttons, Navigation und Icons
- **Abgerundete Card-Layouts** für Projekte, Skills und Timeline
- **Typografisches Hierarchiesystem** mit skalierbaren Fontgrößen
- **Consistent UI Components** (Chips, Buttons, Cards, Grid-Items)

---

### ⚙️ Interaktion & JavaScript
- **Hamburger-Menü** (ohne Framework, via Checkbox-Interaktion)
- **Scroll-to-Top Button** (`scrollToTop.js`) mit sanfter Animation
- Externe Projekt-Links öffnen in neuen Tabs (`target="_blank"`, `rel="noopener noreferrer"`)
- Buttons mit `role="button"` für Screenreader-Unterstützung

---

### ♿ Barrierefreiheit (Accessibility)
- Umsetzung gemäß **WCAG 2.1 AA** und **WAI-ARIA**:
  - **Semantische HTML-Struktur**
  - **ARIA-Labels** für Navigation, Buttons, Icons und Links
  - **Alt-Texte** für alle Bilder (inhaltlich beschreibend, nicht redundant)
  - **aria-hidden="true"** bei rein dekorativen Icons
  - **Farben mit AA-Kontrastwerten** geprüft (Lighthouse-Test)
  - **Keyboard-freundliche Navigation**
  - **Visuell klarer Fokuszustand** durch Hover-Effekte und klare Hierarchie
- **Visually Hidden Utility Class** (CSS) vorgesehen für Screenreader-Only Content

---

### 🧾 Git-Workflow
- Repository auf GitHub:  
  [`IU-Webprogrammierung/webprogrammierung-Franziska-Leicht`](https://github.com/IU-Webprogrammierung/webprogrammierung-Franziska-Leicht)

---

### 🔍 Testing und Qualitätssicherung
- **Lighthouse Audit**: Performance, Best Practices und Accessibility ≥ 90 %

---

### 📚 Erkenntnisse & Learnings
- Vertieftes Verständnis von **responsivem Design** und **Flex/Grid-Architekturen**
- Praxisnahe Anwendung von **WCAG 2.1 Richtlinien**
- Bedeutung von **semantischem HTML und ARIA** für Barrierefreiheit
- **Erfahrung mit Git-Workflows** und konventionellem Commit-Stil
- Erweiterung des Verständnisses für **strukturierte UX-Portfolios**
- **Dark Mode-Implementierung** als UX-Optimierung und technische Herausforderung

---

© 2025 Franziska Leicht – IU Internationale Hochschule | Modul Web-Programmierung