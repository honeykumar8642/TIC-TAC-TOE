let newGameBtn = document.querySelector(".new-game");
let resetBtn = document.querySelector("#reset-btn");
let box = document.querySelectorAll("#box");
let winnermsg = document.querySelector(".win-msg");
let winnerMsgContainer = document.querySelector(".winning-section");
let turnO = true;

let winningPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const checkDraw = () => {
  let allFilled = true;
  for (let eachbox of box) {
    if (eachbox.innerText === "") {
      allFilled = false;
      break;
    }
  }

  if (allFilled) {
    winnermsg.innerText = "Oops!😔 Better Luck Next Time";
    winnerMsgContainer.classList.remove("hide");
    disabledBoxes();
  }
};

const Resetbtn = () => {
  turnO = true;
  enableBoxes();
  winnerMsgContainer.classList.add("hide");
};

box.forEach((eachbox) => {
  eachbox.addEventListener("click", () => {
    if (turnO) {
      eachbox.innerText = "O";
      turnO = false;
    } else {
      eachbox.innerText = "X";
      turnO = true;
    }

    eachbox.disabled = true;

    checkWinner();
  });
});

const disabledBoxes = () => {
  for (let eachbox of box) {
    eachbox.disabled = true;
  }
};

const enableBoxes = () => {
  for (let eachbox of box) {
    eachbox.disabled = false;
    eachbox.innerText = "";
  }
};

const showWinner = (winner) => {
  winnermsg.innerText = `🎉Congratulation🎉 Winner is  ${winner}`;
  winnerMsgContainer.classList.remove("hide");
  disabledBoxes();
};

const checkWinner = () => {
  for (let pattern of winningPatterns) {
    let pos1val = box[pattern[0]].innerText;
    let pos2val = box[pattern[1]].innerText;
    let pos3val = box[pattern[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        showWinner(pos1val);

        return;
      }
    }
  }

  checkDraw();
};

newGameBtn.addEventListener("click", Resetbtn);
resetBtn.addEventListener("click", Resetbtn);
