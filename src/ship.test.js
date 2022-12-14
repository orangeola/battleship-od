import newShip from "./ship";

test("obj created with correct values", () => {
  expect(newShip(1).stats()).toEqual({ length: 1, hits: 0, sunk: false });
});

test("two hits working ok", () => {
  const test = newShip(1);
  test.hit();
  expect(test.hit()).toEqual(2);
});

test("sunk working ok", () => {
  const test = newShip(1);
  test.hit();
  expect(test.isSunk()).toEqual(true);
});
