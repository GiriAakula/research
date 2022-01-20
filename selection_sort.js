let arr = [12,3,45,5,6,7,43,23,34,54,65,78,0]

let max = 0;
function selection_sort(arr){
    for(let i=0; i< arr.length; i++){
        max = 0;
        for(let j=1; j < arr.length - i; j++){
            if(arr[j] > arr[max]){
                max = j
            }
        }
        let temp = arr[arr.length - i - 1]
        arr[arr.length - i - 1] = arr[max];
        arr[max] = temp;
    }

    return arr;
}

console.log(selection_sort(arr))