// Write a JS program which accepts two strings , input1 and input2 . Return true if inpit1 is an ANAGRAM of input2.

// An anagram is basically a string that can be formed after rearranging letters from another string . Both the string should have exact same occurence of letters .

// Eg SILENT and LISTEN
// INTEGRAL and TRIANGLE
// ABC and CBA



// ABC and ABB are not anagrams

// ACC and CAC are anagrams


function anagram(str1, str2){
    let str1obj = {}
    let str2obj = {}
    for(let i=0; i< str1.length; i++){
        if(str1obj[str1[i]] === undefined){
            str1obj[str1[i]] = 1
        } else {
            str1obj[str1[i]] = str1obj[str1[i]]  + 1
        }
    }
    console.log(str1obj)
    for(let i=0; i< str2.length; i++){
        if(str2obj[str2[i]] === undefined){
            str2obj[str2[i]] = 1
        } else {
            str2obj[str2[i]] = str2obj[str2[i]]  + 1
        }
    }
    console.log(JSON.stringify(str2obj))

    if(JSON.stringify(str1obj) === JSON.stringify(str2obj)){
        return true;
    }
    return false
}

console.log(anagram("listen", "silent"))