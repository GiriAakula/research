let arr = [1,2,3,4,5,6,7,8,9,10,220,330,550];


let start = 0;
let end = arr.length - 1;
let middle = Math.floor((end + start) / 2);

function binarySearch(num){
    middle = Math.floor((end + start) / 2);
    if(arr[middle] === num){
        return middle;
    }
    if(start > end){
        return -1;
    }
    // giriaakula
    if(num > arr[middle]){
        start = middle + 1;
        return binarySearch(num)
    }

    if(num < arr[middle]){
        end = middle - 1;
        return binarySearch(num)
    }
}

console.log(binarySearch(1))