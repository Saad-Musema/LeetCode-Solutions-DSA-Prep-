/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function(nums, target) {
    nums.sort((a, b) => a - b);
    var left = 0;
    var right = 1;
    
    let count = 0;
    
    while(left<nums.length){
        if(nums[left] + nums[right] < target){
            count++;
            right++;
            continue;
        }
        
        left++;
        right = left +1;
    }
    
    return count;
    
};