//Проёбы ЛИЗЫ
let saveEl1 = document.getElementById("save-el1")
//console.log(saveEl1)
let countEl1 = document.getElementById("count-el1")
let count1 = 0
let passes1 = 0

function increment1() {
    count1 += 1
    countEl1.textContent = count1
}

function save1() {
    passes1 += 1
    let countStr1 = "Проёб " + passes1 + ":  " + count1 + " баллов. "
    saveEl1.innerHTML += countStr1 + "<br>"
    countEl1.textContent = 0
    count1 = 0
}

//Проебы Насти
let saveEl2 = document.getElementById("save-el2")
let countEl2 = document.getElementById("count-el2")
let count2 = 0
let passes2 = 0

function increment2() {
    count2 += 1
    countEl2.textContent = count2
}

function save2() {
    passes2 += 1
    let countStr2 = "Проёб " + passes2 + ":  " + count2 + " баллов. "
    saveEl2.innerHTML += countStr2 + "<br>"
    countEl2.textContent = 0
    count2 = 0
}