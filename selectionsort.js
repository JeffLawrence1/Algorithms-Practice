var bigo = [5, 4, 3, 2, 1];
var bigomega = [1, 2, 3, 4, 5];

var selectionSort = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        var minIndex = i;
        for (let j = i; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex != i) {
            swap(arr, i, minIndex);
        }
    }
    return arr;
}
var swap = function(arr, indexOne, indexTwo) {
    var temp = arr[indexOne];
    arr[indexOne] = arr[indexTwo];
    arr[indexTwo] = temp;
}
console.log(selectionSort(bigo));
console.log(selectionSort(bigomega));