export function sumZeroNaive(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]];
            }
        }
    }
}

export function sumZeroRefactored(arr) {
    let result = 0;

    for (let left = 0, right = arr.length - 1; left < right; ) {
        result = arr[left] + arr[right];

        if (result === 0) 
            return [arr[left], arr[right]];
        else if (result > 0) 
            right--;
        else if (result < 0)
            left++;
    }
}

export function countUniqueValues(arr) {
    let x = 0
    let y = 0;
    
    while (y < arr.length) {
        if (arr[x] !== arr[y]) {
            x++;
            arr[x] = arr[y];
        }
        
        y++;
    }
    
    return x === 0 ? x : x + 1;
}