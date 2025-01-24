resultBlock.style.visibility = "hidden";

let inputField = document.getElementById("inputField")

let greeting = async (userInput) => {
    const promise = await fetch(`https://all4oneapirobinson-ape7ecguhqdqc9cm.westus-01.azurewebsites.net/SayHello/InputName/${userInput}`)
    const data = await promise.text()
    return data
}

submitBtn.addEventListener("click",async () => {
    resultBlock.style.visibility = "visible";
    console.log(inputField.value)
    if(inputField.value != "")
    {
        resultText.innerText = await greeting(inputField.value)
    }
})