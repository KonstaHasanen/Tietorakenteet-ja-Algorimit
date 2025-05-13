const coderA = new Set(['JS', 'PHP', 'C#', 'Python']);
const coderB = new Set(['JS', 'Java', 'C++', 'Python']);
const coderC = new Set(['JS', 'Java', 'Perl', 'Ruby']);

const coders = [coderA, coderB, coderC];

function union(coders) {
  const unionSet = new Set();
  coders.forEach((setti) => {
    for (const elem of setti) {
      unionSet.add(elem);
    }
  });
  return unionSet;
}

function haveCodeSkill(coders, language) {
  if (union(coders).has(language)) {
    return true;
  } else {
    console.log('Skill of Go is false');
  }
}
console.log(haveCodeSkill(coders, 'Go'));

module.exports = { union, haveCodeSkill };
