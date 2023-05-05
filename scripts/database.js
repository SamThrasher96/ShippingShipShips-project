const database = {
    docks: [
        { id: 1, location: "Shanghai, China", volume: "43.5" },
        { id: 2, location: "Busan, South Korea", volume: "21.6" },
        { id: 3, location: "Rotterdam, The Netherlands", volume: "14.35" },
        { id: 4, location: "Antwerp, Belgium", volume: "12.04" }
    ],

    
    haulers: [
        { haulerId: 1, name: "Star Destroyer", cargoShips: "Millenium Falcon, X Wing Fighter", dockId: 4 }, 
        { haulerId: 2, name: "Nebulon-B Frigate", cargoShips: "TIE Fighter, Lambda-class Shuttle", dockId: 2 },
        { haulerId: 3, name: "YT-1300 Light Freighter", cargoShips: "A-wing Starfighter, B-wing Starfighter", dockId: 3},
        { haulerId: 4, name: "GR-75 Medium Transport", cargoShips: "T-65B X-wing Starfighter, BTL-A4 Y-wing Assault Starfighter", dockId: 3}
        ],
    
    cargoShips: [
        {cargoId: 1, name: "Millenium Falcon", haulerId: 1},
        {cargoId: 2, name: "X Wing Fighter", haulerId: 1},
        {cargoId: 3, name: "TIE Fighter", haulerId: 2},
        {cargoId: 4, name: "Lambda-class Shuttle", haulerId: 2},
        {cargoId: 5, name: "A-wing Starfighter", haulerId: 3},
        {cargoId: 6, name: "B-wing Starfighter", haulerId: 3},
        {cargoId: 7, name: "T-65B X-wing Starfighter", haulerId: 4},
        {cargoId: 8, name: "BTL-A4 Y-wing Assault Starfighter", haulerId: 4},
    ]
    }

let sortedDocks = database.docks.sort((a, b) => (a.location > b.location) ? 1 : -1);
console.log(sortedDocks)

let sortedHaulers = database.haulers.sort((a, b) => (a.name > b.name) ? 1 : -1);
console.log(sortedHaulers)

let sortedCargoShips = database.cargoShips.sort((a, b) => (a.name > b.name) ? 1 : -1);
console.log(sortedCargoShips)

export const getDocks = () => {
    return sortedDocks.map(docks => ({...docks}))
}

export const getHaulingShips = () => {
    // You write the code for copying the array and returning it
    return sortedHaulers.map(haulers => ({...haulers}))
}

export const getCargoShips = () => {
    return sortedCargoShips.map(cargoShips => ({...cargoShips}))
}

/*export const getDocks = () => {
    return database.docks.map(docks => ({...docks}))
}

export const getHaulingShips = () => {
    // You write the code for copying the array and returning it
    return database.haulers.map(haulers => ({...haulers}))
}

export const getCargoShips = () => {
    return database.cargoShips.map(cargoShips => ({...cargoShips}))
}*/