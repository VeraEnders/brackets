module.exports = function check(str, bracketsConfig) {
    let brackets = '';
  
    for (let i = 0; i < bracketsConfig.length; i++) {
        brackets += bracketsConfig[i][0];
        brackets += bracketsConfig[i][1];
    }
  
    let arr = [];
    for (let a of str) {
        let index = brackets.indexOf(a);
        if (index % 2 === 0) {
            if (brackets[index] === brackets[index + 1] && index + 1 === arr[arr.length - 1]) {
                arr.pop();
            } else {
                arr.push(index + 1);
            }                      
        } else {
            if (arr.pop() !== index) {
                return false;
            }
        }
    }
    return arr.length === 0;
}