import moduleTest from "./moduleTest"

function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = moduleTest("Lewitt");
  
    return element;
  }
  
  document.body.appendChild(component());