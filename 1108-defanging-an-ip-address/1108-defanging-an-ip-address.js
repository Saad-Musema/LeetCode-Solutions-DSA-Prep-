/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    var def = "";
    
    for(let i=0; i<address.length; i++){
        if(address[i] == "."){
            def += "[.]"
        }else{
            def+= address[i];
        }
    }
    
    return def;
};