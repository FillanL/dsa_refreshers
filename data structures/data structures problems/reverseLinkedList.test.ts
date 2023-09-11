import { describe, expect, test } from "../../testing/main";
import { reverseLinkedList, Node } from "./reverseLinkedList";

describe("test reverseLinkedList",()=>{
   test("reverseLinkedList",()=>{
    let a = new Node("A")
    let b = new Node("B")
    let c = new Node("C")
    let d = new Node("D")
    a.next = b
    b.next = c
    c.next = d
    const result = reverseLinkedList(a)
    expect(result?.val).toBe("D")
    expect(result?.next?.val).toBe("C")
    expect(result?.next?.next?.val).toBe("B")
    expect(result?.next?.next?.next?.val).toBe("A")
   })
   test("reverseLinkedList null",()=>{
    let a = new Node(null)
    const result = reverseLinkedList(a)
    expect(result).toBe(null)
   })
   test("reverseLinkedList one node",()=>{
    let a = new Node("A")
    const result = reverseLinkedList(a)
    expect(result?.val).toBe("A")
   })
})