## Problem Statement:

You are given a list of integers `nums` and an integer `target`. Write a function `twoSum` that returns all pairs of indices `[i, j]` such that `nums[i] + nums[j] = target`. You may assume that each input would have exactly one solution, and you may not use the same element twice.

Implement function `twoSum(nums: List[int], target: int) -> List[List[int]]` where
- nums: A list of integers
- target: An integer

### Example

Input:
```
nums = [2, 7, 11, 15]
target = 9
```

Output:
```
[[0, 1]]
```

Explanation:
```
nums[0] + nums[1] = 2 + 7 = 9, so [0, 1] is a valid solution.
```

### Constraints

- The length of the list `nums` will be between 2 and 10^4.
- Each integer `nums[i]` will be between -10^9 and 10^9, inclusive.
- The integer `target` will be between -10^9 and 10^9, inclusive.

### Note

In the example above, the pair `[1, 0]` is also a valid solution, but the order of the indices does not matter.

### Evaluation Criteria

Your solution will be evaluated on the following criteria:
- Correctness: Your code should return the correct output for all test cases.
- Performance: Your code should complete all test cases within the time limit.
- Clarity: Your code should be easy to read and understand.
