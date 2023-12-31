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
            correct: false,
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
            correct: false,
         },
         {
            text: 'Sahara',
            correct: false,
         },
         {
            text: 'Antarctic',
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
   resetState()
   let currentQuestion = questions[currentQuestionIndex]
   let questionNo = currentQuestionIndex + 1
   questionEl.innerHTML = questionNo + '. ' + currentQuestion.question

   currentQuestion.answers.forEach((answer) => {
      const button = document.createElement('button')
      button.innerHTML = answer.text
      button.classList.add('btn')
      answerBtn.appendChild(button)
      if (answer.correct) {
         button.dataset.correct = answer.correct
      }
      button.addEventListener('click', selectAnswer)
   })
}

function resetState() {
   nextBtn.style.display = 'none'
   while (answerBtn.firstChild) {
      answerBtn.removeChild(answerBtn.firstChild)
   }
}

function selectAnswer(e) {
   const selectedBtn = e.target
   const isCorrect = selectedBtn.dataset.correct === 'true'
   if (isCorrect) {
      selectedBtn.classList.add('correct')
      score++
   } else {
      selectedBtn.classList.add('incorrect')
   }

   Array.from(answerBtn.children).forEach((button) => {
      if (button.dataset.correct === 'true') {
         button.classList.add('correct')
      }
      button.disabled = true
   })
   nextBtn.style.display = 'block'
}

function showScore() {
   resetState()
   questionEl.innerHTML = `You scored ${score} out of ${questions.length}!`
   nextBtn.innerHTML = 'Play Again'
   nextBtn.style.display = 'block'
}

function handleNextButton() {
   currentQuestionIndex++
   if (currentQuestionIndex < questions.length) {
      showQuestion()
   } else {
      showScore()
   }
}

nextBtn.addEventListener('click', () => {
   if (currentQuestionIndex < questions.length) {
      handleNextButton()
   } else {
      startQuiz()
   }
})

startQuiz()
