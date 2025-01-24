resultBlock.style.visibility = "hidden";
let result = async (num) => {
    const promise = await fetch(`https://all4oneapirobinson-ape7ecguhqdqc9cm.westus-01.azurewebsites.net/OddEvn/goOddEvn/${num}`)
    const data = await promise.text()
    return data
}

submitBtn.addEventListener("click", async () =>{
    resultBlock.style.visibility = "visible";
    if(isNaN(firstNum.value))
    {
        resultText.innerText = "Please enter a valid number."
    }
    else
    {
        resultText.innerText = await result(firstNum.value)
    }
})