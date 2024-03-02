/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctAverages = function(nums) {
    nums = nums.sort((a, b) => a - b);
    let s = new Set();
    let len = nums.length, i = 0;
    while(i < len) {
        let del = (nums[i] + nums[len - 1 - i]) / 2;
        s.add(del);
        ++i;
    }
    return s.size;
};