// create a queue from scratch

function Queue<T>(){
    
    this.queue:T[] = []
    this
    
    return{
        add(item:T){
            queue.push(item)
        },
        get length(){
            return queue.length
        },
        remove(){
            return queue.shift()
        },
        peek(){
            return queue[0]
        }
    }
}
const q = new Queue<number>()
