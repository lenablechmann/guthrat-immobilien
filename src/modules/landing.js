// creates landing page in the index html
export function loadLandingPage() {
  console.log("supposedly this module got exported, nice.");
    const element = document.createElement('nav');
    element.innerHTML = "testing dom modification";
    element.classList.add('top-nav')
    document.body.appendChild(element);
}