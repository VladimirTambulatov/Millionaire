function hint1(){
}
function hint2(){
}
function hint3(){
}

window.addEventListener('load', () => {timer()})
function timer() {
    let alltime = 3
    let myinterval = setInterval(() => {
        alltime = alltime - 1
        document.getElementById("timer").textContent = alltime
        if (alltime <= 0){
            document.getElementById("timer").textContent = "Вы проиграли!"
            clearInterval(myinterval)
        }
    },1000)
}
