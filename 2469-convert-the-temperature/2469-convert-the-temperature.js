/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
    kelvin = celsius + 273.15;
    farhrenheit = celsius * 1.80 + 32.00;
    
    let ans = [];
    ans.push(kelvin);
    ans.push(farhrenheit)

    return ans;
};