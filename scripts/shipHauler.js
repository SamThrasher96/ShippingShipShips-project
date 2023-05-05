import { getHaulingShips, getCargoShips } from "./database.js";

export const haulerList = () => {
    const haulers = getHaulingShips()
    
    let haulersHTML = "<ul>"

    for (const haul of haulers)

    haulersHTML += `<li data-type="haulers" data-id="${haul.haulerId}">${haul.name}</li>`;

    haulersHTML += "</ul>"

    return haulersHTML
}


document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        // Was a hauler list item clicked?
        if (itemClicked.dataset.type === "haulers") {
            // Get the id of the hauler clicked
        const haulerId = itemClicked.dataset.id 
            // Start a counter variable at 0
        let shipCounter = 0
            // Iterate all of the shipping ships
            const shippingShips = getCargoShips()
            for (const ship of shippingShips) {
                
                // Does the haulerId foreign key match the id?
                if (parseInt(haulerId) === ship.haulerId) {
                // Increase the counter by 1
                shipCounter++
                }
            }
            window.alert(`This hauler is carrying ${shipCounter} cargo ships`)
        }
    }
)
