import readline from "readline-sync";
import searchStock from "./services/searchFeature"
import filterStocksByPrice from "./services/filterFeature"
import OperateOnStock from "./services/operatingFeature"


console.log("\nWelecome to Stock Trading App\n")
let exit = false
while (!exit) {
    console.log("=== MENU ===")
    console.log("1. Search for a stock by name or id")
    console.log("2. Show all stocks above or below a given price")
    console.log("3. Buy or sell a stock")
    console.log("4. Exit")
    let choice = readline.question("\nPlease choose a option: ")

    let identifier
    switch (choice) {
        case "1":
            identifier = readline.question("Pease enter a name or id: ")
            console.log(searchStock(identifier))
            break
        case "2":
            let givenPrice = readline.question("Pease enter a price: ")
            let above = readline.keyInYN("enter y if above")
            console.table(filterStocksByPrice(givenPrice, above))
            break
        case "3":
            let operation = readline.question("Pease enter a operation: ")
            identifier = readline.question("Pease enter a name or id: ")
            OperateOnStock(operation, identifier)
        case "4":
            exit = true
            console.log("Looking forward to seeing you again...")
        default:
            console.log("Invalid choice, Pleace retry")
            break
    }
}