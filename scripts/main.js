import { DockList } from "./docks.js";
import { cargoShipList } from "./cargoShips.js";
import { haulerList } from "./shipHauler.js";

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>Shipping Ship Ships</h1>
<article class="details">
    <section class="detail--column list details__ships">
            <h2>Dock List</h2>
            ${DockList()}
        </section>
        <section class="detail--column list details__ships">
            <h2>Hauler List</h2>
            ${haulerList()}
        </section>
        <section class="detail--column list details__ships">
            <h2>Cargo Ship List</h2>
            ${cargoShipList()}
        </section>
`
mainContainer.innerHTML = applicationHTML

