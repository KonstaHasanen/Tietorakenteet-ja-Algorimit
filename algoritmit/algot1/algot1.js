const rl = require('readline-sync');

function collectFeed() {
  let str = '';

  while (true) {
    const char = rl.question('Anna merkki:');

    if (char === '#') {
      break;
    } else {
      str = str + char;
    }
  }
  return str;
}

const str = collectFeed();
console.log('Antamasi merkkijono oli: ' + str);

module.exports = collectFeed;
