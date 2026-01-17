// Only 1 solution, CANNOT use the same element twice.

// O(n2)
function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const curr = nums[i];
      const next = nums[j];

      if (curr + next === target) {
        return [i, j];
      }
    }
  }
}

// O(n)
function twoSumOptimal(nums: number[], target: number): number[] {
  const seen = {};
  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];
    const tarLeft = target - curr;
    if (seen[tarLeft] !== undefined) {
      return [seen[tarLeft], i];
    }
    seen[curr] = i;
  }
}
