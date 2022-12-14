const newShip = (l) => {
  const length = l;
  let hits = 0;
  let sunk = false;

  function hit() {
    hits += 1;
    return hits;
  }

  function isSunk() {
    if (hits === length) {
      sunk = true;
    }
    return sunk;
  }

  function stats() {
    return { length, hits, sunk };
  }

  return { stats, newShip, hit, isSunk };
};

export default newShip;
