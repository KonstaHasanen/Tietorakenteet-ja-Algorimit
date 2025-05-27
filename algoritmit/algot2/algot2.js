const rl = require('readline-sync');

function collectFeedRec(str = '') {
  const char = rl.question('Anna merkki:');

  if (char === '#') {
    return str; // Lopetetaan rekursio ja palautetaan merkkijono
  } else {
    return collectFeedRec(str + char); // Lisätään merkki ja kutsutaan funktiota uudelleen
  }
}

const str = collectFeedRec();
console.log('Antamasi merkkijono oli: ' + str);

module.exports = collectFeedRec;
