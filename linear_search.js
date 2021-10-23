let arr = [2,45,67,3,4,5,6,34,56,0,-3,100];
const twoDArr = [[12,3,4,5], [3,4,5,22], [22,44,55,6]]
console.log(findTwoDArr(twoDArr, 12))


function findTwoDArr(arr, target){
    for (let row = 0; row < arr.length; row++) {
        for(col = 0; col < arr[row].length; col++){
            if(arr[row][col] === target){
                return true;
            }
        }
    }

    return false;
}
function findMin(arr){
    let minimum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if(arr[i] < minimum){
            minimum = arr[i]
        }
    }
    return minimum;
}
function findMax(arr){
    let maximum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if(arr[i] > maximum){
            maximum = arr[i]
        }
    }
    return maximum;
}