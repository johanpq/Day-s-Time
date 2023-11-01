var now = new Date()
var time = now.getHours()
var minutes = now.getMinutes()

var Time = document.getElementById('Time')

Time.innerHTML = time + ":"+ minutes

var imgSunGoingDown = document.getElementById('SunGoingDown')
var imgMorningDay = document.getElementById('MorningDay')
var imgSunRising = document.getElementById('SunRising')
var imgNight = document.getElementById('Night')


if(time >= 5 && time <= 6) {
    imgSunRising.style.display = "block"
} else if(time > 6 && time <= 17) {
    imgSunRising.style.display = "none"
    imgMorningDay.style.display = "block"
} else if(time == 17 && minutes >= 30) {
    imgMorningDay.style.display = "none"
    imgSunGoingDown.style.display = "block"
} else if(time == 18 && minutes <= 10) {
    imgSunGoingDown.style.display = "block"
} else if(time == 18 && minutes >= 11) {
    imgSunGoingDown.style.display = "none"
    imgNight.style.display = "block"
}