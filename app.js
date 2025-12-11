import readline from "readline-sync";
import searchStock from "./services/searchFeature.js"
import filterStocksByPrice from "./services/filterFeature.js"
import OperateOnStock from "./services/operatingFeature.js"


console.log("\nWelecome to Stock Trading App\n")
let exit = false
while (!exit) {
    console.log("\n=== MENU ===")
    console.log("1. Search for a stock by name or id")
    console.log("2. Show all stocks above or below a given price")
    console.log("3. Buy or sell a stock")
    console.log("4. Exit")
    let choice = readline.question("\nPlease choose a option: ")

    let identifier
    switch (choice) {
        case "1":
            identifier = readline.question("Pease enter a name or id: ")
            const searchResult = searchStock(identifier)
            if (searchResult.length !== 0) {
                console.log("search successful:")
                console.log(searchResult)
            }
            break
        case "2":
            let givenPrice = readline.question("Pease enter a price: ")
            let above = readline.keyInYN("Do you want the prices above the given price(press y) or bellow(press n) ? ")
            const filterResult = filterStocksByPrice(givenPrice, above)
            if (filterResult != undefined && filterResult.length > 0)
                console.table(filterResult)
            break
        case "3":
            let operation = readline.question("Pease enter a operation: ")
            identifier = readline.question("Pease enter a name or id: ")
            OperateOnStock(operation, identifier)
            break
        case "4":
            exit = true
            console.log("Looking forward to seeing you again...")
            break
        default:
            console.log("Invalid choice, Pleace retry")
            break
    }
}