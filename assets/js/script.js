var now = new Date()
var time = now.getHours()
var minutes = now.getMinutes()

var TextHTML = document.getElementById("Text")
var Time = document.getElementById('Time')
var color = document.querySelector('body')

Time.innerHTML = time + ":"+ minutes

var imgSunGoingDown = document.getElementById('SunGoingDown')
var imgMorningDay = document.getElementById('MorningDay')
var imgSunRising = document.getElementById('SunRising')
var imgNight = document.getElementById('Night')


if(time >= 5 && time <= 6) {
    imgSunRising.style.display = "block"
    TextHTML.innerHTML = "<strong>Sun is coming out</strong>"
    color.style.background = "rgba(156, 147, 18, 0.616"
} else if(time > 6 && time <= 17) {
    imgSunRising.style.display = "none"
    imgMorningDay.style.display = "block"
    TextHTML.innerHTML = "<strong>It's daytime</strong>"
    color.style.background = "rgba(18, 156, 59, 0.911)"
} else if(time == 17 && minutes >= 30) {
    imgMorningDay.style.display = "none"
    imgSunGoingDown.style.display = "block"
    TextHTML.innerHTML = "<strong>Sun is going down</strong>"
    color.style.background = "rgba(182, 98, 59, 0.897)"
} else if(time == 18 && minutes <= 10) {
    imgSunGoingDown.style.display = "block"
    TextHTML.innerHTML = "<strong>It's almost night</strong>"
    color.style.background = "rgba(182, 98, 59, 0.897)"
} else if(time == 18 && minutes >= 11) {
    imgSunGoingDown.style.display = "none"
    imgNight.style.display = "block"
    TextHTML.innerHTML = "<strong>It's night</strong>"
    color.style.background = "rgba(102, 172, 148, 0.041)"
}