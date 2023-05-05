import { getDocks, getHaulingShips } from "./database.js"



export const DockList = () => {
    const docks = getDocks()

    let docksHTML = "<ul>"

    for (const dock of docks) {
        // Convert each dock object to an <li> and append to the docksHTML string
        docksHTML += `<li data-type="docks" data-name="${dock.location}" data-id="${dock.id}">${dock.location} can hold ${dock.volume} million tons of cargo</li>`;
    }

    docksHTML += "</ul>"

    return docksHTML
}

//This event listener needs to list the dock location and the haulers present that are listed. To do this we will need to make sure the dock string for the haulers and the location string for the docks are the same
document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.dataset.type === "docks") {
            const dockId = itemClicked.dataset.id
            const hauls = getHaulingShips()
            let haulingShips = []
            for (const haul of hauls) {
                if (haul.dockId === parseInt(dockId)) {
                    haulingShips.push(haul.name)
                }
            }
            if (haulingShips.length === 0) {
                window.alert(`${itemClicked.dataset.name} is currently unloading nothing.`)
            } else {
            window.alert(`The ${itemClicked.dataset.name} dock is currently unloading ${haulingShips.join(", ")}`)
            }
        }
    }
)


