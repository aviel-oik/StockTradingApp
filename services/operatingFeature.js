import { stockMarket } from "../dataBase/stoks.js"
import readline from "readline-sync";
import { searchStock } from "./searchFeature.js"


export function OperateOnStock(operation, identifier) {
    const stockNumber = readline.questionInt("How many units to buy or sell ? ")
    if (!validParam(operation, identifier, stockNumber))
        return
    let stockCategory
    for (let stock of stockMarket.stocks)
        if (identifier === stock.id || identifier === stock.name)
            stockCategory = stock.category

    applyOperation(operation, identifier, stockNumber, stockCategory)
    return
}

function validParam(operation, identifier, stockNumber) {
    if (operation !== "buy" && operation !== "sell") {
        console.log("Invalid type of operation")
        return false
    }
    if (searchStock(identifier).length === 0)
        return false
    if (operation === "buy")
        for (let stock of stockMarket.stocks)
            if ((identifier === stock.id || identifier === stock.name) && (stock.availableStocks - stockNumber < 0)) {
                console.log("The number of stocks is insufficient for your purchase")
                return false
            }
    return true
}

function applyOperation(operation, identifier, stockNumber, stockCategory) {
    for (let stock of stockMarket.stocks) {
        if (identifier === stock.id || identifier === stock.name) {
            stockMarket.lastUpdated = new Date().toISOString()
            stock.availableStocks -= stockNumber
            stock.previousPrices.push(stock.currentPrice)
            operation === "buy" ? stock.currentPrice += stock.currentPrice * 0.05 : stock.currentPrice -= stock.currentPrice * 0.05
        }
        if (stock.category === stockCategory && (identifier === stock.id || identifier === stock.name)) {
            stockMarket.lastUpdated = new Date().toISOString()
            stock.previousPrices.push(stock.currentPrice)
            operation === "buy" ? stock.currentPrice += stock.currentPrice * 0.01 : stock.currentPrice -= stock.currentPrice * 0.01
        }
    }
}
