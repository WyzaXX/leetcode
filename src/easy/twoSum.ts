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
