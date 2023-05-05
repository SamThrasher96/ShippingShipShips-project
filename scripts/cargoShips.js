import { getCargoShips } from "./database.js";

export const cargoShipList = () => {
    const cargo = getCargoShips()

    let cargoShipHTML = "<ul>"

    for (const cargoShip of cargo) {

        cargoShipHTML += `<li data-type="cargoShips">${cargoShip.name}</li>`;
    }

    cargoShipHTML += "</ul>"

    return cargoShipHTML
}


