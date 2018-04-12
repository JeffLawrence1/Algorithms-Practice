var bigo = [5, 4, 3, 2, 1];
var bigomega = [1, 2, 3, 4, 5];

var insertionSort = function(arr) {
    for (let i = 1; i < arr.length; i++) {
        console.log("Start of Big Iteration #", i);
        console.log(arr);
        var element = arr[i];
        var j = i;
        while (j > 0 && arr[j - 1] > element) {
            console.log("========small iteration #", i);
            arr[j] = arr[j - 1];
            j = j - 1;
            arr[j] = element
        }
        console.log("End of big Iteration # " + i);
        console.log(arr);
        console.log("\n\n\n");
    }

    return arr;
}
console.log("Worst case scenario");
console.log(insertionSort(bigo));
console.log("\n\n");
console.log("Best case scenario");
console.log(insertionSort(bigomega));