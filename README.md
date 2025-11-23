# UX Portfolio Website – Franziska Leicht

## Projektbeschreibung

Dieses Projekt entstand im Rahmen des Moduls **Web-Programmierung** im Bachelorstudiengang **UX Design** an der IU
Internationalen Hochschule.  
Ziel war die Erstellung einer **Onepager-Portfolio-Website**, die meine bisherigen Studienprojekte und Kenntnisse
präsentiert und zugleich aktuelle Webstandards, Accessibility-Standards (WCAG/WAI-ARIA) sowie responsive Gestaltung
berücksichtigt.

## Ziele

- Entwicklung einer **modernen, barrierefreien Portfolio-Website**
- Umsetzung eines **klar strukturierten Onepagers** mit responsivem Layout
- Integration meiner **Uni-Projekte**
- Anwendung von **aktuellen HTML-, CSS- und Accessibility-Standards**
- Technisch saubere und nachvollziehbare Projektstruktur mit Git-Versionierung

## Informationsarchitektur

Die Portfolio-Website ist als **Onepager** konzipiert und folgt einer klaren, linearen Struktur.  
Alle Inhalte sind über die Hauptnavigation erreichbar, die als Sticky Header fixiert ist.

**Hauptbereiche der Seite:**

1. **Hero** – Einstieg mit Name, Claim, Profilbild und zentralem Call-to-Action
2. **Über mich** – Kurzvorstellung, Motivation, persönliche Einblicke
3. **Timeline** – Berufserfahrung und Bildung als visuelle Zeitachse
4. **Kenntnisse (Skills)** – Übersicht zu UX-, Tech- und Soft Skills in strukturierter Kartenform
5. **Projekte (Portfolio)** – Präsentation der Studien- und Praxisprojekte mit Bildern und externen Links zu Prototypen
6. **Kontakt (Footer)** – Kontaktmöglichkeiten und Social Links

**Globale Navigation:**

- Über mich
- Kenntnisse
- Portfolio
- Kontakt

## Technologien und Methoden

### 🧱 Struktur und Layout

- **HTML5** mit semantischer Strukturierung (`<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`, `<article>`,
  `<ul>`, `<li>`)
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
- **Font Awesome** für Icon-Darstellung
- Einsatz von **CSS Custom Properties (Variablen)** zur globalen Farbanpassung
- **Dark Mode**-Unterstützung über `@media (prefers-color-scheme: dark)`
- **Hover-Effekte** für Buttons, Navigation und Icons
- **Abgerundete Card-Layouts** für Projekte, Skills und Timeline
- **Typografisches Hierarchiesystem** mit skalierbaren Fontgrößen
- **Consistent UI Components** (Chips, Buttons, Cards, Grid-Items)

---

### ⚙️ Interaktion & JavaScript

- **Hamburger-Menü** (ohne Framework, via Checkbox-Interaktion)
- **Scroll-to-Top Button** (`script.js`) mit sanfter Animation
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
    - **Visuell klarer Fokuszustand** durch Hover-Effekte und klare Hierarchie

---

### 🧾 Git-Workflow

- Repository auf GitHub:  
  [
  `IU-Webprogrammierung/webprogrammierung-Franziska-Leicht`](https://github.com/IU-Webprogrammierung/webprogrammierung-Franziska-Leicht)
- Regelmäßige Commits zur Nachvollziehbarkeit und Commit Messages nach Conventional Commits Standard

---

### 🔍 Testing und Qualitätssicherung

- **Lighthouse Audit**: Performance, Best Practices und Accessibility ≥ 90 %

---

## 📚 Erkenntnisse & Learnings

- Vertieftes Verständnis von **responsivem Design** und **Flex/Grid-Architekturen**
- Praxisnahe Anwendung von **WCAG 2.1 Richtlinien**
- Bedeutung von **semantischem HTML und ARIA** für Barrierefreiheit
- **Erfahrung mit Git-Workflows** und konventionellem Commit-Stil
- Erweiterung des Verständnisses für **strukturierte UX-Portfolios**

---

## Ausblick

- Geplanter Ausbau der Accessibility (AAA-Level)
- Eventuell Integration eines Dark Mode Toggles
- Hosten einer eigenen Domain für meine Website

© 2025 Franziska Leicht – IU Internationale Hochschule | Modul Web-Programmierung