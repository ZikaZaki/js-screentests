function isDivisible(num, k) {
    return num % k === 0;
}

function solution(a, k) {
    let count = 0;
    
    for (let i = 0; i < a.length; i++) {
        for (let j = i+1; j < a.length; j++) {
            count += isDivisible(a[i] + a[j], k) ? 1 : 0;
        }
    }
    
    return count;
}
