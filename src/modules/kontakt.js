// modifies index.html to display contact form
import { removeChangingBlocks } from "./removeMidBlock";

export function loadKontaktPage() {
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

  (function createKontaktSection() {
    const innerHTML = `
        <div class="section-header">Kontakt</div>
        <section class="kontakt-form--container">
            <form class="kontakt-form">
                <div class="kontakt-form--email">
                    <input type="text" name="email">
                    <label for="email">E-Mail-Addresse</label><br>
                </div>
                <div class="kontakt-form--phone">
                    <input type="text" name="phone">
                    <label for="phone">Telefonnummer (optional)</label><br>
                </div>
                <div class="kontakt-form--fullname">
                    <input type="text" name="fullname">
                    <label for="fullname">Name</label><br>
                </div>
                <div class="kontakt-form--message">
                    <input type="text" class="kontakt-form--message" name="message">
                    <label for="message">Nachricht</label><br>
                </div>
                <input type="submit" class="kontakt-form--button" value="Abschicken">
            </form>
        </section>
        <section class="kontakt-info--container">
            <div class="kontakt-info--email-phone">
               <p>0221-444-5566</p>                
               <p>guthrath@immobilien.de</p>
            </div>
            <div class="kontakt-info--address">
               <p>Maasdorf Straße 231</p>
               <p>50967 Köln</p>
               <p>Deutschland</p>                
            </div>
        </section>
                `;
    const kontakt = new HTMLelement(
      "section",
      "kontakt",
      innerHTML
    );
    kontakt.classList.add("midblock");
    document.body.appendChild(kontakt);
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
