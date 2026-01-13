// O(n)
function containsDuplicate(nums: number[]): boolean {
  let map = new Set();

  for (const num of nums) {
    if (map.has(num)) {
      return true;
    }
    map.add(num);
  }
  return false;
}
