import { describe, expect, run, test } from "../testing/main";
import { escapeMaze } from "./bfs";

describe("escape maze",()=>{
    test("should take 9 steps", ()=>{
        const maze = [
            [0, 1, 0, 0, 0],
            [0, 0, 0, 1, 0],
            [1, 1, 0, 1, 0],
            [1, 1, 0, 0, 0],
            [0, 0, 0, 1, 0]
        ]
        const result = escapeMaze(maze)
        expect(result).toBe(9)
    })

    test("should take 11 steps", ()=>{
        const maze = [
            [0, 1, 0, 0, 0],
            [0, 1, 0, 1, 0],
            [0, 1, 0, 1, 0],
            [0, 1, 0, 0, 0],
            [0, 0, 0, 1, 0]
        ]
        const result = escapeMaze(maze)
        expect(result).toBe(11)
    })

    test("should take 11 steps", ()=>{
        const maze = [
            [0, 1, 0, 0, 0],
            [0, 0, 0, 1, 0],
            [1, 1, 1, 1, 0],
            [1, 1, 0, 0, 0],
            [0, 0, 0, 1, 0]
        ]
        const result = escapeMaze(maze)
        expect(result).toBe(11)
    })

    test("should take 9 steps", ()=>{
        const maze = [
            [0, 1, 0, 0, 0],
            [0, 0, 0, 1, 0],
            [1, 1, 0, 1, 0],
            [1, 1, 0, 0, 1],
            [0, 0, 0, 0, 0],
        ]
        const result = escapeMaze(maze)
        expect(result).toBe(9)
    })
})
run()