// creates landing page in the index html
export function loadLandingPage() {
  const topNav = document.createElement('nav');
  topNav.classList.add('top-nav');
  document.body.appendChild(topNav);

  const topNavInfo = document.createElement('div');
  topNavInfo.classList.add('top-nav--upper-info');
  document.topNav.appendChild(topNavInfo);

}