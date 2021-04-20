// creates landing page in the index html
export function loadLandingPage() {
  class elementHTML {
    constructor(tag,className, innerHTML) {
        let element = document.createElement(tag);
        element.className = className;
        element.innerHTML = innerHTML;

        return element;
    }
}
let innerHTML = "testing this thang"
const testing = new elementHTML('div', 'section-header', innerHTML);
document.body.appendChild(testing)

  // function topNav () {
  //   const topNav = document.createElement('nav');
  //   topNav.classList.add('top-nav');
  //   document.body.appendChild(topNav);

  //   const topNavInfo = document.createElement('div');
  //   topNavInfo.classList.add('top-nav--upper-info');
  //   document.topNav.appendChild(topNavInfo);
  // }

}