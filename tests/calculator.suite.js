// Като потребител на системата - трябва да мога
// да избера числа и операция събиране
// и да изведа коректен резултат на екрана
function testBasicAddition() {

    // взимам всички DOM елементи които ще кликам
    const number1DomElement = document.getElementById("number-1")
    const operationAddDomElement = document.getElementById("operation-add")
    const operationCalculationDomElement = document.getElementById("operation-calculation")
    const displayDomElement = document.getElementById("display")

    // избирам числото 1 и го кликам
    number1DomElement.click()
    // избирам операция + и я кликам
    operationAddDomElement.click()
    // избирам числото 1 и го кликам
    number1DomElement.click()

    // избирам операция = и я кликам
    operationCalculationDomElement.click()
    

}