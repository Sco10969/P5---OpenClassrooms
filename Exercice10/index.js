//votre code ici

export default printNumbers

function printNumbers(n) {
    let result = "";
    for (let i = 1; i <= n; i++) {
        result += i;
        if (i < n) {
            result += " ";
        }
    }
    return result;
}