const fs = require('fs');

const text = fs.readFileSync('questions.txt', 'utf-8');
var lines = text.split('\n'); // разбиваем текст на строки
var questions = []; // массив для хранения вопросов и ответов
for (var i = 0; i < lines.length; i += 6){
    var question = lines[i]
    var answers = [
        lines[i + 1], // удаляем номер варианта ответа и очищаем строку
        lines[i + 2],
        lines[i + 3],
        lines[i + 4]
    ];
    var correct = parseInt(lines[i + 5])
    questions.push({ // добавляем объект с вопросом и ответами в массив
        question: question,
        answers: answers,
        correct: correct
    });
}
console.log(questions);
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
