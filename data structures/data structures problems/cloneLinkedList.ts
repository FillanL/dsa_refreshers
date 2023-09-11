class NodeL<T>{
    public value:T;
    public next: NodeL<T>|null;
    constructor(value:T){
        this.value = value
        this.next = null
    }
}
function cloneLinkedList<T>(head:NodeL<T>|null):NodeL<T>|null{
    if(!head) return head
    let current = head
    let newLL = new NodeL(current.value)
    
    while(current.next !== null){
        current = current.next
        newLL.next = new NodeL(current.value)
        newLL = newLL.next
    }
    return newLL
}