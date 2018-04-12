// print 1-255

for (let i = 1; i < 256; i++) {
    console.log(i);
}

// print odd 1-1000

for (let i = 1; i < 1001; i++) {
    if (i % 2 === 1) {
        console.log(i);
    }
}

// or
for (let i = 1; i <= 1000; i = i + 2) {
    console.log(i);
}

// print sum of all odd numbers 1-5000
var sum = 0;
for (let i = 1; i <= 5000; i++) {

    if (i % 2 === 1) {

        sum = sum + i;
    }
}
console.log(sum);

// or
var sum = 0;
for (let i = 1; i <= 5000; i += 2) {
    sum += i;
}
console.log(sum);

// iterate through the array
var x = [1, 3, 5, 7, 9, 13];
for (let i = 0; i < x.length; i++) {
    console.log(x[i]);
}

// find max in array
var y = [-3, 3, 5, 7, 9, 14];
var max = y[0];
for (let i = 0; i < y.length; i++) {
    if (max < y[i]) {
        max = y[i]
    }
}
console.log(max);

// find average of values in an array

var z = [1, 3, 5, 7, 20, 4, 5];
var sum = 0;
for (let i = 0; i < z.length; i++) {
    sum += z[i];
}
console.log(sum / z.length);

// array of odd numbers 1-255

var arr1 = [];
for (let i = 1; i < 256; i += 2) {
    arr1.push(i);
}
console.log(arr1);

// number of values greater than Y in an array

var arr2 = [1, 3, 5, 7, -1, 2, 6, 19];
var count = 0;
var y = 3;
for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] > y) {
        count += 1;
    }
}
console.log(count);

// square the values of the array

var arr3 = [2, 4, 5, 6, 7, 3, 5];
for (let i = 0; i < arr3.length; i++) {
    arr3[i] = arr3[i] * arr3[i];
}
console.log(arr3);

// eliminate negative numbers and replaces them with 0

var arr4 = [-1, 2, 4, -5, 6, -9];
for (let i = 0; i < arr4.length; i++) {
    if (arr4[i] < 0) {
        arr4[i] = 0;
    }
}
console.log(arr4);

// max, min, avg of an array

var arr5 = [4, 5, 6, 7, 8, 9, 11, 23, -3];
var max1 = arr5[0];
var min1 = arr5[0];
var sum1 = 0;
for (let i = 0; i < arr5.length; i++) {
    if (max1 < arr5[i]) {
        max1 = arr5[i];
    }
    if (min1 > arr5[i]) {
        min1 = arr5[i];
    }
    sum1 += arr5[i];
}
console.log(max1, min1, sum1 / arr5.length);

// shift the values in an array one to the front

var arr6 = [2, 4, 5, 6, 7, 8, -10];
for (let i = 0; i < arr6.length - 1; i++) {
    arr6[i] = arr6[i + 1];
}
arr6[arr6.length - 1] = 0;
console.log(arr6);

// replace negative numbers with the string Dojo

var arr7 = [-1, -5, 5, 6, -7, 8, 9, -15];
for (let i = 0; i < arr7.length; i++) {
    if (arr7[i] < 0) {
        arr7[i] = "Dojo";
    }
}
console.log(arr7);

// create an array filled with 10 random values between 1-100

var arr8 = [];
var i = 0;
while (i < 10) {
    var rand = Math.floor(Math.random() * 101);
    arr8.push(rand);
    i++;
}
console.log(arr8);

// swap the first and last values of an array

var arr9 = [1, 3, 4, 5, 6, 7];
var temp = arr9[0];
arr9[0] = arr9[arr9.length - 1];
arr9[arr9.length - 1] = temp;
console.log(arr9);

// reverse the values in an array

var arr10 = [-3, 5, 1, 3, 2, 10];
for (let i = 0; i < arr10.length / 2; i++) {
    var temp = arr10[i];
    arr10[i] = arr10[arr10.length - 1 - i];
    arr10[arr10.length - 1 - i] = temp;
}
console.log(arr10);

// insert x at y
var arr11 = [3, 4, 5, 6, 7, 8];
var x = 10;
var y = 2;
arr11.push(0);
for (let i = arr11.length - 1; i > y; i--) {
    arr11[i] = arr11[i - 1];
}
arr11[y] = x;
console.log(arr11);

// remove negatives from array


function noNeg(arr) {
    var neg = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            neg++;
        } else {
            arr[i - neg] = arr[i];
        }
    }
    while (neg--) {
        arr.pop();
    }
    return arr;
}
console.log(noNeg([-2, 3, 4, -5, 6, 7, -6]));