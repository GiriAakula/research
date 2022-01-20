let arr = [3,5,2,1,4];

function cyclic_sort(arr){
    for (let i = 0; i < arr.length; i++) {

        while(arr[i] !== i+1){
            if(arr[i] !== i+1){
                let temp = arr[i];
                arr[i] = arr[temp - 1]
                arr[temp - 1] = temp;
            }
        }
    }

    return arr;
}

console.log(cyclic_sort(arr))