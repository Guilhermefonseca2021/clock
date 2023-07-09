var sec = 00;
var min = 00;
var hr = 00;
var interval

//essa parte sem entender muito, mas compreendi a logica. to com dificuldade em argumento de funcao. (2 semanas de estudo)
function twoDigits(digit) {
    if(digit < 10) {
        return("0" + digit)
    } else {
        return (digit)
    }
}

function start() {
    interval = setInterval(watch, 1000)
}

function pause() {
    clearInterval(interval);
}

function stop() {
    clearInterval(interval)
    sec=0;
    min = 0;
    document.getElementById("watch").innerText = "00:00:00"
}

function watch() {
    sec++
    if(sec == 60) {
        min++
        sec = 00
        if (min == 60) {
            hr++
            min = 0
        }
    }

    let watch = document.getElementById("watch").innerText = twoDigits(hr) + ":" + twoDigits(min) +  ":" + twoDigits(sec)
}