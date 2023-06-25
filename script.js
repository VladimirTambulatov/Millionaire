
let questions = [
    {
        question: 'Как называется самая маленькая страна в мире по территории?\r',
        answers: [
            'a) Ватикан\r',
            'b) Монако\r',
            'c) Сан-Марино\r',
            'd) Лихтенштейн\r'
        ],
        correct: 1
    },
    {
        question: 'Как называется столица России?\r',
        answers: [ 'a) Париж\r', 'b) Лондон\r', 'c) Москва\r', 'd) Берлин\r' ],
        correct: 2
    },
    {
        question: '',
        answers: [ undefined, undefined, undefined, undefined ],
        correct: NaN
    }
]
console.log(questions[0]["question"])
console.log(questions[0]["answers"])
console.log(questions[0]["answers"][0])


function hint1(){
}
function hint2(){
}
function hint3(){
}

window.addEventListener('load', () => {timer()})
function timer() {
    let alltime = 60
    let myinterval = setInterval(() => {
        alltime = alltime - 1
        document.getElementById("timer").textContent = alltime
        if (alltime <= 0){
            document.getElementById("timer").textContent = "Вы проиграли!"
            clearInterval(myinterval)
        }
    },1000)
}
function start(){
    for (let task of questions){
        if (do_task(task) == false){
            alert("Вы проиграли!")
        }
    }
}

function do_task({question, answers, correct}) {
    document.getElementById("question").textContent = question
    let i = 0
    for (let label of document.getElementsByClassName("answer")) {
        label.textContent = answers[i]
        i++
    }
    check()
}
function check(correct) {
    if (document.getElementById("button").pressed) {
        alert("попа")
        let inp = document.getElementsByClassName('answer-input');
        for (let i = 0; i < inp.length; i++) {
            if (inp[i].type == "radio" && inp[i].checked && inp[i].getAttribute("value") == correct) {
                return true
            }
        }
        return false
    }
}


start()
