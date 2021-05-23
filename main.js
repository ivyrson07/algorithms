import { add1Timing, add2Timing } from './addTiming.js';
import { anagram, sameRefactored } from './frequencyPattern.js';
import { sumZeroRefactored } from './multiplePointersPattern.js';
import { moveZeroes } from './arrays.js';
import { maxSubarraySum } from './slidingWindowPattern.js';

// add2Timing();
// add1Timing();

// const refactoredResult1 = sameRefactored([1, 2, 3], [4, 1, 9]);
// const refactoredResult2 = sameRefactored([1, 2, 3], [1, 9]);
// const refactoredResult3 = sameRefactored([1, 2, 1, 4, 6, 7, 8], [4, 4, 1, 16, 36, 49, 64]);

// console.log(`\nSame Pattern? ${refactoredResult1} \nSame Pattern? ${refactoredResult2} \nSame Frequency? ${refactoredResult3} \n`);

// console.log(anagram("this is texts", "textthis  ssi"));

// console.log(sumZeroRefactored([-4, -3, -2, -1, 0, 1, 2, 4, 5, 10]));

// moveZeroes([1, 2, 3, 4, 0, 5, 0, 0, 6, 7, 0, 8, 0, 3, 4, 0, 5, 0, 4, 5]);

maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3, 6, 7, 3, 9, 3, 5, 2, 8, 5, 2, 8, 4, 8, 2, 9, 1, 0, 9, 3, 6, 1, 5, 3, 6, 2, 7, 8, 4, 3], 5);