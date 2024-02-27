/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let x = 0;
    for(let i=0; i<operations.length; i++){
        switch (operations[i]){
            case "++X":
            case "X++":
                x++;
                break;
            case "--X":
            case "X--":
                x--;
                break;
        }           
    }
    
    return x;
};