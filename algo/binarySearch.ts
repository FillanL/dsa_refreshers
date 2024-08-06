function bSearch(array, searchValue){
  let left = 0;
  let right = array.length-1;

  while(left<=right){
    const mid =  Math.floor( (left+(right-left))/2 )

    if(array[mid] === searchValue) return mid;
    if(array[mid] > searchValue) right = mid-1;
    if(array[mid] < searchValue) left = mid+1;
  }
  return -1
}

console.log("got ", bSearch([1,23,33,45], 22), "expected -1" )
console.log("got ", bSearch([1,23,33,45], 1), "expected 1" )
console.log("got ", bSearch([1,23,33,45], 45), "expected 45" )
console.log("got ", bSearch([1,23,33,45], 23), "expected 23" )
