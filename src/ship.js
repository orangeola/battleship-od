const newShip = (l) => {
  const length = l;
  let hits = 0;
  let sunk = false;

  function isSunk() {
    if (hits === length) {
      sunk = true;
      alert("sunk");
    }
    return sunk;
  }

  function hit() {
    hits += 1;
    isSunk();
    return hits;
  }

  function stats() {
    return { length, hits, sunk };
  }

  return { stats, newShip, hit, isSunk };
};

export default newShip;
