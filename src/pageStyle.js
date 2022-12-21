function pageInit() {
  const header = document.createElement("div");
  header.setAttribute("id", "header");
  header.innerText = "Battleship";

  const main = document.createElement("div");
  main.setAttribute("id", "main");

  const board1 = document.createElement("div");
  board1.setAttribute("class", "board");
  const board2 = document.createElement("div");
  board2.setAttribute("class", "board");

  for (let i = 0; i < 100; i++) {
    const temp = document.createElement("div");
    temp.setAttribute("class", "node");
    const temp2 = document.createElement("div");
    temp2.setAttribute("class", "node");

    board1.appendChild(temp);
    board2.appendChild(temp2);
  }

  document.body.appendChild(header);
  main.appendChild(board1);
  main.appendChild(board2);
  document.body.appendChild(main);
  // only needs two divs in body
  // body might as well be flex
  // header
  // body
}

export default pageInit;
