var bigo = [5, 4, 3, 2, 1];
var bigomega = [1, 2, 3, 4, 5];

var bubbleSort = function(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        console.log("Start of Big Iteration #", i);
        console.log(arr);
        //bubble up the element
        for (let j = 0; j < arr.length - 1 - i; j++) {
            console.log("========small iteration #", i);
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
        console.log("End of big Iteration # " + i);
        console.log(arr);
        console.log("\n\n\n");
    }
    return arr;
}
var swap = function(arr, indexOne, indexTwo) {
    var temp = arr[indexOne];
    arr[indexOne] = arr[indexTwo];
    arr[indexTwo] = temp;
}
console.log("Worst case scenario");
console.log(bubbleSort(bigo));
console.log("\n\n");
console.log("Best case scenario");
console.log(bubbleSort(bigomega));

var betterBubble = function(arr) {
    var count = 0;
    do {
        var swapping = false;
        console.log("Start of Big Iteration #", count);
        console.log(arr);

        //bubble up the element
        for (let i = 0; i < arr.length - 1 - count; i++) {
            console.log("=====small iteratioin #", count);
            console.log(arr);
            if (arr[i] > arr[i + 1]) {
                swap(arr, i, i + 1);
                swapping = true;
            }
        }
        console.log("End of big Iteration # " + count);
        console.log(arr);
        count++;
    } while (swapping === true)
    return arr;
}

console.log("Worst case scenario");
console.log(betterBubble(bigo));
console.log("\n\n");
console.log("Best case scenario");
console.log(betterBubble(bigomega));