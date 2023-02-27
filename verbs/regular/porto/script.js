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

const porto = {
    indicative: {
        active: {
            present: {
                fs: 'porto',
                ss: 'portas',
                ts: 'portat',
                fp: 'portamus',
                sp: 'portatis',
                tp: 'portant' 
            },
            imperfect: {
                fs: 'portabam',
                ss: 'portabas',
                ts: 'portabat',
                fp: 'portabamus',
                sp: 'portabatis',
                tp: 'portabant'
            },
            future: {
                fs: 'portabo',
                ss: 'portabis',
                ts: 'portabit',
                fp: 'portabimus',
                sp: 'portabitis',
                tp: 'portabunt'
            },
            perfect: {
                fs: 'portavi',
                ss: 'portavisti',
                ts: 'portavit',
                fp: 'portavimus',
                sp: 'portavistis',
                tp: 'portaverunt' 
            },
            pluperfect: {
                fs: 'portaveram',
                ss: 'portaveras',
                ts: 'portaverat',
                fp: 'portaveramus',
                sp: 'portaveratis',
                tp: 'portaverant' 
            },
            futurePerfect: {
                fs: 'portavero',
                ss: 'portaveris',
                ts: 'portaverit',
                fp: 'portaverimus',
                sp: 'portaveritis',
                tp: 'portaverint' 
            }
        },
        passive: {
            present: {
                fs: 'portor',
                ss: 'portaris',
                ts: 'portatur',
                fp: 'portamur',
                sp: 'portamini',
                tp: 'portantur' 
            },
            imperfect: {
                fs: 'portabar',
                ss: 'portabaris',
                ts: 'portabatur',
                fp: 'portabamur',
                sp: 'portabamini',
                tp: 'portabantur'
            },
            future: {
                fs: 'portabor',
                ss: 'portaberis',
                ts: 'portabitur',
                fp: 'portabimur',
                sp: 'portabimini',
                tp: 'portabuntur'
            },
            perfect: {
                fs: 'portatus sum',
                ss: 'portatus es',
                ts: 'portatus est',
                fp: 'portatus sumus',
                sp: 'portatus estis',
                tp: 'portatus sunt' 
            },
            pluperfect: {
                fs: 'portatus eram',
                ss: 'portatus eras',
                ts: 'portatus erat',
                fp: 'portatus eramus',
                sp: 'portatus eratis',
                tp: 'portatus erunt' 
            },
            futurePerfect: {
                fs: 'portatus ero',
                ss: 'portatus eris',
                ts: 'portatus erit',
                fp: 'portatus erimus',
                sp: 'portatus eritis',
                tp: 'portatus erunt' 
            }
        }
    },
    subjunctive: {
        active: {
            present: {
                fs: 'portem',
                ss: 'portes',
                ts: 'portet',
                fp: 'portemus',
                sp: 'portetis',
                tp: 'portent' 
            },
            imperfect: {
                fs: 'portarem',
                ss: 'portares',
                ts: 'portaret',
                fp: 'portaremus',
                sp: 'portaretis',
                tp: 'portent'
            },
            perfect: {
                fs: 'portaverim',
                ss: 'portaveris',
                ts: 'portaverit',
                fp: 'portaverimus',
                sp: 'portaveritis',
                tp: 'portaverint'
            },
            pluperfect: {
                fs: 'portavissem',
                ss: 'portavisses',
                ts: 'portavisset',
                fp: 'portavissemus',
                sp: 'portavissetis',
                tp: 'portavissent' 
            }
        },
        passive: {
            present: {
                fs: 'porter',
                ss: 'porteris',
                ts: 'portetur',
                fp: 'portemur',
                sp: 'portemini',
                tp: 'portentur' 
            },
            imperfect: {
                fs: 'portarer',
                ss: 'portareris',
                ts: 'portaretur',
                fp: 'portaremur',
                sp: 'portaremini',
                tp: 'portarentur'
            },
            perfect: {
                fs: 'portatus sim',
                ss: 'portatus sis',
                ts: 'portatus sit',
                fp: 'portatus simus',
                sp: 'portatus sitis',
                tp: 'portatus sint' 
            },
            pluperfect: {
                fs: 'portatus essem',
                ss: 'portatus esses',
                ts: 'portatus esset',
                fp: 'portatus essemus',
                sp: 'portatus essetis',
                tp: 'portatus essent' 
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

// event listeners



// functions