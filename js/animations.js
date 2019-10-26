const carta0 = document.getElementById("primera");
const carta1 = document.getElementById("segunda");
const carta2 = document.getElementById("tercera");
const carta3 = document.getElementById("cuarta");
const carta4 = document.getElementById("quinta");
const textanimado0 = document.querySelector(".textanimado0");
const textanimado1 = document.querySelector(".textanimado1");
const textanimado2 = document.querySelector(".textanimado2");
const textanimado3 = document.querySelector(".textanimado3");
const textanimado4 = document.querySelector(".textanimado4");

let muestremenu = false;
carta0.addEventListener("click", function() {

    if (!muestremenu) {
        textanimado0.classList.add('muestra')
        muestremenu = true;
    } else {
        textanimado0.classList.remove('muestra');
        muestremenu = false;
    }

})

carta1.addEventListener("click", function() {

    if (!muestremenu) {
        textanimado1.classList.add('muestra')
        muestremenu = true;
    } else {
        textanimado1.classList.remove('muestra');
        muestremenu = false;
    }

})

carta2.addEventListener("click", function() {

    if (!muestremenu) {
        textanimado2.classList.add('muestra')
        muestremenu = true;
    } else {
        textanimado2.classList.remove('muestra');
        muestremenu = false;
    }

})

carta3.addEventListener("click", function() {

    if (!muestremenu) {
        textanimado3.classList.add('muestra')
        muestremenu = true;
    } else {
        textanimado3.classList.remove('muestra');
        muestremenu = false;
    }

})

carta4.addEventListener("click", function() {

    if (!muestremenu) {
        textanimado4.classList.add('muestra')
        muestremenu = true;
    } else {
        textanimado4.classList.remove('muestra');
        muestremenu = false;
    }

})