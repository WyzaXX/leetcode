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
  let valuesMap = new Map<number, number>();
  let indexes: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    const value = nums[i];

    if (valuesMap.has(target - value)) {
      indexes[0] = valuesMap.get(target - value);
      indexes[1] = i;
      break;
    }
    valuesMap.set(value, i);
  }

  return indexes;
}
