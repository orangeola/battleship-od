import newGameboard from "./gameboard";
import newShip from "./ship";

test("board created ok", () => {
  expect(newGameboard().viewBoardAt(0, 0)).toEqual(0);
});

test("add ship to board", () => {
  const testShip = newShip(5);
  const testBoard = newGameboard();
  testBoard.addShip(testShip, [0, 0], "down");
  expect(testBoard.viewBoardAt(0, 0)).toEqual(testShip);
  expect(testBoard.viewBoardAt(1, 0)).toEqual(testShip);
  expect(testBoard.viewBoardAt(2, 0)).toEqual(testShip);
});

test("hit ship on the board", () => {
  const testShip = newShip(3);
  const testBoard = newGameboard();
  testBoard.addShip(testShip, [0, 0], "right");
  testBoard.receiveAttack(0, 0);
  testBoard.receiveAttack(0, 2);
  expect(testBoard.viewBoardAt(0, 0).stats().hits).toEqual(2);
  expect(testBoard.viewBoardAt(0, 1).stats().hits).toEqual(2);
  expect(testBoard.viewBoardAt(0, 2).stats().hits).toEqual(2);
});

test("game end check works", () => {
  const testShip = newShip(1);
  const testBoard = newGameboard();
  testBoard.addShip(testShip, [0, 0], "south");
  testBoard.receiveAttack(0, 0);
  testShip.isSunk();
  expect(testBoard.gameEnd()).toEqual(true);
});
