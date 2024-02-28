/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    var large = 0;
    var sum = 0;
    
    for(var i=0; i<accounts.length; i++){
        for(var j=0; j<accounts[i].length; j++){
            sum += accounts[i][j];
        }
        if(sum>large){
            large = sum;
        }
        sum = 0;
    }
    
    return large;
};