const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
var recognition = new SpeechRecognition()

const startBtn = document.getElementById('start-btn')
const clearBtn = document.getElementById('clear-btn')
const submitBtn = document.getElementById('submit-btn')
const resetBtn = document.getElementById('reset-btn')
const speakBtn = document.getElementById('speak-btn')
const questionDisplay = document.getElementById('question-display')
const answerBox = document.getElementById('answer-box')
const officialAnswerDisplay = document.getElementById('official-answer-display')
const instructions = document.getElementById('instructions')
const status = document.getElementById('status')
const questionsCorrect = document.getElementById('questions-correct')

const MAX_QUESTIONS = 10
const questions = [
  {
    q: 'What is the supreme law of the land?',
    o: ['The Constitution'],
    a: ['constitution'],
    n: 1
  },
  {
    q: 'What does the Constitution do?',
    o: ['Sets up the government', 'Defines the government', 'Protects basic rights of Americans'],
    a: ['sets up the government', 'defines the government', 'protects basic rights of americans', 'protects rights of americans', 'protects americans'],
    n: 1
  },
  {
    q: 'The idea of self-government is in the first three words of the Constitution. What are these words?',
    o: ['We the People'],
    a: ['we the people'],
    n: 1
  },
  {
    q: 'What is an amendment?',
    o: ['A change (to the Constitution)', 'An addition (to the Constitution)'],
    a: ['change', 'addition'],
    n: 1
  },
  {
    q: 'What do we call the first ten amendments to the Constitution?',
    o: ['The Bill of Rights'],
    a: ['bill of rights'],
    n: 1
  },
  {
    q: 'What is one right or freedom from the First Amendment?',
    o: ['Speech', 'Religion', 'Press', 'Assembly', 'Petition the government'],
    a: ['speech', 'religion', 'press', 'assembly', 'petition the government'],
    n: 1
  },
  {
    q: 'How many amendments does the Constitution have?',
    o: ['Twenty-seven (27)'],
    a: ['27', 'twenty seven', 'twenty-seven'],
    n: 1
  },
  {
    q: 'What did the Declaration of Independence do?',
    o: ['Announced our independence (from Great Britain)', 'Declared our independence (from Great Britain)', 'Said that the United States is free (from Great Britain)'],
    a: ['announced our independence', 'declared our independence', 'united states is free', 'is free', 'was free', 'announced independence', 'declared independence'],
    n: 1
  },
  {
    q: 'What are two rights in the Declaration of Independence?',
    o: ['Life', 'Liberty', 'Pursuit of happiness'],
    a: ['life', 'liberty', 'pursuit of happiness'],
    n: 2
  },
  {
    q: 'What is freedom of religion?',
    o: ['You can practice any religion, or not practice a religion'],
    a: ['practice any religion', 'practice a religion', 'have a religion', 'have any religion'],
    n: 1
  },
  {
    q: 'What is the economic system in the United States?',
    o: ['Capitalist economy', 'Market economy'],
    a: ['capitalist', 'market'],
    n: 1
  },
  {
    q: 'What is the “rule of law”?',
    o: ['Everyone must follow the law', 'Leaders must obey the law', 'Government must obey the law', 'No one is above the law'],
    a: ['everyone must follow the law', 'obey the law', 'no one is above the law'],
    n: 1
  },
  {
    q: 'Name one branch or part of the government.',
    o: ['Congress', 'Legislative', 'Executive', 'President', 'Judicial', 'The courts'],
    a: ['congress', 'legislative', 'president', 'executive', 'judicial', 'courts'],
    n: 1
  },
  {
    q: 'What stops one branch of government from becoming too powerful?',
    o: ['Checks and balances', 'Separation of powers'],
    a: ['checks and balances', 'separation of powers'],
    n: 1
  },
  {
    q: 'Who is in charge of the executive branch?',
    o: ['The President'],
    a: ['president'],
    n: 1
  },
  {
    q: 'Who makes federal laws?',
    o: ['Congress', 'Senate and House (of Representatives)', '(U.S. or national) legislature'],
    a: ['congress', 'senate and house', 'senate & house', 'legislature', 'legislative'],
    n: 1
  },
  {
    q: 'What are the two parts of the U.S. Congress?',
    o: ['The Senate and House (of Representatives)'],
    a: ['senate & house', 'senate and house', 'senate and the house', 'senate & the house'],
    n: 1
  },
  {
    q: 'How many U.S. Senators are there?',
    o: ['One hundred (100)'],
    a: ['100', 'one hundred'],
    n: 1
  },
  {
    q: 'We elect a U.S. Senator for how many years?',
    o: ['Six (6)'],
    a: ['six', '6'],
    n: 1
  },
  {
    q: 'The House of Representatives has how many voting members?',
    o: ['Four hundred thirty-five (435)'],
    a: ['435', 'four hundred thirty-five', 'four hundred and thirty-five'],
    n: 1
  },
  {
    q: 'We elect a U.S. Representative for how many years?',
    o: ['Two (2)'],
    a: ['2', 'two'],
    n: 1
  },
  {
    q: 'Who does a U.S. Senator represent?',
    o: ['All people of the state'],
    a: ['all people', 'people of the state', 'the state'],
    n: 1
  },
  {
    q: 'Why do some states have more Representatives than other states?',
    o: ["(Because of) the state's population", '(Because) they have more people', '(Because) some states have more people'],
    a: ["population", "more people"],
    n: 1
  },
  {
    q: 'We elect a President for how many years?',
    o: ['Four (4)'],
    a: ['4', 'four'],
    n: 1
  },
  {
    q: 'In what month do we vote for President?',
    o: ['November'],
    a: ['november'],
    n: 1
  },
  {
    q: 'What is the name of the President of the United States now?',
    o: ['Joseph R. Biden, Jr.', 'Joe Biden', 'Biden'],
    a: ['biden'],
    n: 1
  },
  {
    q: 'What is the name of the Vice President of the United States now?',
    o: ['Kamala D. Harris', 'Kamala Harris', 'Harris'],
    a: ['harris'],
    n: 1
  },
  {
    q: 'If the President can no longer serve, who becomes President?',
    o: ['The Vice President'],
    a: ['vice president'],
    n: 1
  },
  {
    q: 'If both the President and the Vice President can no longer serve, who becomes President?',
    o: ['The Speaker of the House'],
    a: ['speaker of the house'],
    n: 1
  },
  {
    q: 'Who is the Commander in Chief of the military?',
    o: ['The President'],
    a: ['president'],
    n: 1
  },
  {
    q: 'Who signs bills to become laws?',
    o: ['The President'],
    a: ['president'],
    n: 1
  },
  {
    q: 'Who vetoes bills?',
    o: ['The President'],
    a: ['president'],
    n: 1
  },
  {
    q: 'What does the President’s Cabinet do?',
    o: ['Advises the President'],
    a: ['advise the president', 'advises the president', 'advises', 'advise'],
    n: 1
  },
  {
    q: 'What are two Cabinet-level positions?',
    o: ['Secretary of Agriculture', 'Secretary of Commerce', 'Secretary of Defense', 'Secretary of Education', 'Secretary of Energy', 'Secretary of Health and Human Services', 'Secretary of Homeland Security', 'Secretary of Housing and Urban Development', 'Secretary of the Interior', 'Secretary of Labor', 'Secretary of State', 'Secretary of Transportation', 'Secretary of the Treasury', 'Secretary of Veterans Affairs', 'Attorney General', 'Vice President'],
    a: ['secretary of agriculture', 'secretary of commerce', 'secretary of defense', 'secretary of education', 'secretary of energy', 'secretary of health and human services', 'secretary of homeland security', 'secretary of housing and urban development', 'secretary of the interior', 'secretary of labor', 'secretary of state', 'secretary of transportation', 'secretary of the treasury', 'secretary of veterans affairs', 'attorney general', 'vice president'],
    n: 1
  },
  {
    q: 'What does the judicial branch do?',
    o: ['Reviews laws', 'Explains laws', 'Resolves disputes (disagreements)', 'Decides if a law goes against the Constitution'],
    a: ['reviews laws', 'explains laws', 'resolves disputes', 'resolves disagreements', 'law goes against the constitution', 'unconstitutional'],
    n: 1
  },
  {
    q: 'What is the highest court in the United States?',
    o: ['The Supreme Court'],
    a: ['supreme court'],
    n: 1
  },
  {
    q: 'How many justices are on the Supreme Court?',
    o: ['Nine (9)'],
    a: ['9', 'nine'],
    n: 1
  },
  {
    q: 'Who is the Chief Justice of the United States now?',
    o: ['John Roberts', 'John G. Roberts, Jr.'],
    a: ['roberts'],
    n: 1
  },
  {
    q: 'Under our Constitution, some powers belong to the federal government. What is one power of the federal government?',
    o: ['To print money', 'To declare war', 'To create an army', 'To make treaties'],
    a: ['print money', 'declare war', 'create an army', 'make treaties'],
    n: 1
  },
  {
    q: 'Under our Constitution, some powers belong to the states. What is one power of the states?',
    o: ['Provide schooling and education', 'Provide protection (police)', 'Provide safety (fire departments)', "Give a driver's license", 'Approve zoning and land use'],
    a: ['schooling', 'education', 'protection', 'police', 'safety', 'fire department', 'fire departments', "driver's license", 'zoning', 'land use'],
    n: 1
  },
  {
    q: 'What are the two major political parties in the United States?',
    o: ['Democratic and Republican'],
    a: ['democrat', 'republican', 'democratic'],
    n: 2
  },
  {
    q: 'What is the political party of the President now?',
    o: ['Democratic (Party)'],
    a: ['democratic', 'democrat'],
    n: 1
  },
  {
    q: 'What is the name of the Speaker of the House of Representatives now?',
    o: ['Pelosi', 'Nancy Pelosi'],
    a: ['pelosi'],
    n: 1
  },
  {
    q: 'There are four amendments to the Constitution about who can vote. Describe one of them.',
    o: ['Citizens eighteen (18) and older (can vote)', 'You don’t have to pay (a poll tax) to vote', 'Any citizen can vote (women and men can vote)', 'A male citizen of any race (can vote)'],
    a: ['18', 'eighteen', "don't have to pay", 'any citizen can vote', 'any person can vote', 'anybody can vote', 'anyone can vote', 'women and men', 'men and women', 'any race'],
    n: 1
  },
  {
    q: 'What is one responsibility that is only for United States citizens?',
    o: ['Serve on a jury', 'Vote in a federal election'],
    a: ['jury', 'vote in a federal election', 'vote in federal elections'],
    n: 1
  },
  {
    q: 'Name one right only for United States citizens.',
    o: ['Vote in a federal election', 'Run for federal office'],
    a: ['federal office', 'federal election', 'federal elections'],
    n: 1
  },
  {
    q: 'What are two rights of everyone living in the United States?',
    o: ['Freedom of expression', 'Freedom of speech', 'Freedom of assembly', 'Freedom to petition the government', 'Freedom of religion', 'The right to bear arms'],
    a: ['expression', 'speech', 'assembly', 'petition', 'religion', 'bear arms'],
    n: 2
  },
  {
    q: 'What do we show loyalty to when we say the Pledge of Allegiance?',
    o: ['The United States', 'The flag'],
    a: ['united states', 'flag'],
    n: 1
  },
  {
    q: 'What is one promise you make when you become a United States citizen?',
    o: ['Give up loyalty to other countries', 'Defend the Constitution and laws of the United States', 'Obey the laws of the United States', 'Serve in the U.S. military (if needed)', 'Serve (do important work for) the nation (if needed)', 'Be loyal to the United States'],
    a: ['loyalty', 'loyal', 'constitution', 'laws', 'serve'],
    n: 1
  },
  {
    q: 'How old do citizens have to be to vote for President?',
    o: ['Eighteen (18) and older'],
    a: ['18', 'eighteen'],
    n: 1
  },
  {
    q: 'What are two ways that Americans can participate in their democracy?',
    o: ['Vote', 'Join a political party', 'Help with a campaign', 'Join a civic group', 'Join a community group', 'Give an elected official your opinion on an issue', 'Call Senators and Representatives', 'Publicly support or oppose an issue or policy', 'Run for office', 'Write to a newspaper'],
    a: ['vote', 'political party', 'campaign', 'civic group', 'community group', 'opinion', 'call', 'support', 'oppose', 'run for office', 'newspaper'],
    n: 2
  },
  {
    q: 'When is the last day you can send in federal income tax forms?',
    o: ['April 15'],
    a: ['april 15', 'april 15th', '15th of april', '15 of april'],
    n: 1
  },
  {
    q: 'When must all men register for the Selective Service?',
    o: ['At age eighteen (18)', 'Between eighteen (18) and twenty-six (26)'],
    a: ['18', '18 and 26', 'eighteen', 'eighteen and twenty-six', 'eighteen and twenty-six'],
    n: 1
  },
  {
    q: 'What is one reason colonists came to America?',
    o: ['Freedom', 'Political liberty', 'Religious freedom', 'Economic opportunity', 'Practice their religion', 'Escape persecution'],
    a: ['freedom', 'political liberty', 'religious freedom', 'economic opportunity', 'practice their religion', 'escape persecution'],
    n: 1
  },
  {
    q: 'Who lived in America before the Europeans arrived?',
    o: ['American Indians', 'Native Americans'],
    a: ['indians', 'native americans'],
    n: 1
  },
  {
    q: 'What group of people was taken to America and sold as slaves?',
    o: ['Africans', 'People from Africa'],
    a: ['africans', 'people from africa'],
    n: 1
  },
  {
    q: 'Why did the colonists fight the British?',
    o: ['Because of high taxes (taxation without representation)', 'Because the British army stayed in their houses (boarding, quartering)', 'Because they didn’t have self-government'],
    a: ['high taxes', 'taxation', 'boarding', 'quartering', 'stayed in their houses', 'self-government'],
    n: 1
  },
  {
    q: 'Who wrote the Declaration of Independence?',
    o: ['(Thomas) Jefferson'],
    a: ['jefferson'],
    n: 1
  },
  {
    q: 'When was the Declaration of Independence adopted?',
    o: ['July 4, 1776'],
    a: ['july 4 1776', 'july 4th 1776', 'july 4, 1776', 'july 4th, 1776'],
    n: 1
  },
  {
    q: 'There were 13 original states. Name three.',
    o: ['New Hampshire', 'Massachusetts', 'Rhode Island', 'Connecticut', 'New York', 'New Jersey', 'Pennsylvania', 'Delaware', 'Maryland', 'Virginia', 'North Carolina', 'South Carolina', 'Georgia'],
    a: ['new hampshire', 'massachusetts', 'rhode island', 'connecticut', 'new york', 'new jersey', 'pennsylvania', 'delaware', 'maryland', 'virginia', 'north carolina', 'south carolina', 'georgia'],
    n: 3
  },
  {
    q: 'What happened at the Constitutional Convention?',
    o: ['The Constitution was written', 'The Founding Fathers wrote the Constitution'],
    a: ['constitution was written', 'wrote the constitution'],
    n: 1
  },
  {
    q: 'When was the Constitution written?',
    o: ['1787'],
    a: ['1787'],
    n: 1
  },
  {
    q: 'The Federalist Papers supported the passage of the U.S. Constitution. Name one of the writers.',
    o: ['(James) Madison', '(Alexander) Hamilton', '(John) Jay', 'Publius'],
    a: ['madison', 'hamilton', 'jay', 'publius'],
    n: 1
  },
  {
    q: 'What is one thing Benjamin Franklin is famous for?',
    o: ['U.S. diplomat', 'Oldest member of the Constitutional Convention', 'First Postmaster General of the United States', 'Writer of “Poor Richard’s Almanac”', 'Started the first free libraries'],
    a: ['diplomat', 'constitutional convention', 'writer', 'free libraries', 'postmaster general'],
    n: 1
  },
  {
    q: 'Who is the “Father of Our Country”?',
    o: ['(George) Washington'],
    a: ['washington'],
    n: 1
  },
  {
    q: 'Who was the first President?',
    o: ['(George) Washington'],
    a: ['washington'],
    n: 1
  },
  {
    q: 'What territory did the United States buy from France in 1803?',
    o: ['The Louisiana Territory', 'Louisiana'],
    a: ['louisiana'],
    n: 1
  },
  {
    q: 'Name one war fought by the United States in the 1800s.',
    o: ['War of 1812', 'Mexican-American War', 'Civil War', 'Spanish-American War'],
    a: ['war of 1812', 'mexican american war', 'civil war', 'spanish american war'],
    n: 1
  },
  {
    q: 'Name the U.S. war between the North and the South.',
    o: ['The Civil War', 'The War Between the States'],
    a: ['civil war', 'war between the states'],
    n: 1
  },
  {
    q: 'Name one problem that led to the Civil War.',
    o: ['Slavery', 'Economic reasons', "States' rights"],
    a: ['slavery', 'economic reasons', 'states rights', "states' rights", "state's rights"],
    n: 1
  },
  {
    q: 'What was one important thing that Abraham Lincoln did?',
    o: ['Freed the slaves (Emancipation Proclamation)', 'Saved (or preserved) the Union', 'Led the United States during the Civil War'],
    a: ['freed the slaves', 'emancipation', 'saved the union', 'preserved the union', 'led the united states', 'president', 'civil war'],
    n: 1
  },
  {
    q: 'What did the Emancipation Proclamation do?',
    o: ['Freed the slaves', 'Freed slaves in the Confederacy', 'Freed slaves in the Confederate states', 'Freed slaves in most Southern states'],
    a: ['freed the slaves', 'free the slaves', 'free slaves', 'freed slaves'],
    n: 1
  },
  {
    q: 'What did Susan B. Anthony do?',
    o: ['Fought for women’s rights', 'Fought for civil rights'],
    a: ["women's rights", "womens' rights", 'civil rights'],
    n: 1
  },
  {
    q: 'Name one war fought by the United States in the 1900s.',
    o: ['World War I', 'World War II', 'Korean War', 'Vietnam War', '(Persian) Gulf War'],
    a: ['world war one', 'world war two', 'world war 1', 'world war 2', 'wwi', 'wwii', 'world war i', 'world war ii', 'korean war', 'vietnam war', 'persian gulf war', 'gulf war'],
    n: 1
  },
  {
    q: 'Who was President during World War I?',
    o: ['(Woodrow) Wilson'],
    a: ['woodrow wilson', 'wilson'],
    n: 1
  },
  {
    q: 'Who was President during the Great Depression and World War II?',
    o: ['(Franklin) Roosevelt'],
    a: ['franklin roosevelt', 'roosevelt', 'fdr'],
    n: 1
  },
  {
    q: 'Who did the United States fight in World War II?',
    o: ['Japan, Germany, and Italy'],
    a: ['japan', 'germany', 'italy'],
    n: 3
  },
  {
    q: 'Before he was President, Eisenhower was a general. What war was he in?',
    o: ['World War II'],
    a: ['world war 2', 'world war ii', 'wwii', 'ww2'],
    n: 1
  },
  {
    q: 'During the Cold War, what was the main concern of the United States?',
    o: ['Communism'],
    a: ['communism'],
    n: 1
  },
  {
    q: 'What movement tried to end racial discrimination?',
    o: ['Civil rights (movement)'],
    a: ['civil rights'],
    n: 1
  },
  {
    q: 'What did Martin Luther King, Jr. do?',
    o: ['Fought for civil rights', 'Worked for equality for all Americans'],
    a: ['civil rights', 'equality'],
    n: 1
  },
  {
    q: 'What major event happened on September 11, 2001, in the United States?',
    o: ['Terrorists attacked the United States'],
    a: ['terrorists', 'terrorist', 'twin towers', 'world trade center'],
    n: 1
  },
  {
    q: 'Name one American Indian tribe in the United States.',
    o: ['Cherokee', 'Navajo', 'Sioux', 'Chippewa', 'Choctaw', 'Pueblo', 'Apache', 'Iroquois', 'Creek', 'Blackfeet', 'Seminole', 'Cheyenne', 'Arawak', 'Shawnee', 'Mohegan', 'Huron', 'Oneida', 'Lakota', 'Crow', 'Teton', 'Hopi', 'Inuit'],
    a: ['cherokee', 'navajo', 'sioux', 'chippewa', 'choctaw', 'pueblo', 'apache', 'iroquois', 'creek', 'blackfeet', 'seminole', 'cheyenne', 'arawak', 'shawnee', 'mohegan', 'huron', 'oneida', 'lakota', 'crow', 'teton', 'hopi', 'inuit'],
    n: 1
  },
  {
    q: 'Name one of the two longest rivers in the United States.',
    o: ['Missouri (River)', 'Mississippi (River)'],
    a: ['missouri', 'mississippi'],
    n: 1
  },
  {
    q: 'What ocean is on the West Coast of the United States?',
    o: ['Pacific (Ocean)'],
    a: ['pacific'],
    n: 1
  },
  {
    q: 'What ocean is on the East Coast of the United States?',
    o: ['Atlantic (Ocean)'],
    a: ['atlantic'],
    n: 1
  },
  {
    q: 'Name one U.S. territory.',
    o: ['Puerto Rico', 'U.S. Virgin Islands', 'American Samoa', 'Northern Mariana Islands', 'Guam'],
    a: ['puerto rico', 'u.s. virgin islands', 'us virgin islands', 'samoa', 'northern mariana islands', 'guam'],
    n: 1
  },
  {
    q: 'Name one state that borders Canada.',
    o: ['Maine', 'New Hampshire', 'Vermont', 'New York', 'Pennsylvania', 'Ohio', 'Michigan', 'Minnesota', 'North Dakota', 'Montana', 'Idaho', 'Washington', 'Alaska'],
    a: ['maine', 'new hampshire', 'vermont', 'new york', 'pennsylvania', 'ohio', 'michigan', 'minnesota', 'north dakota', 'montana', 'idaho', 'washington', 'alaska'],
    n: 1
  },
  {
    q: 'Name one state that borders Mexico.',
    o: ['California', 'Arizona', 'New Mexico', 'Texas'],
    a: ['california', 'arizona', 'new mexico', 'texas'],
    n: 1
  },
  {
    q: 'What is the capital of the United States?',
    o: ['Washington, D.C.'],
    a: ['washington', 'washington, d.c.', 'washington d c', 'washington, d c'],
    n: 1
  },
  {
    q: 'Where is the Statue of Liberty?',
    o: ['New York (Harbor)', 'Liberty Island', 'New Jersey', 'Near New York City', 'On the Hudson (River)'],
    a: ['new york', 'liberty island', 'new jersey', 'hudson'],
    n: 1
  },
  {
    q: 'Why does the flag have 13 stripes?',
    o: ['Because there were 13 original colonies', 'Because the stripes represent the original colonies'],
    a: ['original colonies', 'colonies'],
    n: 1
  },
  {
    q: 'Why does the flag have 50 stars?',
    o: ['Because there is one star for each state', 'Because each star represents a state', 'Because there are 50 states'],
    a: ['50 states', 'state', 'states'],
    n: 1
  },
  {
    q: 'What is the name of the national anthem?',
    o: ['The Star-Spangled Banner'],
    a: ['star spangled banner', 'star-spangled banner'],
    n: 1
  },
  {
    q: 'When do we celebrate Independence Day?',
    o: ['July 4'],
    a: ['july 4', 'july 4th', 'fourth of july', '4th of july'],
    n: 1
  },
  {
    q: 'Name two national U.S. holidays.',
    o: ["New Year's Day", 'Martin Luther King, Jr. Day', "Presidents' Day", 'Memorial Day', 'Independence Day', 'Labor Day', 'Columbus Day', 'Veterans Day', 'Thanksgiving', 'Christmas'],
    a: ['new year', 'new years', "new year's", 'martin luther king', 'mlk', 'presidents day', "presidents' day", "president's day", 'memorial', 'independence', 'thanksgiving', 'labor', 'colombus', 'veterans', "veteran's", "veterans'", 'christmas'],
    n: 2
  }
]

let usedQuestions = []
let currentQuestionIndex = 0
let numCorrect = 0
let correctAnswer = []
let officialAnswer = []
let acceptingResponses = false
let content = ''

recognition.continuous = true

recognition.onstart = function () {
  instructions.innerText = 'Voice recognition is on'
}

recognition.onspeechend = function () {
  instructions.innerText = 'No activity'
}

recognition.onerror = function () {
  instructions.innerText = 'Try again'
}

recognition.onresult = function (event) {
  var current = event.resultIndex
  var transcript = event.results[current][0].transcript
  content += transcript.toLowerCase()
  answerBox.value = content
}

startBtn.addEventListener('click', function () {
  if (content.length) {
    content += ''
  }
  if (startBtn.innerText === 'Record') {
    if (acceptingResponses) {
      startBtn.innerText = 'Stop Recording'
      recognition.start()
    } else {
      instructions.innerText = 'Responses are not being taken at the moment'
    }
  } else {
    resetStartBtn()
  }
})

clearBtn.addEventListener('click', function () {
  content = ''
  answerBox.value = ''
  console.log(content)
  console.log(answerBox.value)
})

submitBtn.addEventListener('click', function () {
  if (submitBtn.innerText === 'Submit') {
    console.log(usedQuestions.length)
    if (usedQuestions.length === MAX_QUESTIONS) {
      submitBtn.innerText = 'See Results'
    } else {
      submitBtn.innerText = 'Next Question'
    }
    resetStartBtn()
    judgeAnswer()
  } else if (submitBtn.innerText === 'Next Question') {
    if (usedQuestions.length + 1 <= MAX_QUESTIONS) {
      status.innerText = `${usedQuestions.length + 1} of ${MAX_QUESTIONS}`
    }
    submitBtn.innerText = 'Submit'
    generateQuestion()
  } else {
    // See Results
    tallyScore()
  }
})

resetBtn.addEventListener('click', function () {
  startGame()
})

speakBtn.addEventListener('click', function () {
  const msg = new SpeechSynthesisUtterance()
  const voices = window.speechSynthesis.getVoices()
  msg.voice = voices['Google US English']
  msg.rate = 0.9
  msg.pitch = 1
  msg.text = questions[currentQuestionIndex].q
  speechSynthesis.speak(msg)
})

answerBox.addEventListener('input', function () {
  content = answerBox.innerText
})

function showOfficialAnswer(isCorrect) {
  let output = ''
  if (isCorrect) {
    output += 'Correct! '
    numCorrect++
  } else {
    output += 'Incorrect ... '
  }
  output += 'The answer is:'
  officialAnswer.forEach(function (answer) {
    output += `\n\n- ${answer}`
  })
  questionsCorrect.innerText = `${numCorrect} Correct`
  officialAnswerDisplay.innerText = output
}

function judgeAnswer() {
  acceptingResponses = false
  const userInput = answerBox.value
  officialAnswer = questions[currentQuestionIndex].o
  answersNeeded = questions[currentQuestionIndex].n
  let counter = 0
  correctAnswer.forEach(function (answer) {
    if (userInput.includes(answer)) {
      counter++
    }
  })
  if (counter >= answersNeeded) {
    showOfficialAnswer(true)
  } else {
    showOfficialAnswer(false)
  }
}

function resetStartBtn() {
  startBtn.innerText = 'Record'
  recognition.stop()
  instructions.innerText = 'Voice recognition is off'
}

function setupQuestion() {
  questionDisplay.innerText = questions[currentQuestionIndex].q
  correctAnswer = questions[currentQuestionIndex].a
  acceptingResponses = true
}

function generateQuestion() {
  if (usedQuestions.length === MAX_QUESTIONS) {
    tallyScore()
  } else {
    currentQuestionIndex = 0
    content = ''
    answerBox.value = ''
    officialAnswerDisplay.innerText = ''
    const numQuestions = questions.length
    while (true) {
      currentQuestionIndex = Math.floor(Math.random() * numQuestions)
      if (!usedQuestions.includes(currentQuestionIndex)) {
        usedQuestions.push(currentQuestionIndex)
        break
      }
    }
    setupQuestion()
  }
}

function tallyScore() {
  startBtn.style.display = 'none'
  clearBtn.style.display = 'none'
  submitBtn.style.display = 'none'
  resetBtn.style.display = 'block'
  const percentage = Math.round(numCorrect / MAX_QUESTIONS * 100)
  let output = ''
  if (numCorrect >= 6) {
    output += `Congratulations! You answered ${numCorrect} out of ${MAX_QUESTIONS} questions correctly and earned a passing grade of ${percentage}%.`
  } else {
    output += `Good job. You answered ${numCorrect} out of ${MAX_QUESTIONS} questions correctly, which is ${percentage}%. You must answer at least 6 questions correctly to pass. Try again!`
  }
  officialAnswerDisplay.innerText = output
}

function startGame() {
  usedQuestions = []
  numCorrect = 0
  startBtn.style.display = 'block'
  clearBtn.style.display = 'block'
  submitBtn.style.display = 'block'
  submitBtn.innerText = 'Submit'
  resetBtn.style.display = 'none'
  status.innerText = `1 of ${MAX_QUESTIONS}`
  questionsCorrect.innerText = '0 Correct'
  generateQuestion()
}

startGame()