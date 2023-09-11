export class Node <T>{
    public val:T
    public next:Node<T>|null = null
    constructor(val:T){
        this.val = val
        this.next = null
    }
}
export function reverseLinkedList<T>(head:Node<T>|null):Node<T>|null{
    let current = head
    let prev = null

    while(current  !== null){
        const temp = current.next
        current.next = prev
        prev = current.next
        current = temp
    }
    return head

}

// A > B > C > null 
// C > B > A > null
