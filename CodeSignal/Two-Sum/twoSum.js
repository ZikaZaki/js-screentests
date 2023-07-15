/*==============================================*/
const twoSum = (nums, target) => {
  const complements = new Map();
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (complements.has(complement)) {
      result.push([complements.get(complement), i]);
    }
    complements.set(nums[i], i);
  }
  return result;
}
