const body = document.body;

body.addEventListener('keypress', function(event) {
    if (event.key === "0") {
        window.location.replace('../index.html');
    }
})