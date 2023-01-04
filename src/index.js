module.exports = function reverse(n) {
    if (n = 0) {
        return 0;
    }

    const nToString = toString(n);
    const nLenght = nToString.length;

    if (nLenght === 1) {
        return n;
    }

    const firstDigit = nToString[0]
    let nNew ="";
    for (let i = nLenght-1; i > 0; n--) {
    nNew +=  nToString [i];
    }
    nNew += firstDigit;
    return parseInt(nNew);
}
