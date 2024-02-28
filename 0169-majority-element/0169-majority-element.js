/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const count = new Map();
    
    for(let i=0; i<nums.length; i++){
        if(count.has(nums[i])){
            let num = count.get(nums[i]); 
            count.set(nums[i], num + 1);
            continue;
        }
        count.set(nums[i], 1)
    }
    
    
    var majority = 0;
    var mode = 0;
    for (const x of count.entries()){
        if(x[1]>mode){
            mode = x[1]
            majority = x[0];
        }
    }
    
    return majority;
};