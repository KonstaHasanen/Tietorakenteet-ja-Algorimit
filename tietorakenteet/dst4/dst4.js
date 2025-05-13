class MySet {
  constructor(arr) {
    // Jos arr on taulukko, suodatetaan uniikit arvot, muuten tyhjä taulukko
    let uniqueArr = [];
    if (Array.isArray(arr)) {
      uniqueArr = this.checkUnique(arr);
    }
    this.arr = uniqueArr;
    this.size = uniqueArr.length;
  }

  // Palauttaa taulukon ilman duplikaatteja
  checkUnique(arr) {
    const uniqueArr = [];
    for (const item of arr) {
      if (!uniqueArr.includes(item)) {
        uniqueArr.push(item);
      }
    }
    return uniqueArr;
  }

  // Lisää alkion, jos sitä ei vielä ole
  add(data) {
    if (!this.arr.includes(data)) {
      this.arr.push(data);
      this.size = this.arr.length;
      return true;
    }
    return false;
  }

  // Poistaa alkion, jos löytyy
  remove(data) {
    const idx = this.arr.indexOf(data);
    if (idx !== -1) {
      this.arr.splice(idx, 1);
      this.size = this.arr.length;
      return true;
    }
    return false;
  }

  // Tarkistaa, sisältyykö data settiin
  has(data) {
    return this.arr.includes(data);
  }

  // Yhdistää setA:n ja muut setit, palauttaa uuden MySet-instanssin
  union(setA, ...sets) {
    const resultArr = [...setA.arr];
    for (const s of sets) {
      for (const item of s.arr) {
        if (!resultArr.includes(item)) {
          resultArr.push(item);
        }
      }
    }
    return new MySet(resultArr);
  }
}

module.exports = MySet;
