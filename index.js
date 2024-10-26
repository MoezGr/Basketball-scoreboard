let scoreHomeEl = document.getElementById("score-home");
let scorePlus = 0;

function one() {
    scorePlus = scorePlus + 1;
    scoreHomeEl.innerText = scorePlus   
}

function two() {
    scorePlus = scorePlus + 2;
    scoreHomeEl.innerText = scorePlus
}

function three() {
    scorePlus = scorePlus + 3;
    scoreHomeEl.innerText = scorePlus
}

function reset() {
    scorePlus = 0;
    scoreHomeEl.innerText = scorePlus
}

let scoreGuestEl = document.getElementById("score-guest")

function plusone() {
    scorePlus = scorePlus + 1
    scoreGuestEl.innerText = scorePlus
}

function plustwo() {
    scorePlus = scorePlus + 2
    scoreGuestEl.innerText = scorePlus
}

function plusthree() {
    scorePlus = scorePlus + 3
    scoreGuestEl.innerText = scorePlus
}

function secreset() {
    scorePlus = 0
    scoreGuestEl.innerText = scorePlus
}