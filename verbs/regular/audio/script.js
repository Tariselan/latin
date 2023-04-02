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

const audio = {
    indicative: {
        active: {
            present: {
                fs: 'audio',
                ss: 'audis',
                ts: 'audit',
                fp: 'audimus',
                sp: 'auditis',
                tp: 'audiunt' 
            },
            imperfect: {
                fs: 'audiebam',
                ss: 'audiebas',
                ts: 'audiebat',
                fp: 'audiebamus',
                sp: 'audiebatis',
                tp: 'audiebant'
            },
            future: {
                fs: 'audiam',
                ss: 'audies',
                ts: 'audiet',
                fp: 'audiemus',
                sp: 'audietis',
                tp: 'audient'
            },
            perfect: {
                fs: 'audivi',
                ss: 'audivisti',
                ts: 'audivit',
                fp: 'audivimus',
                sp: 'audivistis',
                tp: 'audiverunt' 
            },
            pluperfect: {
                fs: 'audiveram',
                ss: 'audiveras',
                ts: 'audiverat',
                fp: 'audiveramus',
                sp: 'audiveratis',
                tp: 'audiverant' 
            },
            futurePerfect: {
                fs: 'audivero',
                ss: 'audiveris',
                ts: 'audiverit',
                fp: 'audiverimus',
                sp: 'audiveritis',
                tp: 'audiverint' 
            }
        },
        passive: {
            present: {
                fs: 'audior',
                ss: 'audiris',
                ts: 'auditur',
                fp: 'audimur',
                sp: 'audimini',
                tp: 'audiuntur' 
            },
            imperfect: {
                fs: 'audiebar',
                ss: 'audiebaris',
                ts: 'audiebatur',
                fp: 'audiebamur',
                sp: 'audiebamini',
                tp: 'audiebantur'
            },
            future: {
                fs: 'audiar',
                ss: 'audieris',
                ts: 'audietur',
                fp: 'audiemur',
                sp: 'audiemini',
                tp: 'audientur'
            },
            perfect: {
                fs: 'auditus sum',
                ss: 'auditus es',
                ts: 'auditus est',
                fp: 'auditus sumus',
                sp: 'auditus estis',
                tp: 'auditus sunt' 
            },
            pluperfect: {
                fs: 'auditus eram',
                ss: 'auditus eras',
                ts: 'auditus erat',
                fp: 'auditus eramus',
                sp: 'auditus eratis',
                tp: 'auditus erunt' 
            },
            futurePerfect: {
                fs: 'auditus ero',
                ss: 'auditus eris',
                ts: 'auditus erit',
                fp: 'auditus erimus',
                sp: 'auditus eritis',
                tp: 'auditus erunt' 
            }
        }
    },
    subjunctive: {
        active: {
            present: {
                fs: 'audiam',
                ss: 'audias',
                ts: 'audiat',
                fp: 'audiamus',
                sp: 'audiatis',
                tp: 'audiant' 
            },
            imperfect: {
                fs: 'audirem',
                ss: 'audires',
                ts: 'audiret',
                fp: 'audiremus',
                sp: 'audiretis',
                tp: 'audirent'
            },
            perfect: {
                fs: 'audiverim',
                ss: 'audiveris',
                ts: 'audiverit',
                fp: 'audiverimus',
                sp: 'audiveritis',
                tp: 'audiverint'
            },
            pluperfect: {
                fs: 'audivissem',
                ss: 'audivisses',
                ts: 'audivisset',
                fp: 'audivissemus',
                sp: 'audivissetis',
                tp: 'audivissent' 
            }
        },
        passive: {
            present: {
                fs: 'audiar',
                ss: 'audiaris',
                ts: 'audiatur',
                fp: 'audiamur',
                sp: 'audiamini',
                tp: 'audiantur' 
            },
            imperfect: {
                fs: 'audirer',
                ss: 'audireris',
                ts: 'audiretur',
                fp: 'audiremur',
                sp: 'audiremini',
                tp: 'audirentur'
            },
            perfect: {
                fs: 'auditus sim',
                ss: 'auditus sis',
                ts: 'auditus sit',
                fp: 'auditus simus',
                sp: 'auditus sitis',
                tp: 'auditus sint' 
            },
            pluperfect: {
                fs: 'auditus essem',
                ss: 'auditus esses',
                ts: 'auditus esset',
                fp: 'auditus essemus',
                sp: 'auditus essetis',
                tp: 'auditus essent' 
            }
        }
    }
}

const mood = ['indicative', 'subjunctive'];
const mood_full = ['Indicative', 'Subjunctive'];

const voice = ['active', 'passive'];
const voice_full = ['Active', 'Passive'];

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
        correctWord = audio[mood[moodCounter]][voice[voiceCounter]][tenseI[tenseICounter]][person[personCounter]];
    }
    else {
        correctWord = audio[mood[moodCounter]][voice[voiceCounter]][tenseS[tenseSCounter]][person[personCounter]];
    }
    personCounter++;
    if (changetensekey) {
        if (personCounter == 6) {
            personCounter = 0;
            if (moodCounter == 0) {
                tenseICounter++;
                if (tenseICounter == 6) {
                    tenseICounter = 0;
                    voiceCounter++;
                    if (voiceCounter == 2) {
                        voiceCounter = 0;
                        moodCounter++;
                    }
                }
            }
            else {
                tenseSCounter++;
                if (tenseSCounter == 4) {
                    tenseSCounter = 0;
                    voiceCounter++;
                    if (voiceCounter == 2) {
                        voiceCounter = 0;
                        moodCounter = 0;
                    }
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