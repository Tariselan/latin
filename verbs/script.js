const body = document.body;
let sites = {
    "r": "regular/index.html",
    "i": "irregular/index.html"
}

let reg = {
    "p": "porto/index.html",
    "h": "audio/index.html",
    "m": "mitto/index.html",
    "a": "audio/index.html"
}

//

function goback() {
    window.location.replace('../index.html')
}

function goto(x) {
    window.location.replace(x);
}