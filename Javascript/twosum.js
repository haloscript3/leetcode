/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numToIndex = {};

    for (let i = 0; i < nums.length; i++) {
        const difference = target - nums[i];

        if (difference in numToIndex) {
            return [numToIndex[difference], i];
        }

        numToIndex[nums[i]] = i;
    }

    return [];
};
const target = 9;
const x = [2,7,11,15];
console.log(twoSum(x,target));