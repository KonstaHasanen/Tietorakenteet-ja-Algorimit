class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

function reverseString(str) {
  const stack = new Stack();

  // Lisää merkit pinoon
  for (const char of str) {
    stack.push(char);
  }

  // Kerää merkit pinosta käännettyyn merkkijonoon
  let reversed = '';
  while (!stack.isEmpty()) {
    reversed += stack.pop();
  }

  return reversed;
}

function isPalindrome(str) {
  // Poistetaan välilyönnit ja muutetaan pieniksi kirjaimiksi
  const cleanedStr = str.replace(/\s+/g, '').toLowerCase();
  const reversedStr = reverseString(cleanedStr);

  return cleanedStr === reversedStr;
}

// Testataan funktiot
console.log(reverseString('myymälä')); // Tulostaa: 'älämyym'
console.log(isPalindrome('testi')); // Tulostaa: false

module.exports = { reverseString, isPalindrome };
