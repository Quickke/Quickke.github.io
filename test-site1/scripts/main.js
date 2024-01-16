let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/OIP-C.jpg") {
    myImage.setAttribute("src", "images/R-C.jpg");
  } else {
    myImage.setAttribute("src", "images/OIP-C.jpg");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    let myName = prompt("请输入你的名字。");
    if (!myName) {
        setUserName();
      } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = "安赛龙的下一个对手：" + myName;
      }
  }
if (!localStorage.getItem("name")) {
setUserName();
} else {
let storedName = localStorage.getItem("name");
myHeading.textContent = "安赛龙的下一个对手：" + storedName;
}
myButton.onclick = function () {
    setUserName();
  };
