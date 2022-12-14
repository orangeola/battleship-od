import "./style.css";

const sayHelloLinting = (fName) => {
  console.log(`Hello linting, ${fName}`);
};

console.log("test");
const hello = document.createElement("p");
hello.innerText = "yoooo";
hello.classList.add("test");
document.body.appendChild(hello);
