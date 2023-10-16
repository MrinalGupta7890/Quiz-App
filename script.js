const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers:[
            {text:"Elephant", correct : false},
            {text:"Shark", correct : false},
            {text:"Blue Whale", correct : true},
            {text:"Giraffe", correct : false},
        ]
    },

    {
        question: "Which is the smallest country in the world?",
        answers:[
            {text:"Vatican city", correct : true},
            {text:"Bhutan", correct : false},
            {text:"Nepal", correct : false},
            {text:"SriLanka", correct : false},
        ]
    },

    {
        question: "Which is the largest desert in the world?",
        answers:[
            {text:"Kalahari", correct : false},
            {text:"Gobi", correct : false},
            {text:"Sahara", correct : false},
            {text:"Antarctica", correct : true},
        ]
    },

    {
        question: "Which is the smallest continent in the world?",
        answers:[
            {text:"Asia", correct : false},
            {text:"Australia", correct : true},
            {text:"Africa", correct : false},
            {text:"Arctic", correct : false},
        ]
    },

    {
        question: "What is the largest animal on the world?",
        answers:[
            {text:"Elephant", correct : false},
            {text:"Shark", correct : false},
            {text:"Blue Whale", correct : true},
            {text:"Giraffe", correct : false},
        ]
    },

    {
        question: "Which is the most sensitive organ in our body?",
        answers:[
            {text:"Liver", correct : false},
            {text:"Heart", correct : false},
            {text:"Eye", correct : false},
            {text:"Skin", correct : true},
        ]
    },

    {
        question: "Who invented Computer?",
        answers:[
            {text:"Charles Babbage", correct : true},
            {text:"Mahatma Gandhi", correct : false},
            {text:"Mahendra Baghaut", correct : false},
            {text:"Alexander Graham Bell", correct : false},
        ]
    },

    {
        question: "Which country are the Giza Pyramids in?",
        answers:[
            {text:"Italy", correct : false},
            {text:"Sudan", correct : false},
            {text:"Peru", correct : false},
            {text:"Egypt", correct : true},
        ]
    },

    {
        question: "Gie National Park in Gujarat is famous for?",
        answers:[
            {text:"Tiger", correct : false},
            {text:"Lion", correct : true},
            {text:"Leopard", correct : false},
            {text:"Giraffe", correct : false},
        ]
    },

    {
        question: "The total distance around a figure is called its?",
        answers:[
            {text:"Diameter", correct : false},
            {text:"Circumference", correct : false},
            {text:"Perimeter", correct : true},
            {text:"Area", correct : false},
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
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++ ;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=> {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});


startQuiz();
