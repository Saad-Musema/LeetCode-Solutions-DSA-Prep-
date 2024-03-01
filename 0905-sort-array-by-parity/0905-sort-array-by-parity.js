/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let l = 0;
    let r = nums.length - 1;
    
    while(l<r){
        if(nums[l] % 2 == 1 && nums[r] % 2 == 0){
            [nums[l], nums[r]] = [nums[r], nums[l]];
            l++;
            r--;
        }
        
        if(nums[l]%2 == 0){
            l++;
        }
        
        if(nums[r]%2 == 1){
            r--;
        }
        
    }
    
    return nums;
};