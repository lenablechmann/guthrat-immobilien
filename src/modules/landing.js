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
})();

}