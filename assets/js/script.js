var now = new Date();
var hours = now.getHours();
var minutes = now.getMinutes();

var PrintTime = hours + ":" + minutes;
console.log(PrintTime);

var FatherElement = document.querySelector('main');

var Div = document.createElement('div');
Div.classList.add('time');

Div.innerText = PrintTime;

FatherElement.appendChild(Div);

var SunRising = document.getElementById('SunRising');

var MorningDay = document.getElementById('MorningDay');

var SunGoingDown = document.getElementById('SunGoingDown');

var Night = document.getElementById('Night');

SunRising.classList.add('hide');
MorningDay.classList.add('hide');
SunGoingDown.classList.add('hide');
Night.classList.add('hide');

if (hours >= 5 && (hours < 6 || (hours === 6 && minutes < 30))) {
    SunRising.classList.remove('hide');
    SunRising.classList.add('show');
} else if (hours >= 6 && hours < 17) {
    SunRising.classList.remove('show');
    SunRising.classList.add('hide');
    MorningDay.classList.remove('hide');
    MorningDay.classList.add('show');
} else if (hours >= 17 && (hours < 18 || (hours === 18 && minutes < 20))) {
    MorningDay.classList.remove('show');
    MorningDay.classList.add('hide');
    SunGoingDown.classList.remove('hide');
    SunGoingDown.classList.add('show');
} else {
    SunGoingDown.classList.remove('show');
    SunGoingDown.classList.add('hide');
    Night.classList.remove('hide');
    Night.classList.add('show');
}