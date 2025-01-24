resultBlock.style.visibility = "hidden";

let timeZone = "AM"
const hours = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
AMBtn.addEventListener("click",function(){
    meridian.innerText = "AM";
    timeZone = "AM"
    document.getElementById("accordion-collapse-body-1").classList.add("hidden")
})
PMBtn.addEventListener("click",function(){
    meridian.innerText = "PM";
    timeZone = "PM"
    document.getElementById("accordion-collapse-body-1").classList.add("hidden")
})

let greeting = async (userName,userTime) =>{
    const promise = await fetch(`https://all4oneapirobinson-ape7ecguhqdqc9cm.westus-01.azurewebsites.net/WakeUp/InputName/${userName}/${userTime}`)
    const data = await promise.text()
    return data
}

submitBtn.addEventListener("click", async () => {
    resultBlock.style.visibility = "visible";
    if(parseInt(timeField.value) < 1 || parseInt(timeField.value) > 12)
    {
        resultText.innerText = "Select an hour time between 1 and 12."
    }else if(!hours.includes(timeField.value))
    {
        resultText.innerText = "Enter a valid time."
    }
    else
    {
        resultText.innerText = `${await greeting(nameField.value,timeField.value)} ${timeZone} today!`
    }
    
})