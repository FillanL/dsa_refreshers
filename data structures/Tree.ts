export class TreeNode<T>{
    public val:T|null;
    public left:TreeNode<T>|null;
    public right:TreeNode<T>|null;
    constructor(val:T){
        this.val = val
        this.left = null
        this.right = null
    }
}