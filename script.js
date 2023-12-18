const questions = [
   {
      question: 'Which country has the largest population in the world?',
      answers: [
         {
            text: 'South Africa',
            correct: false,
         },
         {
            text: 'Egypt',
            correct: false,
         },
         {
            text: 'Ethiopia',
            correct: false,
         },
         {
            text: 'China',
            correct: true,
         },
      ],
   },

   {
      question: 'Which is the largest animal in the world?',
      answers: [
         {
            text: 'Shark',
            correct: false,
         },
         {
            text: 'Blue While',
            correct: true,
         },
         {
            text: 'Elephant',
            correct: false,
         },
         {
            text: 'Giraffe',
            correct: true,
         },
      ],
   },

   {
      question: 'Which is the largest desert in the world?',
      answers: [
         {
            text: 'Kalahari',
            correct: false,
         },
         {
            text: 'Gobi',
            correct: true,
         },
         {
            text: 'Sahara',
            correct: false,
         },
         {
            text: 'Antarctica',
            correct: true,
         },
      ],
   },
   {
      question: 'Which is the smallest continent in the world?',
      answers: [
         {
            text: 'Asia',
            correct: false,
         },
         {
            text: 'Arctic',
            correct: false,
         },
         {
            text: 'Australia',
            correct: true,
         },
         {
            text: 'Africa',
            correct: false,
         },
      ],
   },
]

const questionEl = document.getElementById('question')
const answerBtn = document.getElementById('answer_buttons')
const nextBtn = document.getElementById('next-btn')

let currentQuestionIndex = 0
let score = 0

function startQuiz() {
   currentQuestionIndex = 0
   score = 0
   nextBtn.innerHTML = 'Next'
   showQuestion()
}

function showQuestion() {
   let currentQuestion = questions[currentQuestionIndex]
   let questionNo = currentQuestionIndex + 1
   questionElement.innerHTML = questionNo + '. ' + currentQuestion.question
}
