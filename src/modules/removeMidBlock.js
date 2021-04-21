export function removeChangingBlocks() {
      const midElements = document.querySelectorAll('.midblock')
            for (let counter = 0; counter < midElements.length; counter++){
                  midElements[counter].innerHTML ='';
                  midElements[counter].remove();
            }
}