const xkauppamap = new Map([
  ['nimi', 'xkauppa'],
  ['lumilapio', 10],
  ['potkukelkka', 20],
  ['karvalakki', 5],
]);
const ykauppamap = new Map([
  ['nimi', 'ykauppa'],
  ['lumilapio', 5],
  ['potkukelkka', 20],
  ['karvalakki', 1],
]);
const zkauppamap = new Map([
  ['nimi', 'zkauppa'],
  ['lumilapio', 10],
  ['potkukelkka', 25],
  ['karvalakki', 15],
]);

function sum(shop) {
  let sum = 0;
  for (const value of shop.values()) {
    if (typeof value === 'number') {
      sum += value;
    }
  }
  return sum;
}

function createSumMap(key, ...shops) {
  const summap = new Map();
  shops.forEach((joo) => {
    summap.set(joo.get(key), sum(joo));
  });

  return summap;
}

function minValueMap(mapX) {
  const joomap = new Map();
  let minvalue = Number.MAX_VALUE;
  let minvaluekey = '';

  mapX.forEach((value, key) => {
    if (typeof value === 'number' && value < minvalue) {
      minvalue = value;
      minvaluekey = key;
    }
  });
  joomap.set(minvaluekey, minvalue);
  return joomap;
}

const kaupat = createSumMap('nimi', xkauppamap, ykauppamap, zkauppamap);
console.log(minValueMap(kaupat));

module.exports = { sum, createSumMap, minValueMap };
