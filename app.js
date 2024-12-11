const firstPass = document.getElementById("pass-one");
const secondPass = document.getElementById("pass-two");
const generateBtn = document.getElementById("generate-btn");

generateBtn.addEventListener("click", function () {
  firstPass.textContent = generateRandomPassword();
  secondPass.textContent = generateRandomPassword();
  if (firstPass.style.color == "magenta" || firstPass.style.color == "white") {
    firstPass.style.color = "lightgreen";
  } else {
    firstPass.style.color = "magenta";
  }
  if (
    secondPass.style.color == "lightgreen" ||
    secondPass.style.color == "white"
  ) {
    secondPass.style.color = "magenta";
  } else {
    secondPass.style.color = "lightgreen";
  }
});

function generateRandomPassword() {
  let dummyPass = "";
  for (let i = 0; i < 9; i++) {
    let dummyData = Math.floor(Math.random() * 126);
    while (dummyData <= 32) {
      dummyData = Math.floor(Math.random() * 126);
    }
    dummyPass += String.fromCharCode(dummyData);
  }
  return dummyPass;
}

console.log(generateRandomPassword());
