/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    

    for(let i = 0; i< image.length; i++){
       image[i] = image[i].reverse();
        image[i] = image[i].map(x => 1 - x);
    };
    
    return image;
};