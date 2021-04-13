import moduleTest from "./modules/moduleTest"

// this file will load up the initial page, 
// and will have the onclick listeners for the 
// "Kontakt" "Verkauf" "Kauf" buttons, which then
// will call the modules with the same names

function component() {
    const element = document.createElement('div');
  
    element.innerHTML = moduleTest("Lewitt");
  
    return element;
  }
  
  document.body.appendChild(component());
