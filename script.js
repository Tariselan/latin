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
const number = ['sing', "pl"];
const cases = ['n', 'a', 'g', 'd', 'ab'];
var counter = 0;
var correctWord = '';
let q = 0;

// event listeners

userAnswer.addEventListener('keypress', function(event) {
    if (event.key === "Enter") {
        checkAnswer();
    }
    if (event.key === "q") {
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
});

// functions

function chooseWord() {
    if (counter == 10) {
        counter = 0;
    }
    counter++;
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
    if (q == 0) {}
    else if (q == 1) {
        chooseWord_RAND();
    }
    userAnswer.value = '';
}