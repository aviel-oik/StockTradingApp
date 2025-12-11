import { stockMarket } from "../dataBase/stoks.js"

export default function analyzeMarketTrends() {
    let increasStocks = topStocks().sort((a, b) => b.growth - a.growth).slice(3)
    let decreasStocks = topStocks().sort((a, b) => a.growth - b.growth).slice(3)
    let result = {
        topIncreasingStocks: increasStocks,
        topDecreasingStocks: decreasStocks,
        mostVolatileStock: null,
        categoryStability: null
    }

}


function topStocks() {
    let topStock = []
    for (let stock of stockMarket.stocks) {
        if (stock.previousPrices.length === 0)
            return
        let growth = stock.currentPrice - stock.previousPrices[0]
        topStock.push({ stock: stock, growth: growth })
    }
    return topStock

}

