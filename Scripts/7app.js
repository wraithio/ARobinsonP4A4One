resultBlock.style.visibility = "hidden";
let result = async (word) => {
    const promise = await fetch(`https://all4oneapirobinson-ape7ecguhqdqc9cm.westus-01.azurewebsites.net/ReverseIt/GoReverseChar/${word}`)
    const data = await promise.text()
    return data
}

submitBtn.addEventListener("click", async () =>{
    resultBlock.style.visibility = "visible";
    if(isNaN(userInput.value))
    {
        resultText.innerText = await result(userInput.value)
    }
    else
    {
        resultText.innerText = "Please enter only words."
    }
})