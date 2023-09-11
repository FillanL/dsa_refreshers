// Problem Statement: You are given an amount of money and a set of coin denominations. The goal is to find the minimum number of coins needed to make up the given amount.

export function greedyCoins(amountNeeded:number, coinsAllowed:number[]):number{
    let coinCounter = 0
    let remainder = amountNeeded
    for(let i = coinsAllowed.length-1; i>=0; i--){
        while(remainder >= coinsAllowed[i]){
            remainder-=coinsAllowed[i]
            coinCounter++
        }
    }
    return coinCounter
}
