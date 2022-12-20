import newGameboard from "./gameboard";
import newPlayer from "./player";
import newShip from "./ship";

const gameFlow = () => {
  // 1 is the human, 2 is computer
  const currentTurn = 1;

  // init players and board (premade)
  const player = newPlayer();
  const computer = newPlayer();
  const playerBoard = newGameboard();
  playerBoard.addShip(newShip(5), [0, 0], "right");
  playerBoard.addShip(newShip(4), [3, 2], "down");
  playerBoard.addShip(newShip(3), [6, 0], "down");
  playerBoard.addShip(newShip(3), [9, 6], "right");
  playerBoard.addShip(newShip(2), [5, 9], "down");
  const botBoard = newGameboard();
  botBoard.addShip(newShip(5), [0, 0], "right");
  botBoard.addShip(newShip(4), [3, 2], "down");
  botBoard.addShip(newShip(3), [6, 0], "down");
  botBoard.addShip(newShip(3), [9, 6], "right");
  botBoard.addShip(newShip(2), [5, 9], "down");

  // all squares of each board to need have eventlisteners added
  // for a click to correspond to their coordinates
  // every square click actaives player.makeMove()
  // then run gameEnd on the board attacked to check
  // once done, set currentTurn to 2, call computer.makeMove()
  // then run gameEnd
  // and repeat
};

export default gameFlow;
