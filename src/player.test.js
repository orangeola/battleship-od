import newPlayer from "./player";
import newGameboard from "./gameboard";

test("test", () => {
  const compPlayer = newPlayer();
  const testboard = newGameboard();
  const genPos = compPlayer.makeMove(testboard);
  expect(testboard.viewBoardAt(genPos.val1, genPos.val2)).toBe(1);
});
