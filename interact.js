const buttonEl = document.getElementById("conv-btn")
let inputEl = document.getElementById("input-el")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

const feetPerMeter = 3.28084 
const meterPerFeet = 0.3048 

const gallonPerLiter = 0.264 
const literPerGallon = 3.78541

const poundPerKilo = 2.204
const kiloPerPound = 0.453592

buttonEl.addEventListener("click", function() {
    const baseValue = inputEl.value
    
    // LENGTH CONVERTER
    lengthEl.textContent = `${baseValue} meters = ${(baseValue * feetPerMeter).toFixed(3)} feets | ${baseValue} feets = ${(baseValue * meterPerFeet).toFixed(3)} meters` 
    
    // VOLUME CONVERTER
    volumeEl.textContent = `${baseValue} liters = ${(baseValue * gallonPerLiter).toFixed(3)} gallons | ${baseValue} gallons = ${(baseValue * literPerGallon).toFixed(3)} liters` 
    
    // MASS CONVERTER
    massEl.textContent = `${baseValue} kilos = ${(baseValue * poundPerKilo).toFixed(3)} pounds | ${baseValue} pounds = ${(baseValue * kiloPerPound).toFixed(3)} kilos` 
})
