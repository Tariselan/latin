// consts and vars

const userAnswer = document.getElementById('textbox');
const adjectives = {
    magnus: {
        masc: {
            sing: {
                n: "magnus",
                a: "magnum",
                g: "magni",
                d: "magno",
                ab: "magno",
            },
            pl: {
                n: "magni",
                a: "magnos",
                g: "magnorum",
                d: "magnis",
                ab: "magnis",
            }
        },
        fem: {
            sing: {
                n: "",
                a: "",
                g: "",
                d: "",
                ab: "",
            },
            pl: {
                n: "",
                a: "",
                g: "",
                d: "",
                ab: "",
            }
        },
        ne: {
            sing: {
                n: "",
                a: "",
                g: "",
                d: "",
                ab: "",
            },
            pl: {
                n: "",
                a: "",
                g: "",
                d: "",
                ab: "",
            }
        }
    },
    omnis: {
        masc: {
            sing: {
                n: "",
                a: "",
                g: "",
                d: "",
                ab: "",
            },
            pl: {
                n: "",
                a: "",
                g: "",
                d: "",
                ab: "",
            }
        },
        fem: {
            sing: {
                n: "",
                a: "",
                g: "",
                d: "",
                ab: "",
            },
            pl: {
                n: "",
                a: "",
                g: "",
                d: "",
                ab: "",
            }
        },
        ne: {
            sing: {
                n: "",
                a: "",
                g: "",
                d: "",
                ab: "",
            },
            pl: {
                n: "",
                a: "",
                g: "",
                d: "",
                ab: "",
            }
        }
    },
    ingens: {
        masc: {
            sing: {
                n: "",
                a: "",
                g: "",
                d: "",
                ab: "",
            },
            pl: {
                n: "",
                a: "",
                g: "",
                d: "",
                ab: "",
            }
        },
        fem: {
            sing: {
                n: "",
                a: "",
                g: "",
                d: "",
                ab: "",
            },
            pl: {
                n: "",
                a: "",
                g: "",
                d: "",
                ab: "",
            }
        },
        ne: {
            sing: {
                n: "",
                a: "",
                g: "",
                d: "",
                ab: "",
            },
            pl: {
                n: "",
                a: "",
                g: "",
                d: "",
                ab: "",
            }
        }
    }
}

const words = ['magnus', 'omnis', 'ingens'];
const words_full = ['Magnus', 'Omnis', 'Ingens'];

const number = ['sing', 'pl'];
const number_full = ['Singular', 'Plural'];

const cases = ['n', 'a', 'g', 'd', 'ab'];
const cases_full = ['Nominative', 'Accusative', 'Genitive', 'Dative', 'Ablative'];

const genders = ['masc', 'fem', 'ne'];
const genders_full = ['Masculine', 'Feminine', 'Neuter'];

var correctWord = '';
var caseCounter = 0;
var numberCounter = 0;
var genderCounter = 0;
var wordCounter = 0;
var correctWord = '';

var answers = {
    correct: 0,
    incorrect: 0
}

// event listeners

userAnswer.addEventListener('keypress', function (event) {
    if (event.key === "Enter") {
        checkAnswer();
    }
});

// functions

function chooseWord() {
    correctWord = adjectives[words[wordCounter]][genders[genderCounter]][number[numberCounter]][cases[caseCounter]];
    caseCounter++;
    if (caseCounter == 5) {
        caseCounter = 0;
        numberCounter++;
        if (numberCounter == 2) {
            numberCounter = 0;
            genderCounter++;
            if (genderCounter == 2) {
                genderCounter = 0;
                wordCounter++;
                if (wordCounter == 2) {
                    wordCounter = 0;
                }
            }
        }
    }
}

function updateHTML(a, b, c, d) {
    document.getElementById('wordToWrite').innerHTML = a;
    document.getElementById('numberToWrite').innerHTML = b;
    document.getElementById('caseToWrite').innerHTML = c;
    document.getElementById('genderToWrite').innerHTML = d;
}

function checkAnswer() {
    chooseWord();
    updateHTML(words_full[wordCounter], number_full[numberCounter], cases_full[caseCounter], genders_full[genderCounter]); 
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

//

chooseWord();
caseCounter--;
updateHTML(words_full[wordCounter], number_full[numberCounter], cases_full[caseCounter], genders_full[genderCounter]);

function goback() {
    window.location.replace('../index.html')
}