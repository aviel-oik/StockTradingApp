import { stockMarket } from "../dataBase/stoks.js"

export default function searchStock(identifier) {
    let searchResult = []
    for (let stock of stockMarket.stocks)
        if (identifier === stock.id || identifier === stock.name)
            searchResult.push(stock)
    if (searchResult.length === 0)
        console.log("No stock matches the provided identifier")
    return searchResult
}