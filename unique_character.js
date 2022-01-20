let str = "aajhskdhojdkjsdz";

function unique_char(str){
    let obj = {};

    for(let i=0; i< str.length; i++){
        if(obj[str[i]] === undefined){
            obj[str[i]] = 1;
        } else {
            obj[str[i]] = obj[str[i]] + 1;
        }
    }
    let unique_elements = []
    for (const key in obj) {
        const element = obj[key];
        if(element === 1){
            unique_elements.push(key)
        }
    }
    console.log(unique_elements)
    return obj
}

console.log(unique_char(str))