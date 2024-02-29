The approach that I came up with is iterating throught the array with two pointers. 

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

This was my first answer but the performace was very low.


More optimal answer is the new one!

