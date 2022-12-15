const newPlayer = (type) => {
  const player = type;

  function makeMove(board, coords = null) {
    if (coords === null) {
      // computer player
      let cont = false;
      while (cont === false) {
        const val1 = Math.floor(Math.random() * 10);
        const val2 = Math.floor(Math.random() * 10);
        if (board.viewBoardAt(val1, val2) === 0) {
          board.receiveAttack(val1, val2);
          cont = true;
          return { val1, val2 };
        }
      }
    } else {
      board.receiveAttack(coords[1], coords[0]);
    }
  }

  return { makeMove };
};

export default newPlayer;
