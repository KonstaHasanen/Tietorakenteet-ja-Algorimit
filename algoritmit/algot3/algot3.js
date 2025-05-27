function findMostFreqBrute(arr) {
  let maxCount = 0; // Suurin samojen alkioiden lukumäärä
  let mostFreq = null; // Useimmin esiintyvän alkion arvo

  for (let i = 0; i < arr.length; i++) {
    let currentCount = 0; // Löydetty samojen alkioiden lukumäärä

    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        currentCount++;
      }
    }

    if (currentCount > maxCount) {
      maxCount = currentCount;
      mostFreq = arr[i];
    }
  }

  return mostFreq;
}

function createNumArr(n) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(Math.floor(Math.random() * 9) + 1); // Satunnaisluku väliltä 1-9
  }
  return arr;
}

// Testataan algoritmia
const smallArray = createNumArr(100);
console.time('Brute Force (100 elements)');
console.log('Useimmin esiintyvä alkio (100):', findMostFreqBrute(smallArray));
console.timeEnd('Brute Force (100 elements)');

const largeArray = createNumArr(100000);
console.time('Brute Force (100000 elements)');
console.log(
  'Useimmin esiintyvä alkio (100000):',
  findMostFreqBrute(largeArray)
);
console.timeEnd('Brute Force (100000 elements)');

// Aikavaativuus: O(n^2), koska jokainen alkio verrataan jokaiseen muuhun alkioon kahden sisäkkäisen silmukan avulla.
module.exports = { findMostFreqBrute, createNumArr };
