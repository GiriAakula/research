let arr = [12,3,45,5,6,7,43,23,34,54,65,78,0 ,-12]

function insertion_sort(arr){
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j > 0; j--) {
            if(arr[j] < arr[j-1]){
                let temp = arr[j];
                arr[j] = arr[j-1];
                arr[j-1] = temp;
            } else {
                break;
            }
        }
    }

    return arr;
}

console.log(insertion_sort(arr))