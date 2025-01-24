resultBlock.classList.toggle("hidden");
retryBtn.classList.toggle("hidden");

const buttons = [
  word1Btn,
  word2Btn,
  word3Btn,
  word4Btn,
  word5Btn,
  word6Btn,
  word7Btn,
  word8Btn,
  word9Btn,
  word10Btn,
];

let paragraph = async (
  color,
  adjective,
  place,
  adjective_2,
  place_2,
  food_S,
  food_P,
  verb,
  noun_P,
  adjective_3
) => {
  const promise = await fetch(
    `https://all4oneapirobinson-ape7ecguhqdqc9cm.westus-01.azurewebsites.net/MadLib/goMadLib/${color}/${adjective}/${place}/${adjective_2}/${place_2}/${food_S}/${food_P}/${verb}/${noun_P}/${adjective_3}`
  );
  const data = await promise.text();
  console.log(data);
  return data;
};

let valid = (field) => {
  for (let i = 0; i < field.length; i++) {
    if (field[i].value.trim() == "") {
      return false;
    }
  }
  return true;
};

let numValid = (field) => {
  for (let i = 0; i < field.length; i++) {
    if (!isNaN(field[i].value.trim())) {
      return false;
    }
  }
  return true;
};

submitBtn.addEventListener("click", async () => {
  if (!valid(buttons)) {
    warningText.classList.remove("hidden")
    warningText.innerText = "Please enter a word for each slot.";
  } else if (!numValid(buttons)) {
    warningText.classList.remove("hidden")
    warningText.innerText = "Numbers are not allowed.";
  } else {
    resultBlock.classList.toggle("hidden");
    inputBlock.classList.toggle("hidden");
    submitBtn.classList.toggle("hidden");
    retryBtn.classList.toggle("hidden");
    warningText.classList.toggle("hidden");
    resultText.innerText = await paragraph(
      word1Btn.value,
      word2Btn.value,
      word3Btn.value,
      word4Btn.value,
      word5Btn.value,
      word6Btn.value,
      word7Btn.value,
      word8Btn.value,
      word9Btn.value,
      word10Btn.value
    );
  }
});

retryBtn.addEventListener("click", async () => {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].value = "";
  }
  resultBlock.classList.toggle("hidden");
  retryBtn.classList.toggle("hidden");
  submitBtn.classList.toggle("hidden");
  inputBlock.classList.toggle("hidden");
});
