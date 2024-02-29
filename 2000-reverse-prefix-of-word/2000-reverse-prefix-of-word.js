/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    if (word.indexOf(ch) == -1) {
        return word;
    }

    const wordArray = word.split(''); 

    for (let i = 0; i < word.length; i++) {
        if (word[i] == ch) {
            let l = 0;
            let r = i;
            while (l < r) {
                [wordArray[l], wordArray[r]] = [wordArray[r], wordArray[l]];
                l++;
                r--;
            }
            break;
        }
    }

    return wordArray.join('');
};