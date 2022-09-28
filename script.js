const inputN1 = document.getElementById("num1")
const inputN2 = document.getElementById("num2")
const inputR = document.getElementById("result")

const btnSum = document.getElementById("sum")
const btnRes = document.getElementById("res")
const btnMul = document.getElementById("mul")
const btnDiv = document.getElementById("div")

const sum = (a, b) => a + b
const res = (a, b) => a - b
const mul = (a, b) => a * b
const div = (a, b) => a / b

const handleSum = () => {
    const num1 = parseInt(inputN1.value)
    const num2 = parseInt(inputN2.value)
    inputR.value = sum(num1, num2)
}

const handleRes = () => {
    inputR.value = res(inputN1.value, inputN2.value)
}

const handleMul = () => {
    inputR.value = mul(inputN1.value, inputN2.value)
}

const handleDiv = () => {
    inputR.value = div(inputN1.value, inputN2.value)
}

btnSum.addEventListener("click", handleSum)
btnRes.addEventListener("click", handleRes)
btnMul.addEventListener("click", handleMul)
btnDiv.addEventListener("click", handleDiv)