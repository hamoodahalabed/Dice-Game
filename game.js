let random1 = 0;
let random2 = 0;

let player1Con = 0;
let player2Con = 0;

let mybtn = document.getElementById("myButton");

mybtn.onclick = function () {
  random1 = Math.floor(Math.random() * 6 + 1);
  random2 = Math.floor(Math.random() * 6 + 1);

  document.getElementById("img1").src = `images/dice${random1}.png`;
  document.getElementById("img2").src = `images/dice${random2}.png`;

  if (random1 > random2) {
    document.getElementsByClassName(
      "who-win"
    )[0].textContent = `Player ${1} Win 🎉🎉.`;
    player1Con++;
  }
  if (random1 < random2) {
    document.getElementsByClassName(
      "who-win"
    )[0].textContent = `Player ${2} Win 🎉🎉.`;
    player2Con++;
  }
  if (random1 === random2)
    document.getElementsByClassName("who-win")[0].textContent = `Drow 🙂.`;

  document.getElementById(
    "result"
  ).textContent = `result ➡  player one = ${player1Con} ✖ player two = ${player2Con}`;
};
