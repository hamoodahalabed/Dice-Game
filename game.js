let random1 = 0;
let random2 = 0;

let mybtn = document.getElementById("myButton");

mybtn.onclick = function () {
  random1 = Math.floor(Math.random() * 6 + 1);
  random2 = Math.floor(Math.random() * 6 + 1);

  document.getElementById("img1").src = `images/dice${random1}.png`;
  document.getElementById("img2").src = `images/dice${random2}.png`;

  if (random1 > random2)
    document.getElementsByClassName(
      "who-win"
    )[0].textContent = `Player ${1} Win 🎉🎉.`;

  if (random1 < random2)
    document.getElementsByClassName(
      "who-win"
    )[0].textContent = `Player ${2} Win 🎉🎉.`;

  if (random1 === random2)
    document.getElementsByClassName("who-win")[0].textContent = `Drow 🙂.`;
};
