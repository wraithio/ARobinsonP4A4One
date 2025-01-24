const invalidReply = ["Ask a proper question.","Try again.","Not a question.","What makes a question a question?","???"]

let result = async () => {
    const promise = await fetch(`https://all4oneapirobinson-ape7ecguhqdqc9cm.westus-01.azurewebsites.net/Magic8/goMagic8`)
    const data = await promise.text()
    return data
}

submitBtn.addEventListener("click", async () =>{
    let arr = userInput.value.trim().split('')
    if(userInput.value == "")
    {
        resultText.innerText = "Ask a question to begin."
    }
    else if(!arr.includes("?"))
    {
        resultText.innerText = invalidReply[Math.floor(Math.random() * 5)]
    }
    else
    {
        resultText.innerText = await result()
    }
})