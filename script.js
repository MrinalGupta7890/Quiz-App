const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers:[
            {text:"Elephant", correctAnswer : false},
            {text:"Shark", correctAnswer : false},
            {text:"Blue Whale", correctAnswer : true},
            {text:"Giraffe", correctAnswer : false},
        ]
    },

    {
        question: "Which is the smallest country in the world?",
        answers:[
            {text:"Vatican city", correctAnswer : true},
            {text:"Bhutan", correctAnswer : false},
            {text:"Nepal", correctAnswer : false},
            {text:"SriLanka", correctAnswer : false},
        ]
    },

    {
        question: "Which is the largest desert in the world?",
        answers:[
            {text:"Kalahari", correctAnswer : false},
            {text:"Gobi", correctAnswer : false},
            {text:"Sahara", correctAnswer : false},
            {text:"Antarctica", correctAnswer : true},
        ]
    },

    {
        question: "Which is the smallest continent in the world?",
        answers:[
            {text:"Asia", correctAnswer : false},
            {text:"Australia", correctAnswer : true},
            {text:"Africa", correctAnswer : false},
            {text:"Arctic", correctAnswer : false},
        ]
    },

    {
        question: "What is the largest animal on the world?",
        answers:[
            {text:"Elephant", correctAnswer : false},
            {text:"Shark", correctAnswer : false},
            {text:"Blue Whale", correctAnswer : true},
            {text:"Giraffe", correctAnswer : false},
        ]
    },

    {
        question: "Which is the most sensitive organ in our body?",
        answers:[
            {text:"Liver", correctAnswer : false},
            {text:"Heart", correctAnswer : false},
            {text:"Eye", correctAnswer : false},
            {text:"Skin", correctAnswer : true},
        ]
    },

    {
        question: "Who invented Computer?",
        answers:[
            {text:"Charles Babbage", correctAnswer : true},
            {text:"Mahatma Gandhi", correctAnswer : false},
            {text:"Mahendra Baghaut", correctAnswer : false},
            {text:"Alexander Graham Bell", correctAnswer : false},
        ]
    },

    {
        question: "Which country are the Giza Pyramids in?",
        answers:[
            {text:"Italy", correctAnswer : false},
            {text:"Sudan", correctAnswer : false},
            {text:"Peru", correctAnswer : false},
            {text:"Egypt", correctAnswer : true},
        ]
    },

    {
        question: "Gie National Park in Gujarat is famous for?",
        answers:[
            {text:"Tiger", correctAnswer : false},
            {text:"Lion", correctAnswer : true},
            {text:"Leopard", correctAnswer : false},
            {text:"Giraffe", correctAnswer : false},
        ]
    },

    {
        question: "The total distance around a figure is called its?",
        answers:[
            {text:"Diameter", correctAnswer : false},
            {text:"Circumference", correctAnswer : false},
            {text:"Perimeter", correctAnswer : true},
            {text:"Area", correctAnswer : false},
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        //        console.log('button', button);
        button.classList.add("btn");
        answerButtons.appendChild(button);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

startQuiz();
