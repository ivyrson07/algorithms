import { performance } from 'perf_hooks';

const timer = performance;

export function anagram(str1, str2) {
    if (str1.length !== str2.length)
        return false;

    let lookup = {};

    for (let x = 0; x < str1.length; x++) {
        let letter = str1[x];
        lookup[letter] = (lookup[letter] || 0) + 1;
    }

    for (let x = 0; x < str2.length; x++) {
        let letter = str2[x];

        console.log(lookup);

        if (!lookup[letter]) 
            return false;
        else 
            lookup[letter] -= 1;
    }

    return true;
}

export function sameNaive(arr1, arr2) {
    if (arr1.length !== arr2.length){
        return false;
    }

    for (let i = 0; i < arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i] ** 2);
        
        if(correctIndex === -1) {
            return false;
        }

        arr2.splice(correctIndex, 1);
    }

    return true;
}

export function sameRefactored(arr1, arr2) {
    if (arr1.length !== arr2.length){
        return false;
    }
    
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}

    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;     
    }

    console.log(frequencyCounter1);
    console.log(arr2);
    
    for (let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) {
            return false;
        }
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false;
        }
    }

    return true;
}