resultBlock.style.visibility = "hidden";
let result = async (num1,num2) => {
    const promise = await fetch(`https://all4oneapirobinson-ape7ecguhqdqc9cm.westus-01.azurewebsites.net/Add2Num/Add2Num/${num1}/${num2}`)
    const data = await promise.text()
    return data
}

submitBtn.addEventListener("click", async () =>{
    resultBlock.style.visibility = "visible";
    if(isNaN(firstNum.value) || isNaN(secondNum.value))
    {
        resultText.innerText = "Please enter valid numbers."
    }
    else
    {
        resultText.innerText = await result(firstNum.value,secondNum.value)
    }
})