import { stockMarket } from "../dataBase/stoks.js"

export default function filterStocksByPrice(givenPrice, above) {
    if (isNaN(givenPrice)) {
        console.log("You need to enter a number !")
        return
    }
    const givenPriceInt = parseInt(givenPrice)
    let searchResult = stockMarket.stocks.filter((stock) => above ? stock.currentPrice >= givenPriceInt : stock.currentPrice < givenPriceInt)
    if (searchResult.length === 0)
        console.log("No stock matches the provided data")
    return searchResult
}