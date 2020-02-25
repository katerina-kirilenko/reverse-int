module.exports = function reverse (n) {
    
let str = String(n);
let newStr = "";

    if (n >= 0) {
        for (let i = str.length - 1; i >= 0; i--) {
            newStr += str[i];
        }
    } else {
        for (let i = str.length - 1; i > 0; i--) {
            newStr += str[i];
        }        
    }

    return newStr;

}
