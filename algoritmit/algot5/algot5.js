// Apufunktio: Kerää kaikki alimerkkijonot annetusta merkkijonosta
function getAllSubstrs(str) {
  const substrs = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      substrs.push(str.substring(i, j));
    }
  }
  return substrs;
}

// Pääfunktio: Etsi pisin yhteinen alimerkkijono brute force -menetelmällä
function findLcsBrute(s1, s2) {
  const substrs1 = getAllSubstrs(s1); // Kaikki alimerkkijonot s1:stä
  const substrs2 = getAllSubstrs(s2); // Kaikki alimerkkijonot s2:sta

  // Etsi yhteiset alimerkkijonot
  const commonSubstrs = substrs1.filter((substr) => substrs2.includes(substr));

  // Etsi pisin yhteinen alimerkkijono
  let longest = '';
  for (const substr of commonSubstrs) {
    if (substr.length > longest.length) {
      longest = substr;
    }
  }

  return longest;
}

// Apufunktio: Luo satunnainen merkkijono annetusta merkistöstä
function genString(charset, n) {
  let result = '';
  for (let i = 0; i < n; i++) {
    result += charset[Math.floor(Math.random() * charset.length)];
  }
  return result;
}

// Testataan algoritmia
const charset = 'ATGC';
const s1 = genString(charset, 4);
const s2 = genString(charset, 4);
console.log('Merkkijonot (4 merkkiä):', s1, s2);
console.time('Brute Force (4 chars)');
console.log('Pisin yhteinen alimerkkijono (4):', findLcsBrute(s1, s2));
console.timeEnd('Brute Force (4 chars)');

const s3 = genString(charset, 100);
const s4 = genString(charset, 100);
console.time('Brute Force (100 chars)');
console.log('Pisin yhteinen alimerkkijono (100):', findLcsBrute(s3, s4));
console.timeEnd('Brute Force (100 chars)');

const s5 = genString(charset, 10000);
const s6 = genString(charset, 10000);
console.time('Brute Force (10000 chars)');
console.log('Pisin yhteinen alimerkkijono (10000):', findLcsBrute(s5, s6));
console.timeEnd('Brute Force (10000 chars)');

// Aikavaativuus: O(n^3 + m^3), koska alimerkkijonojen generointi on O(n^2) ja niiden vertailu on O(n^2 * m^2).
module.exports = { findLcsBrute, getAllSubstrs, genString };
