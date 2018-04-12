// Assignment: iBS
// Write a function iBS that behaves like the following:

var arr = [-90, -19, 0, 2, 12, 29, 33, 190, 320];
// iBS(arr, 5)              => false
// iBS(arr, 12)             => 4
// iBS(arr, 0)              => 2
// iBS(arr, 190)            => 7
// iBS takes in an array and a value to search for. If the value is found in the array then iBS will return the index where the found value is. If the value is not found in the array then iBS returns false. Make sure your solution is iterative.

function iBS(arr, num) {
    var start = 0;
    var end = arr.length - 1;

    var mid;

    while (start <= end) {
        if (start === end) {
            mid = start;
        } else {
            mid = Math.floor((end - start) / 2) + start;
        }
        if (arr[mid] === num) {
            return mid;
        }
        if (num < arr[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return false;
}
console.log(iBS(arr, 5));
console.log(iBS(arr, 12));
console.log(iBS(arr, 0));