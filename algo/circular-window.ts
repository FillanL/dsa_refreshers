function circularSlidingWindow(array:any[], size:number){
  const windowValues = []
  for(let indx=0; indx < array.length; indx++){
    const window = []
    for(let windowIndx = 0; windowIndx < size; windowIndx++){
      windowValues.push( array[ (indx+ windowIndx)% array.length ] )
    }
    windowValues.push( window )
  }
  return windowValues
}
console.log( circularSlidingWindow([1,2,3,4,5],3) )
