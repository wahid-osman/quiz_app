const quizData = [
    {
        question: 'How old is Taji?',
        a: '10',
        b: '17',
        c: '2.5',
        d: '110',
        correct: 'c'
    }, {
        question: 'what is her favorite food?',
        a: 'Ugali',
        b: 'Chapati aka Pizza',
        c: 'Rice',
        d: 'Uji',
        correct: 'b'
    }, {
        question: 'What did she say when she saw a buffalo?',
        a: 'Cow',
        b: 'Lion',
        c: 'Tiger',
        d: 'Owl',
        correct: 'a'
    }, {
        question: 'What is her favorite toy?',
        a: 'Teddy',
        b: 'Cow cow',
        c: 'Yoyo',
        d: 'Tiger',
        correct: 'a'
    }, {
        question: 'What is her favorite color',
        a: 'Blue',
        b: 'Green',
        c: 'Orange',
        d: 'Pink',
        correct: 'd'
    }
]

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionE1 = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    
    const currentQuizData = quizData[currentQuiz];

    questionE1.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected(){

    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked){
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => { 

    const answer = getSelected();

    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }
        
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});