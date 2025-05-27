function findMostFreq(arr) {
  const freqMap = new Map(); // Luo tyhjä Map-tietorakenne

  // Käy taulukko läpi ja täytä Map
  for (const key of arr) {
    if (!freqMap.has(key)) {
      freqMap.set(key, 1); // Lisää uusi avain-arvo -pari
    } else {
      freqMap.set(key, freqMap.get(key) + 1); // Kasvata arvoa yhdellä
    }
  }

  // Etsi suurin arvo ja sitä vastaava avain
  let maxCount = 0;
  let mostFreq = null;

  for (const [key, count] of freqMap.entries()) {
    if (count > maxCount) {
      maxCount = count;
      mostFreq = key;
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
console.time('Dynamic (100 elements)');
console.log('Useimmin esiintyvä alkio (100):', findMostFreq(smallArray));
console.timeEnd('Dynamic (100 elements)');

const largeArray = createNumArr(100000);
console.time('Dynamic (100000 elements)');
console.log('Useimmin esiintyvä alkio (100000):', findMostFreq(largeArray));
console.timeEnd('Dynamic (100000 elements)');

// Aikavaativuus: O(n), koska taulukko käydään läpi kerran ja Map-tietorakenteen operaatiot (haku, lisäys) ovat keskimäärin O(1).
module.exports = { findMostFreq, createNumArr };
