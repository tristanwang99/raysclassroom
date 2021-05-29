////////// HTML Variables //////////

const recordBtn = document.getElementById('record-btn')
const clearBtn = document.getElementById('clear-btn')
const submitBtn = document.getElementById('submit-btn')
const resetBtn = document.getElementById('reset-btn')
const speakBtn = document.getElementById('speak-btn')
const qTag = document.getElementById('question-tag')
const qDisplay = document.getElementById('question-display')
const aTag = document.getElementById('answer-tag')
const aDisplay = document.getElementById('answer-display')
const aBox = document.getElementById('answer-box')
const instructions = document.getElementById('instructions')
const qStatus = document.getElementById('question-status')
const qCorrectDisplay = document.getElementById('questions-correct')

////////// Speech Recognition //////////

let compatible = false

if (window.SpeechRecognition || window.webkitSpeechRecognition) {
  compatible = true
  console.log('compatible')
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
  window.r = new SpeechRecognition()

  r.continuous = true

  r.onstart = function () {
    instructions.innerText = '語音辨識功能已開啟'
  }

  r.onspeechend = function () {
    instructions.innerText = '語音辨識已終止'
  }

  r.onerror = function () {
    instructions.innerText = '語音辨識錯誤，請再試一次'
  }

  r.onresult = function (e) {
    let current = e.resultIndex
    let transcript = e.results[current][0].transcript
    speechText += transcript.toLowerCase()
    aBox.value = speechText
  }
} else {
  console.log('not compatible')
  recordBtn.style.display = 'none'
  clearBtn.className += 'left-edges-rounded'
  instructions.innerText = '您的瀏覽器不支援語音辨識功能，請透過打字作答'
}

////////// Gameplay Variables //////////

const qMax = 10

let speechText = ''
let acceptingResponses = false
let qIndex = 0
let qCorrect = 0
let questions = []
let qAsked = []
let aOfficial = []
let aCorrect = []

////////// Gameplay Functions //////////

async function prepareGame() {
  const response = await fetch('questions.json')
  questions = await response.json()
  console.log(questions)
  resetGame()
  runGame()
}

function clearAnswer() {
  speechText = ''
  aBox.value = ''
}

function resetRecordBtn() {
  recordBtn.innerText = '開始錄音'
  if (compatible) {
    r.stop()
    instructions.innerText = '語音辨識功能已關閉'
  }
}

function setDisplayNone(elems) {
  elems.forEach(function (elem) {
    elem.style.display = 'none'
  })
}

function setDisplayBlock(elems) {
  elems.forEach(function (elem) {
    elem.style.display = 'block'
  })
}

function tallyScore() {
  console.log('Tally the score')
  setDisplayNone([recordBtn, clearBtn, submitBtn, qTag, aBox, aTag, aDisplay, speakBtn, instructions])
  resetBtn.style.display = 'block'
  const percentage = Math.round(qCorrect / qMax * 100)
  let output = ''
  if (qCorrect >= 6) {
    output += `Congratulations! You answered ${qCorrect} out of ${qMax} questions correctly and earned a passing grade of ${percentage}%.\n\n恭喜您順利通過考試！您在 ${qMax} 題中答對 ${qCorrect} 題，成績是 ${percentage}%`
  } else {
    output += `Good job. You answered ${qCorrect} out of ${qMax} questions correctly, which is ${percentage}%. You must answer at least 6 questions correctly to pass. Try again!\n\n您在 ${qMax} 題中答對 ${qCorrect} 題，成績是 ${percentage}%。若要通過考試至少必須答對 6 題，再接再厲！`
  }
  qDisplay.innerText = output
}

function drawQuestion() {
  qIndex = 0
  clearAnswer()
  aDisplay.innerText = ''
  while (true) {
    qIndex = Math.floor(Math.random() * questions.length)
    if (!qAsked.includes(qIndex)) {
      qAsked.push(qIndex)
      break
    }
  }
  qDisplay.innerText = questions[qIndex].question
  aCorrect = questions[qIndex].responses
  acceptingResponses = true
  aBox.disabled = false
}

function checkAnswer() {
  aOfficial = questions[qIndex].answer
  const input = aBox.value
  const aNeeded = questions[qIndex].numResponses
  let count = 0
  aCorrect.forEach(function (answer) {
    if (input.includes(answer)) {
      count++
    }
  })
  if (count >= aNeeded) {
    return 0
  } else if (count === 0) {
    return -1
  } else {
    return aNeeded - count
  }
}

function showAnswer(isCorrect) {
  let output = ''
  if (isCorrect) {
    qCorrect++
    output += '正確！'
  } else {
    output += '不正確 ... '
  }
  output += '標準答案是：'
  aOfficial.forEach(function (answer) {
    output += `\n\n- ${answer}`
  })
  qCorrectDisplay.innerText = `答對 ${qCorrect} 題`
  aDisplay.innerText = output
}

function submitBtnClicked() {
  if (submitBtn.innerText === '提交') {
    resetRecordBtn()
    const result = checkAnswer()
    if (!(aBox.value).replace(/\s/g, '').length) {
      aDisplay.innerText = '請先輸入答案再提交'
    } else if (result > 0) {
      aDisplay.innerText = `您還缺少 ${result} 個答案`
    } else {
      acceptingResponses = false
      aBox.disabled = true
      if (result === 0) {
        showAnswer(true)
      } else {
        showAnswer(false)
      }
      if (qAsked.length === qMax) {
        submitBtn.innerText = '查看結果'
      } else {
        submitBtn.innerText = '下一題'
      }
    }
  } else if (submitBtn.innerText === '下一題') {
    if (qAsked.length + 1 <= qMax) {
      qStatus.innerText = `${qAsked.length + 1} / ${qMax}`
    }
    submitBtn.innerText = '提交'
    drawQuestion()
  } else {
    // Case 'See Results'
    tallyScore()
  }
}

function resetGame() {
  qAsked = []
  qCorrect = 0
  if (compatible) recordBtn.style.display = 'block'
  setDisplayBlock([clearBtn, submitBtn, qTag, aBox, aTag, aDisplay, speakBtn, instructions])
  submitBtn.innerText = '提交'
  resetBtn.style.display = 'none'
  qStatus.innerText = `1 / ${qMax}`
  qCorrectDisplay.innerText = '答對 0 題'
}

function runGame() {
  console.log('Game starts')
  drawQuestion()
}

////////// Event Listeners //////////

recordBtn.addEventListener('click', function () {
  if (recordBtn.innerText === '開始錄音') {
    if (acceptingResponses) {
      recordBtn.innerText = '停止錄音'
      r.start()
    } else {
      if (compatible) instructions.innerText = '目前無法錄音或輸入答案'
    }
  } else {
    // Case 'Stop Recording'
    resetRecordBtn()
  }
})

clearBtn.addEventListener('click', function () {
  if (aBox.disabled === false) clearAnswer()
})

submitBtn.addEventListener('click', function () {
  submitBtnClicked()
})

resetBtn.addEventListener('click', function () {
  resetGame()
  runGame()
})

speakBtn.addEventListener('click', function () {
  const message = new SpeechSynthesisUtterance()
  const voices = window.speechSynthesis.getVoices()
  message.voice = voices['Google US English']
  message.rate = 0.9
  message.pitch = 1
  message.text = questions[qIndex].question
  speechSynthesis.speak(message)
})

document.addEventListener('keyup', function (e) {
  if (e.key === 'Enter') submitBtnClicked()
})

prepareGame()