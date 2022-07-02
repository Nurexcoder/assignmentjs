const prompt = require("prompt-sync")();

const inp=prompt('Enter the array space seperated: ')

const strArr=inp.split(' ')
const arr=strArr.map((item) => parseInt(item));

counts = {};
arr.sort();
console.log(arr);
for (const num of arr) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
}
const mostFreq = {
    key: null,
    freq: 0,
};
const leastFreq = {
    key: null,
    freq: arr.length,
};
console.log(counts)
for (var key in counts) {
    if (counts[key] > mostFreq.freq || !mostFreq.key) {
        mostFreq.key = parseInt(key);
        mostFreq.freq = counts[key];
    }
    if (counts[key] < leastFreq.freq ) {
        leastFreq.key = parseInt(key);
        leastFreq.freq = counts[key];
    }
}

console.log([mostFreq.key,leastFreq.key]);
