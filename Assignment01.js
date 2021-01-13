"use strict"

let originalData = prompt('Enter data(separated by single space): ').split(' ');
for(let i=0; i<originalData.length; i++) {
    originalData[i] = parseInt(originalData[i]);
}

console.log("UP: " + upFunction(originalData));
console.log("DOWN: " + downFunction(originalData));
console.log("MAX: " + maxFunction(originalData));
console.log("MIN: " + minFunction(originalData));
console.log("SUM: " + sumFunction(originalData));
console.log("MEDIAN: " + medianFunction(originalData));
console.log("MEAN: " + meanFunction(originalData));
console.log("STDEV: " + stdevFunction(originalData));



function upFunction(data) {
    // to arrange in asec order
    let upData = data.sort(function(a,b) {
        return a-b;
    });
    return upData;
}

function downFunction(data) {
    // to arrange in desc order
    let downData = data.sort(function(a,b) {
        return b-a;
    });
    return downData;
}

function maxFunction(data) {
    // to calc max of given elements
    return (downFunction(data)[0]);
}

function minFunction(data) {
    // to calc max of given elements
    return (upFunction(data)[0]);
}

function sumFunction(data) {
    // sum of all no's
    let sum = 0;
    for(let i=0; i<data.length; i++) {
        sum += data[i];
    }
    return sum;
}

function medianFunction(data) {
    // to calc median : if odd return mid else sum of 2 mid
    data = upFunction(data);
    let indexHalf = Math.floor(data.length/2);
    if(data.length%2) {
        return data[indexHalf];
    } else {
        return (data[indexHalf-1] + data[indexHalf])/2;
    }
}

function meanFunction(data) {
    // mean = sum/N
    return ((sumFunction(data)/data.length).toFixed(3));
}

function stdevFunction(data) {

    let mean = meanFunction(data);
    let deviation = 0;
    for(let i=0; i<data.length; i++) {
        deviation += Math.pow((data[i]-mean),2);
    }
    return (Math.sqrt(deviation/data.length).toFixed(3));
}
