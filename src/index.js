// this file will load up the initial page,  via exported function. 
// and will have the onclick listeners for the 
// "Kontakt" "Verkauf" "Kauf" buttons, which then
// will call the functions from the modules with the same names

import {loadLandingPage} from './modules/landing';
import {loadImmobilienKaufPage} from './modules/immobilienkauf';
import {loadVerkaufPage} from './modules/verkauf';
import {loadKontaktPage} from './modules/kontakt';
loadLandingPage();

const landingLogo = document.getElementById('landingPage');
landingLogo.addEventListener('click', function(e) {
});

const immobilienKauf = document.getElementById('immobilienKaufPage');
immobilienKauf.addEventListener('click', function(e) {
  loadImmobilienKaufPage();
  e.preventDefault();
});

const verkauf = document.getElementById('verkaufPage');
verkauf.addEventListener('click', function(e) {
  loadVerkaufPage();
  e.preventDefault();
});

const kontakt = document.getElementById('kontaktPage');
kontakt.addEventListener('click', function(e) {
  loadKontaktPage();
  e.preventDefault();
});