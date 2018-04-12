// Write a function rBS that behaves like the following:

var arr = [-90, -19, 0, 2, 12, 29, 33, 190, 320];
// rBS(arr, 5)              => false
// rBS(arr, 12)             => 4
// rBS(arr, 0)              => 2
// rBS(arr, 190)            => 7
// rBS takes in an array and a value to search for. If the value is found within the array then rBS will return the index where the found value is. If the value is not found within the array then rBS returns false. Make sure your solution is recursive. Does your function need to have optional additional parameters? After that first initial call, successive recursive calls to itself might need these. 

function getMid(arr, num) {
    var length = arr.length;
    var mid = Math.floor(length / 2);
    var newArr = arr;
    console.log(arr);
    console.log("array midpoint value: " + arr[mid]);

    if (arr[mid] > num) {
        var newArr = arr.slice(0, mid);
        return getMid(newArr, num);
    } else if (arr[mid] < num) {
        var newArr = arr.slice(mid + 1, arr.length);
        return getMid(newArr, num);
    } else {
        return mid;
    }
}
console.log(getMid(arr, 29));