/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let count = 0;
    
    for(let i=0;i<sentences.length; i++){
        let senOne = sentences[i].split(" ");
        if(senOne.length > count){
            count = senOne.length;
        }
    }
    
    return count;
};