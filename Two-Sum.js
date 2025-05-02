/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


// In efficient solution, we use two nested loops to check each pair of numbers in the array.O(n^2) time complexity.]
var twoSum_inefficient = function(nums, target) {
    const n = nums.length;
    for(let i = 0; i < n; i++) {
        for(let j = i + 1; j < n; j++) {
            if(nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    
    return []; // Return an empty array if no solution is found
};

console.log(twoSum_inefficient([2,7,11,15], 9)); // Expected output: [0,1]


// In the efficient solution, we use a hash map to store the indices of the numbers we have seen so far. O(n) time complexity.
var twoSum = function(nums, target) {
    const map = {}; // value -> index

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.hasOwnProperty(complement)) {
            return [map[complement], i];
        }
        map[nums[i]] = i;
    }

    return [];
};

console.log(twoSum([2,7,11,15], 9)); // Expected output: [0,1]