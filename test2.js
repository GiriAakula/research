array1 = ["collection", "data", "sample", "columns"]
array2 = ["sample", "values", "rows"]

// ["collection", "data", "columns", "values", "rows"] //unique
// ["sample"] //duplicate

let arr = [...array1, ...array2];
let obj = {};
arr.map(item => {
    if(obj[item] === undefined){
        obj[item] = 1
    }else {
        obj[item] = obj[item] + 1;
    }
})
let unique = [];
let duplicate = [];
for (const key in obj) {
    if(obj[key] > 1){
        duplicate.push(key)
    }

    if(obj[key] === 1){
        unique.push(key)
    }
}

console.log(unique, duplicate)