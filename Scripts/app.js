description.style.visibility = "hidden";

const oneText = oneBtn.children[0];
const twoText = twoBtn.children[0];
const threeText = threeBtn.children[0];
const fourText = fourBtn.children[0];
const fiveText = fiveBtn.children[0];
const sixText = sixBtn.children[0];
const sevenText = sevenBtn.children[0];
const eightText = eightBtn.children[0];
const nineText = nineBtn.children[0];
const tenText = tenBtn.children[0];

const modeText = [
  oneText,
  twoText,
  threeText,
  fourText,
  fiveText,
  sixText,
  sevenText,
  eightText,
  nineText,
  tenText,
];

const modeBtns = [
  oneBtn,
  twoBtn,
  threeBtn,
  fourBtn,
  fiveBtn,
  sixBtn,
  sevenBtn,
  eightBtn,
  nineBtn,
  tenBtn,
];

oneBtn.addEventListener("click",() => {
  oneBtn.className = "bg-white rounded-xl border-2";
  oneText.className = "text-green-900 p-3";
  selectMode(oneBtn, oneText);
  displayDescription(1);
});

twoBtn.addEventListener("click",() => {
  twoBtn.className = "bg-white rounded-xl border-2";
  twoText.className = "text-green-900 p-3";
  selectMode(twoBtn, twoText);
  displayDescription(2);
});
threeBtn.addEventListener("click",() => {
  threeBtn.className = "bg-white rounded-xl border-2";
  threeText.className = "text-green-900 p-3";
  selectMode(threeBtn, threeText);
  displayDescription(3);
});
fourBtn.addEventListener("click",() => {
  fourBtn.className = "bg-white rounded-xl border-2";
  fourText.className = "text-green-900 p-3";
  selectMode(fourBtn, fourText);
  displayDescription(4);
});
fiveBtn.addEventListener("click",() => {
  fiveBtn.className = "bg-white rounded-xl border-2";
  fiveText.className = "text-green-900 p-3";
  selectMode(fiveBtn, fiveText);
  displayDescription(5);
});
sixBtn.addEventListener("click",() => {
  sixBtn.className = "bg-white rounded-xl border-2";
  sixText.className = "text-green-900 p-3";
  selectMode(sixBtn, sixText);
  displayDescription(6);
});
sevenBtn.addEventListener("click",() => {
  sevenBtn.className = "bg-white rounded-xl border-2";
  sevenText.className = "text-green-900 p-3";
  selectMode(sevenBtn, sevenText);
  displayDescription(7);
});
eightBtn.addEventListener("click",() => {
  eightBtn.className = "bg-white rounded-xl border-2";
  eightText.className = "text-green-900 p-3";
  selectMode(eightBtn, eightText);
  displayDescription(8);
});
nineBtn.addEventListener("click",() => {
  nineBtn.className = "bg-white rounded-xl border-2";
  nineText.className = "text-green-900 p-3";
  selectMode(nineBtn, nineText);
  displayDescription(9);
});
tenBtn.addEventListener("click",() => {
  tenBtn.className = "bg-white rounded-xl border-2";
  tenText.className = "text-green-900 p-3";
  selectMode(tenBtn, tenText);
  displayDescription(10);
});

let selectMode = (button, text) => {
  for (let i = 0; i < modeBtns.length; i++) {
    if (modeBtns[i] == button) {
    } else {
      modeBtns[i].className = "border-2 border-solid rounded-xl hover:bg-white";
      modeText[i].className = "p-3 hover:text-green-900";
    }
  }
}

function myFunction(x) {
  if (x.matches) { // If media query matches
    for(let i = 0; i < modeBtns.length;i++)
    {
      modeBtns[i].href = "#footerBlock"
      modeBtns[i].className = "bg-white rounded-xl border-2";
      modeText[i].className = "text-green-900 p-3";

    }
  } else {
    for(let i = 0; i < modeBtns.length;i++)
      {
        modeBtns[i].href = "#"
        modeBtns[i].className = "border-2 border-solid rounded-xl hover:bg-white";
        modeText[i].className = "p-3 hover:text-green-900";
      }
 
  }
}

var x = window.matchMedia("(max-width: 1024px)")
myFunction(x);

x.addEventListener("change", function() {
  myFunction(x);
}); 

let displayDescription = (game) => {
  description.style.visibility = "visible";
  switch (game) {
    case 1:
      descriptionText.innerText =
        "Enter a custom name and receive a warm greeting.";
      star1.className = "fa-solid fa-star fa-2xl";
      star2.className = "fa-regular fa-star fa-2xl";
      star3.className = "fa-regular fa-star fa-2xl";
      star4.className = "fa-regular fa-star fa-2xl";
      star5.className = "fa-regular fa-star fa-2xl";
      playBtn.href = "./pages/1hello.html";
      break;
    case 2:
      descriptionText.innerText =
        "Answer a couple questions and receive a custom greeting.";
      star1.className = "fa-solid fa-star fa-2xl";
      star2.className = "fa-regular fa-star fa-2xl";
      star3.className = "fa-regular fa-star fa-2xl";
      star4.className = "fa-regular fa-star fa-2xl";
      star5.className = "fa-regular fa-star fa-2xl";
      playBtn.href = "./pages/2askingqs.html";
      break;
    case 3:
      descriptionText.innerText = "Find the sum of any two numbers.";
      star1.className = "fa-solid fa-star fa-2xl";
      star2.className = "fa-solid fa-star fa-2xl";
      star3.className = "fa-regular fa-star fa-2xl";
      star4.className = "fa-regular fa-star fa-2xl";
      star5.className = "fa-regular fa-star fa-2xl";
      playBtn.href = "./pages/3addnums.html";
      break;
    case 4:
      descriptionText.innerText =
        "Enter two numbers to find out which is a greater value.";
      star1.className = "fa-solid fa-star fa-2xl";
      star2.className = "fa-regular fa-star fa-2xl";
      star3.className = "fa-regular fa-star fa-2xl";
      star4.className = "fa-regular fa-star fa-2xl";
      star5.className = "fa-regular fa-star fa-2xl";
      playBtn.href = "./pages/4gtrthn.html";
      break;
    case 5:
      descriptionText.innerText =
        "Enter custom words to create a custom story in wacky MADLIBS© fashion.";
      star1.className = "fa-solid fa-star fa-2xl";
      star2.className = "fa-solid fa-star fa-2xl";
      star3.className = "fa-solid fa-star fa-2xl";
      star4.className = "fa-solid fa-star fa-2xl";
      star5.className = "fa-solid fa-star fa-2xl";
      playBtn.href = "./pages/5madlib.html";
      break;
    case 6:
      descriptionText.innerText =
        "Enter a number to find out if it is odd or even.";
      star1.className = "fa-solid fa-star fa-2xl";
      star2.className = "fa-solid fa-star fa-2xl";
      star3.className = "fa-regular fa-star fa-2xl";
      star4.className = "fa-regular fa-star fa-2xl";
      star5.className = "fa-regular fa-star fa-2xl";
      playBtn.href = "./pages/6oddevn.html";
      break;
    case 7:
      descriptionText.innerText = "Enter a word and make it reversed!";
      star1.className = "fa-solid fa-star fa-2xl";
      star2.className = "fa-solid fa-star fa-2xl";
      star3.className = "fa-solid fa-star fa-2xl";
      star4.className = "fa-regular fa-star fa-2xl";
      star5.className = "fa-regular fa-star fa-2xl";
      playBtn.href = "./pages/7rvrsword.html";
      break;
    case 8:
      descriptionText.innerText =
        "Enter a number and make it reversed!";
        star1.className = "fa-solid fa-star fa-2xl";
        star2.className = "fa-solid fa-star fa-2xl";
        star3.className = "fa-solid fa-star fa-2xl";
        star4.className = "fa-regular fa-star fa-2xl";
        star5.className = "fa-regular fa-star fa-2xl";
      playBtn.href = "./pages/8rvrsnum.html";
      break;
    case 9:
      descriptionText.innerText =
        "Ask the 8 Ball a question and get a mysterious answer.";
        star1.className = "fa-solid fa-star fa-2xl";
        star2.className = "fa-solid fa-star fa-2xl";
        star3.className = "fa-solid fa-star fa-2xl";
        star4.className = "fa-solid fa-star fa-2xl";
        star5.className = "fa-regular fa-star fa-2xl";
      playBtn.href = "./pages/98ball.html";
      break;
    case 10:
      descriptionText.innerText =
        "Pick a food genre and generate a random restaurant.";
      star1.className = "fa-solid fa-star fa-2xl";
      star2.className = "fa-solid fa-star fa-2xl";
      star3.className = "fa-solid fa-star fa-2xl";
      star4.className = "fa-regular fa-star fa-2xl";
      star5.className = "fa-regular fa-star fa-2xl";
      playBtn.href = "./pages/0rest.html";
      break;
    default:
      break;
  }
}
