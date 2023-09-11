export function quicksort(arr:number[]):number[]{
    const pivot =  arr.length -1
    const left = []
    const right = []
    
    for(let i = 0; i < pivot; i++){
        if(arr[i] <= arr[pivot]) left.push(arr[i])
        else right.push(arr[i])
    }
    return [...quicksort(left),arr[pivot], ...quicksort(right)]
}
const nums:number[] = [4,2,5,6,23,41,3]


