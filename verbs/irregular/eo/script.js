// consts and vars
const userAnswer = document.getElementById('textbox');

/*
fs = first singular
ss = second singular
ts = third singular
fp = first plural
sp = second plural
tp = third plural
*/

const sum = {
    indicative: {
        active: {
            present: {
                fs: 'eo',
                ss: 'is',
                ts: 'it',
                fp: 'imus',
                sp: 'itis',
                tp: 'eunt' 
            },
            imperfect: {
                fs: 'ibam',
                ss: 'ibas',
                ts: 'ibat',
                fp: 'ibamus',
                sp: 'ibatis',
                tp: 'ibant'
            },
            future: {
                fs: 'ibo',
                ss: 'ibis',
                ts: 'ibit',
                fp: 'ibimus',
                sp: 'ibitis',
                tp: 'ibunt'
            },
            perfect: {
                fs: 'fui',
                ss: 'fuisti',
                ts: 'fuit',
                fp: 'fuimus',
                sp: 'fuistis',
                tp: 'fuerunt' 
            },
            pluperfect: {
                fs: 'fueram',
                ss: 'fueras',
                ts: 'fuerat',
                fp: 'fueramus',
                sp: 'fueratis',
                tp: 'ferant' 
            },
            futurePerfect: {
                fs: 'fuero',
                ss: 'fueris',
                ts: 'fuerit',
                fp: 'fuerimus',
                sp: 'fueritis',
                tp: 'fuerint' 
            }
        }
    },
    subjunctive: {
        active: {
            present: {
                fs: 'sim',
                ss: 'sis',
                ts: 'sit',
                fp: 'simus',
                sp: 'sitis',
                tp: 'sint' 
            },
            imperfect: {
                fs: 'essem',
                ss: 'esses',
                ts: 'esset',
                fp: 'essemus',
                sp: 'essetis',
                tp: 'essent'
            },
            perfect: {
                fs: 'fuerim',
                ss: 'fueris',
                ts: 'fuerit',
                fp: 'fuerimus',
                sp: 'fueritis',
                tp: 'fuerint'
            },
            pluperfect: {
                fs: 'fuissem',
                ss: 'fuisses',
                ts: 'fuisset',
                fp: 'fuissemus',
                sp: 'fuissetis',
                tp: 'fuissent' 
            }
        }
    }
}

const mood = ['indicative', 'subjunctive'];
const mood_full = ['Indicative', 'Subjunctive'];

const voice = ['active'];
const voice_full = ['Active'];

const tenseI = ['present', 'imperfect', 'future', 'perfect', 'pluperfect', 'futurePerfect']; // ind tense
const tenseI_full = ['Present', 'Imperfect', 'Future', 'Perfect', 'Pluperfect', 'Future Perfect'];

const tenseS = ['present', 'imperfect', 'perfect', 'pluperfect']; // subj tense
const tenseS_full = ['Present', 'Imperfect', 'Perfect', 'Pluperfect'];

const person = ['fs', 'ss', 'ts', 'fp', 'sp', 'tp'];
const person_full = ['First Person Singular', 'Second Person Singular', 'Third Person Singular', 'First Person Plural', 'Second Person Plural', 'Third Person Plural'];

var moodCounter = 0;
var voiceCounter = 0;
var tenseICounter = 0;
var tenseSCounter = 0;
var personCounter = 0;
var correctWord = '';

let changetensekey = true;

var answers = {
    correct: 0,
    incorrect: 0
}

// event listeners

userAnswer.addEventListener('keypress', function(event) {
    if (event.key === "Enter") {
        checkAnswer();
    }
    if (event.key === "`") {
        userAnswer.value = '';
        if (changetensekey) {
            changetensekey = false;
            alert('no changing');
        }
        else {
            changetensekey = true;
            alert('changing activated');
        }
    }
});

// functions

function updateHTML(a, b, c, d) {
    document.getElementById('moodToWrite').innerHTML = a;
    document.getElementById('voiceToWrite').innerHTML = b;
    document.getElementById('tenseToWrite').innerHTML = c;
    document.getElementById('personToWrite').innerHTML = d;
}

function chooseWord() {
    if (!moodCounter) {
        correctWord = sum[mood[moodCounter]][voice[voiceCounter]][tenseI[tenseICounter]][person[personCounter]];
    }
    else {
        correctWord = sum[mood[moodCounter]][voice[voiceCounter]][tenseS[tenseSCounter]][person[personCounter]];
    }
    personCounter++;
    if (changetensekey) {
        if (personCounter == 6) {
            personCounter = 0;
            if (moodCounter == 0) {
                tenseICounter++;
                if (tenseICounter == 6) {
                    tenseICounter = 0;
                    moodCounter++;
                }
            }
            else {
                tenseSCounter++;
                if (tenseSCounter == 4) {
                    tenseSCounter = 0;
                    moodCounter = 0;
                }
            }
        }
    }
    if (!changetensekey) {
        if (personCounter == 6) {
            personCounter = 0;
        }
    }
}

function checkAnswer() {
    chooseWord();
    if (moodCounter == 0) {
       updateHTML(mood_full[moodCounter], voice_full[voiceCounter], tenseI_full[tenseICounter], person_full[personCounter]); 
    }
    else {
        updateHTML(mood_full[moodCounter], voice_full[voiceCounter], tenseS_full[tenseSCounter], person_full[personCounter]); 
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
personCounter--;
updateHTML(mood_full[moodCounter], voice_full[voiceCounter], tenseI_full[tenseICounter], person_full[personCounter]);

//