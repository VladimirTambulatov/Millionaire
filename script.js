function hint1(){
}
function hint2(){
}
function hint3(){
}
function timer() {
    let time = document.getElementById("timer").textContent
    while (Number(time) != Number(0)) {
        setTimeout(() => document.getElementById("timer").textContent = Number(time), 1000)
        time = Number(time) - 1
    }
}
