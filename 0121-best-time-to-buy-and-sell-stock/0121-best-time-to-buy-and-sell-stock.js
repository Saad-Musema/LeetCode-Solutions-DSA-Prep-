/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let l = 0, r = 1;
  let maxProfit = 0;
    
    while(r<=prices.length-1){
        if(prices[r]<prices[l]){
            l = r;
            r++;
            continue;
        }
        maxProfit = Math.max(maxProfit, prices[r] - prices[l]);
        r++;
    }
    
    return maxProfit;
};
