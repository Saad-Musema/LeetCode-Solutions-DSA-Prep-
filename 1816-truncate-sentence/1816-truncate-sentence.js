/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    let truc = "";
    let sr = s.split(" ");
    
    for(let i=0; i<k; i++){
        if(k-i==1){
            truc += sr[i];
            continue;
        }
        truc += sr[i] + " ";
    }
    
    return truc;
};