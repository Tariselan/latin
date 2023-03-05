// consts and vars

const refTable = document.getElementById('noun-table');
function showTable() {
    refTable.style.display = 'block';
}
function hideTable() {
    refTable.style.display = 'none';
}
let tableVis = 0;
function Table() {
    if (tableVis == 0) {
        showTable();
        tableVis++;
    }
    else {
        hideTable();
        tableVis--;
    }
}

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
            n: 'servus',
            a: 'servum',
            g: 'servi',
            d: 'servo',
            ab: 'servo'
        },
        pl: {
            n: 'servi',
            a: 'servos',
            g: 'servorum',
            d: 'servis',
            ab: 'servis'
        }
    },
    puer: {
        word: "puer (m) 2",
        sing: {
            n: 'puer',
            a: 'puerum',
            g: 'pueri',
            d: 'puero',
            ab: 'puero'
        },
        pl: {
            n: 'pueri',
            a: 'pueros',
            g: 'puerorum',
            d: 'pueris',
            ab: 'pueris'
        }
    },
    baculum: {
        word: "baculum (n) 2",
        sing: {
            n: 'baculum',
            a: 'baculum',
            g: 'baculi',
            d: 'baculo',
            ab: 'baculo'
        },
        pl: {
            n: 'bacula',
            a: 'bacula',
            g: 'baculorum',
            d: 'baculis',
            ab: 'baculis'
        }
    },
    vox: {
        word: "vox (f) 3",
        sing: {
            n: 'vox',
            a: 'vocem',
            g: 'vocis',
            d: 'voci',
            ab: 'voce'
        },
        pl: {
            n: 'voces',
            a: 'voces',
            g: 'vocum',
            d: 'vocibus',
            ab: 'vocibus'
        }
    },
    civis: {
        word: "civis (m) 3",
        sing: {
            n: 'civis',
            a: 'civem',
            g: 'civis',
            d: 'civi',
            ab: 'cive'
        },
        pl: {
            n: 'cives',
            a: 'cives',
            g: 'civium',
            d: 'civibus',
            ab: 'civibus'
        }
    },
    nomen: {
        word: "nomen (n) 3",
        sing: {
            n: 'nomen',
            a: 'nomen',
            g: 'nomenis',
            d: 'nomini',
            ab: 'nomine'
        },
        pl: {
            n: 'nomina',
            a: 'nomina',
            g: 'nominum',
            d: 'nominibus',
            ab: 'nominibus'
        }
    },
    manus: {
        word: "manus (f) 4",
        sing: {
            n: 'manus',
            a: 'manum',
            g: 'manui',
            d: 'manui',
            ab: 'manu'
        },
        pl: {
            n: 'manus',
            a: 'manus',
            g: 'manuum',
            d: 'manuum',
            ab: 'manibus'
        }
    },
    cornu: {
        word: "cornu (n) 4",
        sing: {
            n: 'cornu',
            a: 'cornu',
            g: 'cornus',
            d: 'cornu',
            ab: 'cornu'
        },
        pl: {
            n: 'cornua',
            a: 'cornua',
            g: 'cornuum',
            d: 'cornibus',
            ab: 'cornibus'
        }
    },
    dies: {
        word: "dies (m) 5",
        sing: {
            n: 'dies',
            a: 'diem',
            g: 'diei',
            d: 'diei',
            ab: 'die'
        },
        pl: {
            n: 'dies',
            a: 'dies',
            g: 'dierum',
            d: 'diebus',
            ab: 'diebus'
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
    if (event.key === ",") {
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
                if (wordCounter == 10) {
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

//

function goback() {
    window.location.replace('../index.html')
}
