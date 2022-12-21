import "./style.css";
import pageInit from "./pageStyle";
import gameFlow from "./gameLoop";

/*
const sayHelloLinting = (fName) => {
  console.log(`Hello linting, ${fName}`);
};

console.log("test");
const hello = document.createElement("p");
hello.innerText = "yoooo";
hello.classList.add("test");
document.body.appendChild(hello);
*/

pageInit();
gameFlow();
