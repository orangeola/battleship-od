const newGameboard = () => {
  const board = Array.from(Array(10), (_) => Array(10).fill(0));
  const allShips = [];

  function viewBoardAt(x, y) {
    return board[x][y];
  }

  function addShip(ship, coords, direction) {
    allShips.push(ship);
    board[coords[1]][coords[0]] = allShips[allShips.length - 1];

    for (let i = 1; i < ship.stats().length; i++) {
      if (direction === "down") {
        board[i][coords[0]] = board[coords[1]][coords[0]];
      } else if (direction === "right") {
        board[coords[1]][i] = board[coords[1]][coords[0]];
      }
    }
  }

  function receiveAttack(x, y) {
    if (typeof board[x][y] === "number") {
      board[x][y] = 1;
    } else {
      board[x][y].hit();
    }
  }

  function gameEnd() {
    for (let i = 0; i < allShips.length; i++) {
      if (allShips[i].stats().sunk === false) {
        return false;
      }
    }
    return true;
  }

  return { viewBoardAt, addShip, receiveAttack, gameEnd };
};

export default newGameboard;
