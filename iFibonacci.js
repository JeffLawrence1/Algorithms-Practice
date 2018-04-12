// Assignment: iFibonacci
// Write a function iFibonacci that behaves like the following:

// iFibonacci(0) = 0           => 0
// iFibonacci(1) = 1           => 1
// iFibonacci(2) = 1           => 1
// iFibonacci(3) = 1 + 1       => 2
// iFibonacci(4) = 1 + 2       => 3
// iFibonacci(5) = 2 + 3       => 5
// iFibonacci(6) = 3 + 5       => 8

function iFibonacci(num) {
    var arr = [0, 1];

    for (let i = 0; i < num; i++) {
        arr.push(arr[0] + arr[1]);
        arr.shift();
    }
    return arr[0];
}
console.log(iFibonacci(5));
console.log(iFibonacci(6));