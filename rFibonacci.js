// Assignment: rFibonacci
// Write a function iFibonacci that behaves like the following:

// rFibonacci(0) = 0           => 0
// rFibonacci(1) = 1           => 1
// rFibonacci(2) = 1           => 1
// rFibonacci(3) = 1 + 1       => 2
// rFibonacci(4) = 1 + 2       => 3
// rFibonacci(5) = 2 + 3       => 5
// rFibonacci(6) = 3 + 5       => 8
// Or I guess it can be written this way too...

// rFibonacci(0) = 0                                  => 0
// rFibonacci(1) = 1                                  => 1
// rFibonacci(2) = rFibonacci(0) + rFibonacci(1)      => 1
// rFibonacci(3) = rFibonacci(1) + rFibonacci(2)      => 2
// rFibonacci(4) = rFibonacci(2) + rFibonacci(3)      => 3
// rFibonacci(5) = rFibonacci(3) + rFibonacci(4)      => 5
// rFibonacci(6) = rFibonacci(4) + rFibonacci(5)      => 8

function rFibonacci(num) {
    if (num === 1 || num === 2) {
        return 1;
    } else {
        return rFibonacci(num - 1) + rFibonacci(num - 2);
    }
}
console.log(rFibonacci(6));