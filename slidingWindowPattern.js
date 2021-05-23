export function maxSubarraySum(arr, number) {
    let sum = 0;
    let highestSum = 0;

    for (let x = 0; x < arr.length; x++) {
        if (x >= number) {
            sum -= arr[x - number];
        }

        sum += arr[x];
        highestSum = sum > highestSum ? sum : highestSum;
        console.log(sum);
    }

    console.log(`HIGHEST SUM : ${highestSum}`);
}