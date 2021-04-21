// modifies index.html to display contact form
import { removeChangingBlocks } from "./removeMidBlock";

export function loadVerkaufPage() {
  class HTMLelement {
    constructor(tag, className, innerHTML) {
      let element = document.createElement(tag);
      element.className = className;
      if (innerHTML) {
        element.innerHTML = innerHTML;
      }
      return element;
    }
  }

  removeChangingBlocks();

  (function createVerkaufSection() {
    const innerHTML = `
        <div class="section-header">Wir verkaufen Ihre Immobilie für Sie!</div>
            <article class="verkauf--copywriting">
                <p class ="copywriting--text">Guthrat Immobilien ist ein erfahrener Partner im Verkauf der Immobilien, auf den Sie sich verlassen können.
                    Jahrzehnte lange Erfahrung im Immobilienverkauf wird nun dazu genützt Ihre Immobilie optimal zu vermarkten
                    und einen maximalen Gewinn für sie zu schaffen.   
                    Wir befolgen einen 3-Schritte Plan beim Verkauf der Immobilien:    </p>
            </article>

            <section class="verkauf-schritte--container">
                <figure class="verkauf-schritte--card">
                   <h1 class="verkauf-schritte--card-title">I Vorbereitung</h1> 
                   <p class="verkauf-schritte--card-description">Erste Besichtigung Ihrer
                    Immobilie, Ermittlung
                    eines marktgerechten
                    Kaufpreises. 
                    Aufnahme der Objektphotos
                    für effiziente Vermarktung.</p>
                </figure>
                <div class="verkauf-schritte--arrow">
                        &#8594;
                </div>
                <figure class="verkauf-schritte--card">
                   <h1 class="verkauf-schritte--card-title">II Kundengewinn</h1> 
                   <p class="verkauf-schritte--card-description">Vermarktung Ihres Objekts
                    optimal durch Online-Portale
                    und Zeitungen, sowie
                    Kontaktierung unserer 
                    Kontakte.</p>
                </figure>
                <div class="verkauf-schritte--arrow">
                        &#8594;
                </div>

                <figure class="verkauf-schritte--card">
                   <h1 class="verkauf-schritte--card-title">III Vertragsabschluss</h1> 
                   <p class="verkauf-schritte--card-description">Sobald die Acquise erfolgt ist,
                    zeigen wir Ihnen alle potentiellen
                    Kunden, sowie ihre Schufa
                    Statistik, Außerdem
                    helfen wir Ihnen beim Vertrags-
                    abschluss.</p>
                </figure>
            </section>
                `;
    const verkauf = new HTMLelement(
      "section",
      "verkauf",
      innerHTML
    );
    verkauf.classList.add("midblock");
    document.body.appendChild(verkauf);
  })();

  (function createBottomNav() {
    const innerHTMLbtmNav = `
        <div class="bottom-nav--name">Guthrat Immobilien</div>
        <ul class="bottom-nav--address">
            <li class="address--street">Maasdorf Straße 231</li>
            <li class="address--city">50967 Köln</li>
            <li class="address--country">Deutschland</li>
        </ul>

        <ul class="bottom-nav--info">
            <li class="lower-info--tel">Tel.: 0221-444-5566</li>
            <li class="lower-info--mail">E-Mail: guthrat@immobilien.de</li>
        </ul>

        <ul class="bottom-nav--link-list">
            <li class="link-list">
                <a href="" class="nav-link">Impressum</a> 
            </li>
            <li class="link-list">
                <a href="" class="nav-link">AGB</a> 
            </li>
            <li class="link-list">
                <a href="" class="nav-link">Datenschutz</a> 
            </li>
            <li class="link-list">
                <a href="" class="nav-link">Cookies</a> 
            </li>
        </ul>
            `;
    const bottomNav = new HTMLelement("section", "bottom-nav", innerHTMLbtmNav);
    bottomNav.classList.add("midblock");
    document.body.appendChild(bottomNav);
  })();
}
