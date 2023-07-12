An example of a CodeSignal question that tests the ability to implement algorithms to solve problems:

## Problem statement: isIncreasing

You are given an array of integers. Your task is to implement the `isIncreasing` function that determines whether the array is strictly increasing.

The function should take an array of integers as input and return `true` if the array is strictly increasing (i.e., each element is greater than the previous element), and `false` otherwise.

Implement the `isIncreasing` function:

```javascript
function isIncreasing(arr) {
  // Your code here
}
```

### Input

- An array of integers `arr` (1 ≤ `arr.length` ≤ 10^5, 1 ≤ `arr[i]` ≤ 10^9)

### Output

- Return `true` if the array is strictly increasing, and `false` otherwise.

### Example

```javascript
console.log(isIncreasing([1, 2, 3, 4, 5])); // Output: true
console.log(isIncreasing([1, 2, 3, 2, 5])); // Output: false
```

### Note

In the first example, all elements of the array are strictly increasing, so the function returns `true`.

In the second example, the fourth element is less than the third element, so the function returns `false`. 

This question tests several core CS concepts, including arrays, loops, and conditional statements, as well as the ability to implement algorithms to solve problems. The question also measures code implementation, problem-solving, and speed, as the solution must be correct, efficient, and implemented within a given time limit.
