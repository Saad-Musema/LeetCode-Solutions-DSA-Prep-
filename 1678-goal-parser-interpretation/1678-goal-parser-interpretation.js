/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    let goal = "";
    
    for(let i=0; i<command.length; i++){
        if(command[i]=="(" && command[i+1]==")"){
            goal+= "o";
            i++;
            continue;
        }
        
        if(command[i]=="(" && command[i+1]!=")"){
        
            continue;
        }
        
        if(command[i]==")"){
            continue;
        }
        
        goal += command[i];
    }
    
    return goal;
};