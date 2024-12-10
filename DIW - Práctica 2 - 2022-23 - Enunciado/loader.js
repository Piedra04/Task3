window.onload = function () {
    move();
};

function move() {
    var elem = document.getElementById("myBar");
    var width = 20;
    var id = setInterval(frame, 100); // Cambia el valor para ajustar la velocidad
    function frame() {
        if (width >= 100) {
            clearInterval(id);
            window.location.href = "news.html";
        } else {
            width++;
            elem.style.width = width + '%';
            document.getElementById("demo").innerHTML = width + '%';
        }
    }
}
