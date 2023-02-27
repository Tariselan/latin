const body1 = document.body;

body1.addEventListener('keypress', function(event) {
    if (event.key === "0") {
        window.location.replace('../index.html');
    }
})