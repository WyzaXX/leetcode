// O(n)
function missingNumber(nums: number[]): number {
  const range = [...Array(nums.length + 1).keys()].reduce(
    (partialSum, a) => partialSum + a,
    0
  );
  const sumofNums = [...nums].reduce((partialSum, a) => partialSum + a, 0);
  return range - sumofNums;
}
