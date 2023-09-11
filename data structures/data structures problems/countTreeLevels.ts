import { TreeNode } from "../Tree";

export function treeLevel<T>(root:TreeNode<T>| null):number{
    if(!root) return 0

    const q = [root]
    let counter= 0
    while(q.length > 0){
        const qLength = q.length
        for(let i = 0 ; i<qLength; i++){
            const current =  q.shift()
            if(current?.left) q.push(current.left)
            if(current?.right) q.push(current.right)
        }
        counter+=1
    }
    return counter
}