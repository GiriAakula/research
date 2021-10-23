// https://leetcode.com/problems/find-numbers-with-even-number-of-digits/
// let nums = [12,345,2,6,7896];

// let count = 0
// nums.forEach(element => {
//     let str = element.toString();
//     if(str.length % 2 === 0){
//         count++;
//     }
// });

// console.log(count)


var maximumWealth = function(accounts) {
    let wealth = []
    for(let row = 0; row < accounts.length; row++){
        wealth.push(findSum(accounts[row]))
    }
    console.log(wealth)
    wealth.sort(function(a,b){return a-b;});
    console.log(wealth)
    return wealth[wealth.length - 1]

    function findSum(arr){
        let sum = 0;
        for(let i = 0; i < arr.length; i++){
            sum = sum + arr[i]
        }
        return sum;
    }
};

console.log(maximumWealth([[1,5],[7,3],[3,5]]))