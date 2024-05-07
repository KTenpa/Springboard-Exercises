//Quick Question 1
//{1,2,3,4}

//Quick Question 2
//ref

//Quick Question 3
/*
0: {Array(3) => true}
1: {Array(3) => false}
*/

//hasDuplicate
const hasDuplicate = arr => new Set(arr).size !== arr.length;

//vowelCount
function hasVowel(char){
    return "aeiou".includes(char);
}

function vowelCount(str){
    const vowelMap = new Map();
    for (let char of str) {
        let lowerCased = char.toLowerCase();
        if (hasVowel(lowerCased)){
            if(vowelMap.has(lowerCased)){
                vowelMap.set(lowerCased, vowelMap.get(lowerCased) + 1)
            } else {
                vowelMap.set(lowerCased, 1);
            }
        }
    }
    return vowelMap;
}
