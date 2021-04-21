// modifies the middle section of the landing page to display
// the real estate gallery
import {removeChangingBlocks} from './removeMidBlock';

export function loadImmobilienKaufPage() {

  class HTMLelement {
    constructor(tag,className, innerHTML) {
        let element = document.createElement(tag);
        element.className = className;
        if (innerHTML){
          element.innerHTML = innerHTML;
        }
        return element;
    };
   }

  removeChangingBlocks();

    (function createImmobilienkaufSection(){
    const innerHTML= `
        <div class="immobilienkauf-card">
            <img src="/images/house1.jpeg" alt="red yellow house" class="immobilienkauf-card--img">
            <div class="immobilienkauf-card--title">
                <section class="immobilienkauf-card--form"><p>320qm Haus in Köln</p></section> 
                </div>
            <div class="immobilienkauf-card--daten">
                <section class="immobilienkauf-card--form">
                    <p>300€ Nebenkosten</p>
                    <p>948€ Vermietung</p>
                    <p>134qm vermietbare Fläche</p>
                    <p>320qm gesamte Fläche</p>
                </section> 
            </div>
            <div class="immobilienkauf-card--sale-pitch">
                <section class="immobilienkauf-card--form">
                <p>Ein idyllischer Traum in Köln. Nur fünf Minuten Fußweg
                    zu öffentlichen Verkehrsmitteln. 40 Minuten Fahrt zum
                    Flughafen Köln/Bonn. Ihre Familie wird das Haus lieben!
                    Nebenbei gibt es auch Aldi und Netto, 
                    sowie andere Einkaufsmöglichkeiten.</p>
                </section>
            </div>
        </div>
        <div class="immobilienkauf-card">
            <img src="/images/house2.jpeg" alt="brick house" class="immobilienkauf-card--img">
            <div class="immobilienkauf-card--title">
                <section class="immobilienkauf-card--form"><p>240qm Haus in Köln</p></section> 
                </div>
            <div class="immobilienkauf-card--daten">
                <section class="immobilienkauf-card--form">
                    <p>235€ Nebenkosten</p>
                    <p>789€ Vermietung</p>
                    <p>152qm vermietbare Fläche</p>
                    <p>240qm gesamte Fläche</p>
                </section> 
            </div>
            <div class="immobilienkauf-card--sale-pitch">
                <section class="immobilienkauf-card--form">
                <p>Ein gemütliches Zuhause in Köln. Nur zehn Minuten Fußweg
                    zu öffentlichen Verkehrsmitteln. 20 Minuten Fahrt zum
                    Flughafen Köln/Bonn. Ihre Familie wird das Haus lieben!
                    Nebenbei gibt es auch Lidl und Real, 
                    sowie andere Einkaufsmöglichkeiten. 
                    Es gibt auch ein Pferdestahl zur Vermietung. 
                    Jeden Tag können Sie in der Wahner Heide nebenbei spazieren gehen.</p>
                </section>
            </div>
        </div>
        <div class="immobilienkauf-card">
            <img src="/images/house4.jpeg" alt="modern house" class="immobilienkauf-card--img">
            <div class="immobilienkauf-card--title">
                <section class="immobilienkauf-card--form"><p>194qm Haus in Köln</p></section> 
                </div>
            <div class="immobilienkauf-card--daten">
                <section class="immobilienkauf-card--form">
                    <p>340€ Nebenkosten</p>
                    <p>890€ Vermietung</p>
                    <p>102qm vermietbare Fläche</p>
                    <p>194qm gesamte Fläche</p>
                </section> 
            </div>
            <div class="immobilienkauf-card--sale-pitch">
                <section class="immobilienkauf-card--form">
                <p>Eine moderne Zuflucht in Kölner Mitte. Nur zehn Minuten Fußweg
                    zu öffentlichen Verkehrsmitteln. 30 Minuten Fahrt zum
                    Flughafen Köln/Bonn. In 15 Minuten können Sie die Kölner Mitte erreichen,
                    sowie die Kölner Ringe.</p>
                </section>
            </div>
        </div>
                `
    const immobilienkauf = new HTMLelement ('section', 'immobilienkauf', innerHTML);
    immobilienkauf.classList.add("midblock");
    document.body.appendChild(immobilienkauf);
    })();

}