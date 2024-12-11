const firstPass = document.getElementById("pass-one");
const secondPass = document.getElementById("pass-two");
const generateBtn = document.getElementById("generate-btn");

generateBtn.addEventListener("click", function () {
  firstPass.textContent = generateRandomPassword();
  secondPass.textContent = generateRandomPassword();
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