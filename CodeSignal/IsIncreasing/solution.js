function isIncreasing(numbers) {
    const notIncreasing = [];
    numbers.reduce((prev, current, index) => {
        // console.log(`Current element: ${current}, previous element: ${prev}`);
        
        if (prev >= current) { notIncreasing.push(index - 1, index); }
        // if (prev >= current) { notIncreasing.push(prev, current); }
        return current;
    });
    
    return notIncreasing;
}

function swap(num) {
    return Number(num.toString().split("").reverse().join(""));
}

function solution(numbers) {
    // first check if the array is already strictly increasing
    const needSwapping = isIncreasing(numbers); 
    // console.log("needs swapping: ", needSwapping);
    // If the notIncreasing array is empty, then inital array is strictly increasing.
    if (!needSwapping.length) return true;
    
    for (let i = 0; i < needSwapping.length; i++) {
        const arr = [...numbers];
        arr[needSwapping[i]] = swap(arr[needSwapping[i]]);
    //   console.log(`Index: ${i} Array: ${arr}`);
        if (!isIncreasing(arr).length) return true;
    }
    
    return false;
}

