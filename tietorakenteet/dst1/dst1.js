//Uusi arvo taulukkoon
function setScore(scores, newscore) {
  scores.push(newscore);
}
//Kaikki tulokstet taulukosta
function getScores(scores) {
  return scores;
}
//Taulukon viimeisin tulos
function latest(scores) {
  return scores[scores.length - 1];
}
//Palauttaa taulukon korkeimman arvon
function highest(scores) {
  return Math.max(...scores);
}
//Kolme parasta tulosta
function topThree(scores) {
  const scoresCopy = [...scores];
  scoresCopy.sort(function (a, b) {
    return b - a;
  });
  const newArray = scoresCopy;
  console.log(newArray);

  return newArray.slice(0, 3);
}

module.exports = { setScore, getScores, latest, highest, topThree };

const scores = [22, 10, 34, 24, 43];

setScore(scores, 42);

console.log('Alkuperäinen:', getScores(scores));
console.log('Uusin tulos:', latest(scores));
console.log('Paras tulos:', highest(scores));
console.log('Kolme parasta:', topThree(scores));
