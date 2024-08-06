function dfs(root){
  const stack = [ root ]

  while( stack.length > 0 ){
    let current = stack.pop()
    console.log(current.value)

    if(current.left) stack.push(current.left);
    if(current.right) stack.push(current.right);
  }
}
