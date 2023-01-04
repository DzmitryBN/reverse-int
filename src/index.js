module.exports = function reverse(n) {
    if (n === 0) {
        return 0;
    }

    let nToString = String(n);
    let nLenght = nToString.length;
    let firstDigit = nToString[0]
    const secondDigit=nToString[1]
    const isNegative=firstDigit==='-'

    if (isNegative){
        nToString=nToString.slice(1)
        firstDigit = nToString[0]
        nLenght--;
    }

    let nNew ="";
    for (let i = nLenght-1; i > 0; i--) {
    nNew +=  nToString [i];
    }
    nNew += firstDigit;
    return parseInt(nNew);
}
