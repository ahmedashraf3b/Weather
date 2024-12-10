var Inputsearch = document.getElementById("search")

var weather=[]

async function search(e) {
    let res = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=7d77b96c972b4d119a3151101212704&q=${e}&days=3`)
    let data =await res.json()
    weather = []
    weather.push(data)    
    display(weather)
}
document.getElementById("search").addEventListener("input", function(e) {
search(e.target.value)
})

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

async function display(e){
   document.querySelector(".temp").innerHTML = `${e[0].forecast.forecastday[0].day.avgtemp_c}<sup>o</sup>C`
   document.querySelector(".weather-2").innerHTML = `${e[0].forecast.forecastday[1].day.maxtemp_c}<sup>o</sup>C`
   document.querySelector(".weather-3").innerHTML = `${e[0].forecast.forecastday[2].day.maxtemp_c}<sup>o</sup>C`
   document.querySelector(".lll").innerHTML = `${e[0].forecast.forecastday[2].day.avgtemp_c}<sup>o</sup>C`
   document.querySelector(".Small").innerHTML = `${e[0].forecast.forecastday[1].day.avgtemp_c}<sup>o</sup>C`
   document.querySelector(".div").innerHTML = `${e[0].forecast.forecastday[1].day.condition.text}`
   document.querySelector(".tectt").innerHTML = `${e[0].forecast.forecastday[2].day.condition.text}`
   document.querySelector(".NAME").innerHTML = e[0].location.name
   document.querySelector(".img-1").innerHTML =await `<img class="m-0" src="https:${e[0].current.condition.icon}" alt="" width="90">`
   document.querySelector(".forecast-icon").innerHTML =await `<img class="m-0" src="https:${e[0].forecast.forecastday[1].day.condition.icon}" alt="" width="90">`
   document.querySelector(".forecast-icon-1").innerHTML =await `<img class="m-0" src="https:${e[0].forecast.forecastday[2].day.condition.icon}" alt="" width="90">`
   document.querySelector(".hala").innerHTML = e[0].current.condition.text
   for (let i = 0; i < e[0].forecast.forecastday[0].date.slice(8); i++) {
       if (i > 6) {
           var x = i-7
           document.querySelector(".dayy").innerHTML = days[x]
           document.querySelector(".month-2").innerHTML = days[x+1]
           document.querySelector(".dayyy").innerHTML = days[x+2]
       }
       }    
       var month = e.forecast.forecastday[0].date.slice(5)
       var x = Number( month[0]+month[1]) 
       document.querySelector(".monthh").innerHTML = e[0].forecast.forecastday[0].date.slice(8) + monthNames[x-1]
}