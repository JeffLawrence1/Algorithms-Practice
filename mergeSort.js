var mergeSort = function(left, right) {
    var i = 0;
    var j = 0;
    var results = [];

    while (i < left.length || j < right.length) {
        if (i === left.length) {
            results.push(right[j]);
            j++;
        } else if (j === right.length || left[i] <= right[j]) {
            results.push(left[i]);
            i++;
        } else {
            results.push(right[j]);
            j++;
        }
    }
    return results;
}

console.log(mergeSort([1, 3, 5, 6, 77], [4, 6, 33, 55]));