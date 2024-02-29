/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const num = new Set();
    
    for(let i=0; i< nums1.length; i++){
        num.add(nums1[i]);
    }
    
    var common = new Set();
    
    for(let i=0; i<nums2.length; i++){
        if(num.has(nums2[i])){
            common.add(nums2[i]);
        }
    }
    
    return Array.from(common);
};