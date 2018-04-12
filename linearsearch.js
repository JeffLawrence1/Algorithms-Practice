function linearSearch(x, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == x) {
            return i;
        }

    }
    return false;
}
console.log(linearSearch(4, [1, 3, 5, 6, 7, 4, 5]));
console.log(linearSearch(3, [1, 3, 5, 6, 7, 4, 5]));
console.log(linearSearch(11, [1, 3, 5, 6, 7, 4, 5]));