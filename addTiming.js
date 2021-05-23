import { performance } from 'perf_hooks';

const timer = performance;

function addNumber1(n) {
    return n * (n + 1) / 2;
}

function addNumber2(n) {
    let total = 0;

    for (let i = 0; i <= n; i++) {
        total += i;
    }

    return total;
}

export function add1Timing() {
    const time1 = timer.now();
    addNumber1(10000000);
    const time2 = timer.now();
    
    console.log(`Time elapsed : ${(time1 - time2) / 1000} seconds.`);
}

export function add2Timing() {
    const time1 = timer.now();
    addNumber2(10000000);
    const time2 = timer.now();
    
    console.log(`Time elapsed : ${(time1 - time2) / 1000} seconds.`);
}