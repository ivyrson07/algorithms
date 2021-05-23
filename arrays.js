export function moveZeroes(arr) {
    console.log(arr);

    let firstZeroIdx = -1; 
    let nextZeroesCount = 0;
    let number = 0;
    let temp = 0;

    for (let x = 0; x < arr.length; x++) {
        number = arr[x];

        if (number === 0) {
            if (firstZeroIdx !== -1)
                nextZeroesCount++;
            else
                firstZeroIdx = x;
        } 
        else if (number !== 0 && firstZeroIdx !== -1) {
            temp = arr[firstZeroIdx];
            arr[firstZeroIdx] = arr[x];
            arr[x] = temp;
            
            firstZeroIdx = nextZeroesCount === 0 ? x : x - nextZeroesCount;
        }
    }
    
    console.log(arr);
}

// [1, 2, 3, 4, 0, 5, 0, 0, 6, 7, 0, 8, 0, 3, 4, 0, 5, 0, 4, 5]