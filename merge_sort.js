let arr = [34,56,3,4,57,99,54,78,90,49];

function merge_sort(arr){
    if(arr.length === 1) return arr;
    if(arr.length === 2){
        if(arr[0] > arr[1]){
            let temp = arr[0];
            arr[0] = arr[1];
            arr[1] = temp;
        }
        return arr;
    }
    let middle = Math.floor(arr.length / 2)
    let left = arr.slice(0, middle);
    let right = arr.slice(middle, arr.length)
    let sortedLeft = merge_sort(left);
    let sortedRight = merge_sort(right);

    let finalSortedArray = [];
    let i =0;
    let j=0;

   while(sortedRight.length > j && sortedLeft.length > i){
    if(sortedLeft[i] < sortedRight[j]){
        finalSortedArray.push(sortedLeft[i]);
        i++
    } else{
        finalSortedArray.push(sortedRight[j]);
        j++
    }
   }
   if(sortedLeft.length > i){
       finalSortedArray = [...finalSortedArray, ...sortedLeft.slice(i, sortedLeft.length)]
   }
   if(sortedRight.length > j){
       finalSortedArray = [...finalSortedArray, ...sortedRight.slice(j, sortedRight.length)]
   }
   return finalSortedArray
}

console.log(merge_sort(arr))