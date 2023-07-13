function isDivisible(num, k) {
    return num % k === 0;
}

function solution(a, k) {
    let count = 0;
    
    while (a.length > 1) {
        for (let j = 1; j < a.length; j++) {
            count += ((a[0] + a[j]) % k === 0) ? 1 : 0;
            // count += isDivisible(a[0] + a[j], k) ? 1 : 0;
            // console.log(`index:${j} Divisible:${(arr[0] + arr[j]) % k === 0}`);
        }
        
        a = a.splice(1);
    }
    
    return count;
}

