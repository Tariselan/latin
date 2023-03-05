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

const mitto = {
    indicative: {
        active: {
            present: {
                fs: 'mitto',
                ss: 'mittis',
                ts: 'mittit',
                fp: 'mittimus',
                sp: 'mittitis',
                tp: 'mittint' 
            },
            imperfect: {
                fs: 'mittebam',
                ss: 'mittebas',
                ts: 'mittebat',
                fp: 'mittebamus',
                sp: 'mittebatis',
                tp: 'mittebant'
            },
            future: {
                fs: 'mittam',
                ss: 'mittes',
                ts: 'mittet',
                fp: 'mittemus',
                sp: 'mittetis',
                tp: 'mittent'
            },
            perfect: {
                fs: 'misi',
                ss: 'misisti',
                ts: 'misit',
                fp: 'misimus',
                sp: 'misistis',
                tp: 'miserunt' 
            },
            pluperfect: {
                fs: 'miseram',
                ss: 'miseras',
                ts: 'miserat',
                fp: 'miseramus',
                sp: 'miseratis',
                tp: 'miserant' 
            },
            futurePerfect: {
                fs: 'misero',
                ss: 'miseris',
                ts: 'miserit',
                fp: 'miserimus',
                sp: 'miseritis',
                tp: 'miserint' 
            }
        },
        passive: {
            present: {
                fs: 'mittor',
                ss: 'mitteris',
                ts: 'mittitur',
                fp: 'mittimur',
                sp: 'mittimini',
                tp: 'mittuntur' 
            },
            imperfect: {
                fs: 'mittebar',
                ss: 'mittebaris',
                ts: 'mittebatur',
                fp: 'mittebamur',
                sp: 'mittebamini',
                tp: 'mittebantur'
            },
            future: {
                fs: 'mittar',
                ss: 'mitteris',
                ts: 'mittetur',
                fp: 'mittemur',
                sp: 'mittemini',
                tp: 'mittentur'
            },
            perfect: {
                fs: 'missus sum',
                ss: 'missus es',
                ts: 'missus est',
                fp: 'missus sumus',
                sp: 'missus estis',
                tp: 'missus sunt' 
            },
            pluperfect: {
                fs: 'missus eram',
                ss: 'missus eras',
                ts: 'missus erat',
                fp: 'missus eramus',
                sp: 'missus eratis',
                tp: 'missus erunt' 
            },
            futurePerfect: {
                fs: 'missus ero',
                ss: 'missus eris',
                ts: 'missus erit',
                fp: 'missus erimus',
                sp: 'missus eritis',
                tp: 'missus erunt' 
            }
        }
    },
    subjunctive: {
        active: {
            present: {
                fs: 'mittam',
                ss: 'mittas',
                ts: 'mittat',
                fp: 'mittamus',
                sp: 'mittatis',
                tp: 'mittant' 
            },
            imperfect: {
                fs: 'mitterem',
                ss: 'mitteres',
                ts: 'mitteret',
                fp: 'mitteremus',
                sp: 'mitteretis',
                tp: 'mitterent'
            },
            perfect: {
                fs: 'miserim',
                ss: 'miseris',
                ts: 'miserit',
                fp: 'miserimus',
                sp: 'miseritis',
                tp: 'miserint'
            },
            pluperfect: {
                fs: 'misissem',
                ss: 'misisses',
                ts: 'misisset',
                fp: 'misissemus',
                sp: 'misissetis',
                tp: 'misissent' 
            }
        },
        passive: {
            present: {
                fs: 'mittar',
                ss: 'mittaris',
                ts: 'mittatur',
                fp: 'mittamur',
                sp: 'mittamini',
                tp: 'mittantur' 
            },
            imperfect: {
                fs: 'mitterer',
                ss: 'mittereris',
                ts: 'mitteretur',
                fp: 'mitteremur',
                sp: 'mitteremini',
                tp: 'mitterentur'
            },
            perfect: {
                fs: 'missus sim',
                ss: 'missus sis',
                ts: 'missus sit',
                fp: 'missus simus',
                sp: 'missus sitis',
                tp: 'missus sint' 
            },
            pluperfect: {
                fs: 'missus essem',
                ss: 'missus esses',
                ts: 'missus esset',
                fp: 'missus essemus',
                sp: 'missus essetis',
                tp: 'missus essent' 
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
    correctWord = mitto[mood[moodCounter]][voice[voiceCounter]][tenseI[tenseICounter]][person[personCounter]];
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