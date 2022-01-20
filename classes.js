// write a function which takes two objects and checks if they have the same properties and values

function objectCompare(obj1, obj2) {

    let obj1Keys = Object.keys(obj1);
    let obj2Keys = Object.keys(obj2);

    if (obj1Keys.length !== obj2Keys.length) {
        return false;
    }

    for (let key of obj1Keys) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }

    return true;

}

console.log(objectCompare({a: 1, b: 2}, {b: 2, a: 1, c:3}));