//O(n)
// Not optimal
export function findDisappearedNumbers(nums: number[]): number[] {
  const arr = new Set([...Array(nums.length + 1).keys()]);
  const set = new Set(nums);
  const result: number[] = [];
  for (const num of arr) {
    if (!set.has(num) && num !== 0) {
      result.push(num);
    }
  }
  return result;
}

// Optimal
//function findDisappearedNumbers(nums: number[]): number[] {
//     let seen = new Set()
//     for (const num of nums) seen.add(num)
//     let res = []
//     for (let i = 1; i <= nums.length; i++) {
//         if (!seen.has(i)) res.push(i)
//     }
//     return res
// };
