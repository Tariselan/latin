// consts and vars

const userAnswer = document.getElementById('textbox');
const nouns = {
    puella: {
        word: "puella (f) 1",
        sing: {
            n: 'puella',
            a: 'puellam',
            g: 'puellae',
            d: 'puellae',
            ab: 'puella'
        },
        pl: {
            n: 'puellae',
            a: 'puellas',
            g: 'puellarum',
            d: 'puellis',
            ab: 'puellis'
        }
    },
    servus: {
        word: "servus (m) 2",
        sing: {
            n: '',
            a: '',
            g: '',
            d: '',
            ab: ''
        },
        pl: {
            n: '',
            a: '',
            g: '',
            d: '',
            ab: ''
        }
    },
    puer: {
        word: "puer (m) 2",
        sing: {
            n: '',
            a: '',
            g: '',
            d: '',
            ab: ''
        },
        pl: {
            n: '',
            a: '',
            g: '',
            d: '',
            ab: ''
        }
    },
    baculum: {
        word: "baculum (n) 2",
        sing: {
            n: '',
            a: '',
            g: '',
            d: '',
            ab: ''
        },
        pl: {
            n: '',
            a: '',
            g: '',
            d: '',
            ab: ''
        }
    },
    vox: {
        word: "vox (f) 3",
        sing: {
            n: '',
            a: '',
            g: '',
            d: '',
            ab: ''
        },
        pl: {
            n: '',
            a: '',
            g: '',
            d: '',
            ab: ''
        }
    },
    civis: {
        word: "civis (m) 3",
        sing: {
            n: '',
            a: '',
            g: '',
            d: '',
            ab: ''
        },
        pl: {
            n: '',
            a: '',
            g: '',
            d: '',
            ab: ''
        }
    },
    nomen: {
        word: "nomen (n) 3",
        sing: {
            n: '',
            a: '',
            g: '',
            d: '',
            ab: ''
        },
        pl: {
            n: '',
            a: '',
            g: '',
            d: '',
            ab: ''
        }
    },
    manus: {
        word: "manus (f) 4",
        sing: {
            n: '',
            a: '',
            g: '',
            d: '',
            ab: ''
        },
        pl: {
            n: '',
            a: '',
            g: '',
            d: '',
            ab: ''
        }
    },
    cornu: {
        word: "cornu (n) 4",
        sing: {
            n: '',
            a: '',
            g: '',
            d: '',
            ab: ''
        },
        pl: {
            n: '',
            a: '',
            g: '',
            d: '',
            ab: ''
        }
    },
    dies: {
        word: "dies (m) 5",
        sing: {
            n: '',
            a: '',
            g: '',
            d: '',
            ab: ''
        },
        pl: {
            n: '',
            a: '',
            g: '',
            d: '',
            ab: ''
        }
    },
}
const words = ['puella', 'servus', 'puer', 'baculum', 'vox', 'civis', 'nomen', 'manus', 'cornu', 'dies'];
const words_full = ['Puella', 'Servus', 'Puer', 'Baculum', 'Vox', 'Civis', 'Nomen', 'Manus', 'Cornu', 'Dies'];

const number = ['sing', 'pl'];
const number_full = ['Singular', 'Plural'];

const cases = ['n', 'a', 'g', 'd', 'ab'];
const cases_full = ['Nominative', 'Accusative', 'Genitive', 'Dative', 'Ablative'];

var caseCounter = 0;
var numberCounter = 0;
var wordCounter = 0;
var correctWord = '';
let q = 0;
let changewordkey = true;

var answers = {
    correct: 0,
    incorrect: 0
}

// event listeners

function keypress(a) {
    if (a == "q") {
        userAnswer.value = '';
        if (q == 0) {
            q++;
            alert('RANDOM');
        }
        else {
            q--;
            alert('STANDARD');
        }
    }
    if (a == '`') {
        userAnswer.value = '';
        if (changewordkey) {
            changewordkey = false;
            alert('no changing');
        }
        else {
            changewordkey = true;
            alert('changing activated');
        }
    }
}

userAnswer.addEventListener('keypress', function(event) {
    if (event.key === "Enter") {
        checkAnswer();
    }
    if (event.key === "q") {
        keypress("q");
    }
    if (event.key === "`") {
        keypress("`");
    }
});

// functions

function updateHTML(a, b, c) {
    document.getElementById('wordToWrite').innerHTML = a;
    document.getElementById('numberToWrite').innerHTML = b;
    document.getElementById('caseToWrite').innerHTML = c;
}

function chooseWord() {
    correctWord = nouns[words[wordCounter]][number[numberCounter]][cases[caseCounter]];
    caseCounter++;
    if (caseCounter == 5) {
        caseCounter = 0;
        numberCounter++;
        if (numberCounter == 2) {
            numberCounter = 0;
            if (changewordkey) {
                wordCounter++;
                if (wordCounter == 9) {
                    wordCounter = 0;
                }
            }
        }
    }
}
function chooseWord_RAND() {
    function word_RAND() {
        let x = Math.round(Math.random()*9);
        return words[x];
    }
    function number_RAND() {
        let x = Math.round(Math.random());
        return number[x];
    }
    function case_RAND() {
        let x = Math.round(Math.random()*4);
        return cases[x];
    }
    correctWord = nouns[word_RAND()][number_RAND()][case_RAND()];
}

function checkAnswer() {
    if (q == 0) {
        chooseWord();
        updateHTML(words_full[wordCounter], number_full[numberCounter], cases_full[caseCounter]); 
    }
    else if (q == 1) {
        chooseWord_RAND();
    }
    if (userAnswer.value == correctWord) {
        answers.correct++;
        document.getElementById('correct').innerHTML = answers.correct;
    }
    else if (userAnswer.value != correctWord) {
        answers.incorrect++;
        document.getElementById('incorrect').innerHTML = answers.incorrect;
    }
    userAnswer.value = '';
}

chooseWord();
caseCounter--;
updateHTML(words_full[wordCounter], number_full[numberCounter], cases_full[caseCounter]);