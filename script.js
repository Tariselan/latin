const body = document.body;
let sites = {
    "c": "changelog.html",
    "n": "nouns/index.html",
    "p": "pronouns/index.html",
    "v": "verbs/index.html",
    "a": "adjectives/index.html"
}

//

function goto(x) {
    window.location.replace(x);
}

body.addEventListener('keypress', function(event) {
    if (event.key === '0') {
        return;
    }
    goto(sites[event.key])
})