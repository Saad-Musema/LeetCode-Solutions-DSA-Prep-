/**
 * @param {number[]} nums
 * @return {number}
 */
var findTheArrayConcVal = function(nums) {
    let con = 0;
    
    let l = 0;
    let r = nums.length - 1;
    
    while (l <= r) {
        if (l === r) {
            con += Number(nums[l]);
            break;
        }
        
        con += Number(String(nums[l]) + String(nums[r]));
        l++;
        r--;
    }
    
    return con;
};
