import {loadLandingPage} from './modules/landing';
loadLandingPage();

const landingLogo = document.getElementById('landingPage');

landingLogo.addEventListener('click', function(e) {
  console.log("you've clicked on the logo");
  // prevents reload
  e.preventDefault();
});

// this file will load up the initial page,  via exported function. 
// and will have the onclick listeners for the 
// "Kontakt" "Verkauf" "Kauf" buttons, which then
// will call the functions from the modules with the same names
