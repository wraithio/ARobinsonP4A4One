let genre = ""
resultBlock.style.visibility = "hidden";
const mexicanText = mexicanBtn.children[0];
const italianText = italianBtn.children[0];
const chineseText = chineseBtn.children[0];

mexicanBtn.addEventListener("click", () => {
    genre = "mexican"
    mexicanBtn.className = "bg-white rounded-xl border-2"
    mexicanText.className = "text-orange-300 p-3"
    italianBtn.className = "border-2 border-solid rounded-xl hover:bg-white"
    italianText.className = "hover:text-orange-300 p-3"
    chineseBtn.className = "border-2 border-solid rounded-xl hover:bg-white"
    chineseText.className = "hover:text-orange-300 p-3"
})
italianBtn.addEventListener("click", () => {
    genre = "italian"
    italianBtn.className = "bg-white rounded-xl border-2"
    italianText.className = "text-orange-300 p-3"
    mexicanBtn.className = "border-2 border-solid rounded-xl hover:bg-white"
    mexicanText.className = "hover:text-orange-300 p-3"
    chineseBtn.className = "border-2 border-solid rounded-xl hover:bg-white"
    chineseText.className = "hover:text-orange-300 p-3"
})
chineseBtn.addEventListener("click", () => {
    genre = "chinese"
    chineseBtn.className = "bg-white rounded-xl border-2"
    chineseText.className = "text-orange-300 p-3"
    mexicanBtn.className = "border-2 border-solid rounded-xl hover:bg-white"
    mexicanText.className = "hover:text-orange-300 p-3"
    italianBtn.className = "border-2 border-solid rounded-xl hover:bg-white"
    italianText.className = "hover:text-orange-300 p-3"
})

let generate = async (userInput) => {
    const promise = await fetch(`https://all4oneapirobinson-ape7ecguhqdqc9cm.westus-01.azurewebsites.net/Restaurant/goRestaurant/${userInput}`)
    const data = await promise.text()
    return data
}

submitBtn.addEventListener("click", async() =>{
    resultBlock.style.visibility = "visible";
    resultText.innerText = await generate(genre)
})