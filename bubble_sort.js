let arr = [4,56,76,43,44,232,1000,500,2];

let count = 0;
function asc_bubble_sort(arr){
    for(let i=0; i< arr.length - 1; i++){
        for(let j=0; j< arr.length - 1 - i; j++){
            if(arr[j+1] < arr[j]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

function desc_bubble_sort(arr){
    let swapped = true;
    for(let i=0; i< arr.length; i++){
        swapped = false;
        for(let j=0; j< arr.length -i; j++){
            if(arr[j] < arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                swapped = true;
            }
        }
        if(swapped === false){
            break;
        }
    }
    return arr;
}

console.log(asc_bubble_sort(arr))
console.log(desc_bubble_sort(arr))