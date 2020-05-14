
var checkPerfectNumber = function (number) {
    if (number === 0) return false;

    let sum = 0;

    for (let i = 0; i < number; i += 1) {
        if (number % i === 0) {
            sum += i;
        }
    }

    return sum === number;
};

console.log(checkPerfectNumber(496));
