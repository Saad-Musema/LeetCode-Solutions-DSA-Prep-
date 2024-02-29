/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function(nums, target) {
    nums.sort((a, b) => a - b);
    var left = 0;
    var right = nums.length - 1;
    
    let count = 0;
    
    while(left<right){
        if(nums[left] + nums[right] < target){
            count += right -left;
            left++;
        }
        
        else{
            right--;
        }
    }
    
    return count;
    
};