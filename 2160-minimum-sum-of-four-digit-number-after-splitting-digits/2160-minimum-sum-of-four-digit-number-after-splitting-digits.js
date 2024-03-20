/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    let sortedNum = num
      .toString() 
      .split('') 
      .sort((a, b) => a - b) 

    let sum = 0;
    
    sum += parseInt(sortedNum[0]) * 10 + parseInt(sortedNum[2]);
    sum += parseInt(sortedNum[1]) * 10 + parseInt(sortedNum[3]);

    return sum;
};