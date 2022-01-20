// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5
let matrix = [[200,2,3,4,5], [1,2,3,4,5], [1,2,3,4,5], [1,2,3,4,5], [1,2,3,4,5]]
let sum = 0;
for(let i=0 ; i < matrix.length; i++){
    if(i < matrix[i].length){
       sum = sum + matrix[i][i] + matrix[i][matrix[i].length -i -1]
    }
    if(i === matrix[i].length){
        sum = sum + matrix[i][i];
    }
    if(i > matrix[i].length){
        sum = matrix[i][matrix[i].length -i -1] + matrix[i][i]
    }
}
console.log(sum)