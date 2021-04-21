// creates landing page in the index html
export function loadLandingPage() {

  class HTMLelement {
    constructor(tag,className, innerHTML) {
        let element = document.createElement(tag);
        element.className = className;
        if (innerHTML){
          element.innerHTML = innerHTML;
        }
        return element;
    }
}

// html creation, using IIFE pattern for keeping namespace clean 
// and separate blocks of html
(function createTopNav () {
  const topNav = new HTMLelement ('nav', 'top-nav');
  document.body.appendChild(topNav);

  const topNavUpper = new HTMLelement ('div', 'top-nav--upper-info');
  topNav.appendChild(topNavUpper);

  const salePitch = new HTMLelement ('div', 'upper-info--sale-pitch', 'IHR IMMOBILIENMAKLER IN KÖLN');
  topNavUpper.appendChild(salePitch);

  const infoTel = new HTMLelement ('div', 'upper-info--tel', 'Tel.: 0221-444-5566');
  topNavUpper.appendChild(infoTel);

  const infoMail = new HTMLelement ('div', 'upper-info--mail', 'E-Mail: guthrat@immobilien.de');
  topNavUpper.appendChild(infoMail);

  const innerHTMLmenu = `
            <li class="menu--logo">
                <a href="" class="nav-link" id="landingPage">GR</a> 
            </li>
            <li class="menu--kaufen">
                <a href="" class="nav-link" id="ImmobilienKaufPage">Immobilienkauf</a> 
            </li>
            <li class="menu--verkaufen">
                <a href="" class="nav-link" id="VerkaufPage">Verkauf</a> 
            </li>
            <li class="menu--kontakt">
                <a href="" class="nav-link" id="KontaktPage">Kontakt</a> 
            </li>
            `
  const topNavMenu = new HTMLelement ('ul', 'top-nav--menu', innerHTMLmenu);
  topNav.appendChild(topNavMenu);
})();

(function createLandingPicture(){
  const innerHTMLpicture = `
        <picture>
        <source
          srcset="../images/mobileLandingHouse640.jpeg"
          type="image/jpg"
          media="all and (max-width:600px)"
        />
        <source
          srcset="../images/wideLandingHouse1366.jpeg"
          type="image/jpg"
          media="all and (min-width:601px) and (max-width:1200px)"
        />
        <source
          srcset="../images/wideLandingHouse.jpeg"
          type="image/jpg"
          media="all and (min-width:1201px)"
        />
        <!-- default image -->
        <img class="landing-img" src="../images/wideLandingHouse1366.jpeg" alt="idyllic house image" />
      </picture>
            `
  const landingPicture = new HTMLelement ('div', 'header-picture', innerHTMLpicture);
  landingPicture.id = "landingPicture";
  document.body.appendChild(landingPicture);

})();

(function createAboutSection(){
  const innerHTMLabout = `
        <div class="section-header">Mit Guthrat Immobilien sicher in die Zukunft</div>
        <section class="about--container">
            <article class="about--container-copywriting">
                <p class ="copywriting--text">Schon seit über 10 Jahren ist Guthrat der Immobilienmakler des Vertrauens in Raum Köln.
                Verkauf/Ankauf der Immobilien nimmt viel Zeit und Kenntnisse in Anspruch und kann schnell zu einer heiklen
                und stressigen Angelegenheit werden. </p>
                <p class ="copywriting--text">Gutrath, der Immobilienmakler der Vertrauens in Raum Köln, nimmt den Stress und Probleme aus dieser
                Gleichung. Unsere jahrelange Erfahrung im Immobilienmarkt wird auch sie vor Problemen
                und Risiken schützen. </p>
            </article>
            <img src="/images/agentPhoto.jpeg" alt="Photo of the real estate agent" class="about--container-agent-photo">
        </section>
            `
  const aboutSection = new HTMLelement ('section', 'about', innerHTMLabout);
  aboutSection.id = "aboutSection"
  document.body.appendChild(aboutSection);
})();

(function createShowcaseReel(){
  const innerHTMLreel = `
        <div class="section-header">Immobilienangebote</div>
        <div class="showcase-reel--gallery">
            <figure class="gallery--frame">
                <img src="/images/house1.jpeg" alt="red yellow house" class="gallery--photo">
            </figure>
            <figure class="gallery--frame">
                <img src="/images/house2.jpeg" alt="brick house" class="gallery--photo">
            </figure>
            <figure class="gallery--frame">
                <img src="/images/house3.jpeg" alt="colorful city house" class="gallery--photo">
            </figure>
            <figure class="gallery--frame">
                <img src="/images/house4.jpeg" alt="modern house" class="gallery--photo">
            </figure>
            <figure class="gallery--frame">
                <img src="/images/house5.jpeg" alt="white kitchen" class="gallery--photo">
            </figure>
            <figure class="gallery--frame">
                <img src="/images/house6.jpeg" alt="antique roof" class="gallery--photo">
            </figure>
            <figure class="gallery--frame">
                <img src="/images/house7.jpeg" alt="grey blue house" class="gallery--photo">
            </figure>
            <figure class="gallery--frame">
                <img src="/images/house8.jpeg" alt="lush room" class="gallery--photo">
            </figure>
        </div>
            `
  const showcaseReel = new HTMLelement ('section', 'showcase-reel', innerHTMLreel);
  showcaseReel.id = "showcaseReel";
  document.body.appendChild(showcaseReel);
})();
(function createBottomNav(){
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
            `
  const bottomNav = new HTMLelement ('section', 'bottom-nav', innerHTMLbtmNav);
  bottomNav.id = "bottomNav";
  document.body.appendChild(bottomNav);
})();
}