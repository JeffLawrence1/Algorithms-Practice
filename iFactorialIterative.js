// Assignment: iFactorial
// Write a function iFactorial that behaves like the following:

// iFactorial(1) = 1                  => 1
// iFactorial(2) = 2 * 1              => 2
// iFactorial(3) = 3 * 2 * 1          => 6
// iFactorial(4) = 4 * 3 * 2 * 1      => 24
// iFactorial(5) = 5 * 4 * 3 * 2 * 1  => 120

function iFactorial(num) {
    var sum = 1;
    while (num > 0) {
        sum *= num;
        num--;
    }
    console.log(sum);
}
iFactorial(5)

// or
function iFactorial1(num) {
    var sum = 1;
    for (let i = 1; i <= num; i++) {
        sum *= i;
    }
    return sum;
}
console.log(iFactorial1(5));