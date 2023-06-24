const questions = [
    {
        question: 'Как называется столица Франции?',
        answers: ['Марсель', 'Париж', 'Бордо', 'Лион'],
        correct: 1
    },
    {
        question: 'Кто создал теорию относительности?',
        answers: ['Альберт Эйнштейн', 'Исаак Ньютон', 'Галилео Галилей', 'Томас Эдисон'],
        correct: 0
    },
    {
        question: 'Какой город называют "городом огней"?',
        answers: ['Лос-Анджелес', 'Токио', 'Париж', 'Шанхай'],
        correct: 2
    },
    {
        question: 'Что является логотипом компании Apple?',
        answers: ['Гранат', 'Яблоко', 'Апельсин', 'Мандарин'],
        correct: 1
    },
    {
        question: 'Что является логотипом компании Apple?',
        answers: ['Гранат', 'Яблоко', 'Апельсин', 'Мандарин'],
        correct: 1
    },
    {
        question: 'Какой год был основан город Москва??',
        answers: ['1147', '1295', '927', '1776'],
        correct: 0
    },{
        question: 'Какое животное является символом России',
        answers: ['Медведь', 'Лиса', 'Волк', 'Страус'],
        correct: 0
    },
    {
        question: 'Как называется самый большой океан на Земле',
        answers: ['Атлантический', 'Тихий', 'Индийский', 'Северно-Ледовитый'],
        correct: 1
    },
    {
        question: ' Какой вид спорта был добавлен в программу Олимпийских игр в 2020 году?',
        answers: ['Лыжный спорт', 'Прыжки в воду', 'Гольф', 'Сурфинг'],
        correct: 3
    },
    {
        question: 'Как называется самая длинная река в мире?',
        answers: ['Амазонка', 'Янцзы', 'Нил', 'Миссисипи'],
        correct: 2
    },
    {
        question: 'Как называется самая длинная гора в мире',
        answers: ['Гималаи', 'Анды', 'Альпы', 'Аппалачи'],
        correct: 1
    },
    {
        question: 'Какой цвет имеют листья национального символа Канады - кленового листа?',
        answers: ['Красный', 'Жёлтый', 'Зелёный', 'Синий'],
        correct: 0
    },
    {
        question: 'Как называется самая маленькая страна в мире по территории?',
        answers: ['Лихтенштейн', 'Сан-Марино', 'Монако', 'Ватикан'],
        correct: 3
    },
    {
        question: 'Какой город является столицей Южной Кореи?',
        answers: ['Пусан', 'Инчхон', 'Сеул', 'Тэгу'],
        correct: 2
    },

    {
        question: 'Кто является автором сборника "Преступление и наказание"?',
        answers: ['Лев Толстой', 'Федор Достоевский', 'Антуан де Сент-Экзюпери', 'Шарль Диккенс'],
        correct: 1
    }
];
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
