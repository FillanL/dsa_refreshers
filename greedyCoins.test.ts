import { greedyCoins } from "./greedyCoins"
import { describe, expect, run, test } from "./testing/main"

describe("general testing", ()=>{
    test("63 coins to 6", ()=>{
        const result = greedyCoins(63, [1,5,10,25])
        expect(result).toBe(6)
    })

    test("55 coins to 3", ()=>{
        const result = greedyCoins(55, [1,5,10,25])
        expect(result).toBe(3)
    })

    test("1 coin", ()=>{
        const result = greedyCoins(1, [1,5,10,25])
        expect(result).toBe(1)
    })


    test("0 coins", ()=>{
        const result = greedyCoins(0, [1,5,10,25])
        expect(result).toBe(0)
    })
})
run()