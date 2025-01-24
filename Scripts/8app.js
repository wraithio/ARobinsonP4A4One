resultBlock.style.visibility = "hidden";
let result = async (num) => {
    const promise = await fetch(`https://all4oneapirobinson-ape7ecguhqdqc9cm.westus-01.azurewebsites.net/ReverseIt/GoReverseNum/${num}`)
    const data = await promise.text()
    return data
}

submitBtn.addEventListener("click", async () =>{
    resultBlock.style.visibility = "visible";
    if(isNaN(userInput.value))
    {
        resultText.innerText = "Please enter only numbers."
    }
    else
    {
        resultText.innerText = await result(userInput.value)
    }
})