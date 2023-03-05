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

const habeo = {
    indicative: {
        active: {
            present: {
                fs: 'habeo',
                ss: 'habes',
                ts: 'habet',
                fp: 'habemus',
                sp: 'habetis',
                tp: 'habent' 
            },
            imperfect: {
                fs: 'habebam',
                ss: 'habebas',
                ts: 'habebat',
                fp: 'habebamus',
                sp: 'habebatis',
                tp: 'habebant'
            },
            future: {
                fs: 'habebo',
                ss: 'habebis',
                ts: 'habebit',
                fp: 'habebimus',
                sp: 'habebitis',
                tp: 'habebunt'
            },
            perfect: {
                fs: 'habui',
                ss: 'habuisti',
                ts: 'habuit',
                fp: 'habuimus',
                sp: 'habuistis',
                tp: 'habuerunt' 
            },
            pluperfect: {
                fs: 'habueram',
                ss: 'habueras',
                ts: 'habuerat',
                fp: 'habueramus',
                sp: 'habueratis',
                tp: 'habuerant' 
            },
            futurePerfect: {
                fs: 'habuero',
                ss: 'habueris',
                ts: 'habuerit',
                fp: 'habuerimus',
                sp: 'habueritis',
                tp: 'habuerint' 
            }
        },
        passive: {
            present: {
                fs: 'habeor',
                ss: 'haberis',
                ts: 'habetur',
                fp: 'habemur',
                sp: 'habemini',
                tp: 'habentur' 
            },
            imperfect: {
                fs: 'habebar',
                ss: 'habebaris',
                ts: 'habebatur',
                fp: 'habebamur',
                sp: 'habebamini',
                tp: 'habebantur'
            },
            future: {
                fs: 'habebor',
                ss: 'habebaris',
                ts: 'habebatur',
                fp: 'habebamur',
                sp: 'habebamini',
                tp: 'habebantur'
            },
            perfect: {
                fs: 'habitus sum',
                ss: 'habitus es',
                ts: 'habitus est',
                fp: 'habitus sumus',
                sp: 'habitus estis',
                tp: 'habitus sunt' 
            },
            pluperfect: {
                fs: 'habitus eram',
                ss: 'habitus eras',
                ts: 'habitus erat',
                fp: 'habitus eramus',
                sp: 'habitus eratis',
                tp: 'habitus erunt' 
            },
            futurePerfect: {
                fs: 'habitus ero',
                ss: 'habitus eris',
                ts: 'habitus erit',
                fp: 'habitus erimus',
                sp: 'habitus eritis',
                tp: 'habitus erunt' 
            }
        }
    },
    subjunctive: {
        active: {
            present: {
                fs: 'habeam',
                ss: 'habeas',
                ts: 'habeat',
                fp: 'habeamus',
                sp: 'habeatis',
                tp: 'habeant' 
            },
            imperfect: {
                fs: 'haberem',
                ss: 'haberes',
                ts: 'haberet',
                fp: 'haberemus',
                sp: 'haberetis',
                tp: 'haberent'
            },
            perfect: {
                fs: 'habuerim',
                ss: 'habueris',
                ts: 'habuerit',
                fp: 'habuerimus',
                sp: 'habueritis',
                tp: 'habuerint'
            },
            pluperfect: {
                fs: 'habessim',
                ss: 'habessis',
                ts: 'habessit',
                fp: 'habessimus',
                sp: 'habessitis',
                tp: 'habessint' 
            }
        },
        passive: {
            present: {
                fs: 'habear',
                ss: 'habearis',
                ts: 'habeatur',
                fp: 'habeamur',
                sp: 'habeamini',
                tp: 'habeantur' 
            },
            imperfect: {
                fs: 'haberer',
                ss: 'habereris',
                ts: 'haberetur',
                fp: 'haberemur',
                sp: 'haberemini',
                tp: 'haberentur'
            },
            perfect: {
                fs: 'habitus sim',
                ss: 'habitus sis',
                ts: 'habitus sit',
                fp: 'habitus simus',
                sp: 'habitus sitis',
                tp: 'habitus sint' 
            },
            pluperfect: {
                fs: 'habitus essem',
                ss: 'habitus esses',
                ts: 'habitus esset',
                fp: 'habitus essemus',
                sp: 'habitus essetis',
                tp: 'habitus essent' 
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
    correctWord = habeo[mood[moodCounter]][voice[voiceCounter]][tenseI[tenseICounter]][person[personCounter]];
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