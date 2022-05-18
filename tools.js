module.exports = class Validation {
    constructor(){}

    isEmpty(value){
        value = value.replace(" ","");
        return !value || value == ""; 
    }
    
}