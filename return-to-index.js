const body = document.body;

body.addEventListener('keypress', function(event) {
    if (event.key === "0") {
        let x = window.location.href.split("/")[3];
        if (x == 'changelog') {
            window.location.replace('index.html');
        }
        else {
            window.location.replace('../index.html');
        }
    }
})