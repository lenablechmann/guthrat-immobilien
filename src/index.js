import moduleTest from "./modules/moduleTest"
import {loadLandingPage} from './modules/landing';
loadLandingPage();

// this file will load up the initial page,  via exported function. 
// and will have the onclick listeners for the 
// "Kontakt" "Verkauf" "Kauf" buttons, which then
// will call the functions from the modules with the same names

function component() {
    const element = document.createElement('div');
  
    element.innerHTML = moduleTest("Lewitt");
  
    return element;
  }
  
  document.body.appendChild(component());
