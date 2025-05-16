const btn = document.querySelector("button")
console.log(btn);

btn.addEventListener("click", ()=>{
    const height = parseFloat((document.getElementById('height').value)/100);
    const weight = parseFloat(document.getElementById('weight').value);

    let bmi = (weight / ((height)**2));
    const bmiDisplay = document.getElementById("bmiShow")
    bmiDisplay.innerText=`Your Bmi is: ${bmi.toFixed(2)}`
})