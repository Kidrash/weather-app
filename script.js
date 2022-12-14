const app = document.querySelector('.weather-app');
const temp = document.querySelector('.temp');
const dateOutput = document.querySelector('.date');
const timeOutput = document.querySelector('.time');
const conditionOutput = document.querySelector('.condition');
const nameOutput = document.querySelector('.name');
const icon = document.querySelector('.icon');
const cloudOutput = document.querySelector('.cloud');
const humidityOutput = document.querySelector('.humidity');
const windOutput = document.querySelector('.wind');
const form = document.querySelector('locationInput');
const search = document.querySelector('.search');
const btn = document.querySelector('.submit');
let cities = document.querySelectorAll('.city');

let cityInput = 'Nairobi';
// Add click event in search panel
cities.forEach((city) =>{
    city.addEventListener('click', (e) =>{
        cityInput = e.target.innerHTML;
        fetchWeatherData();
        // fades out the app
        app.style.opacity = '0';
    });
})
// submit button
    document.form.addEventListener('submit', (e) => {
    if (search.value.length == 0){
        alert('please type a city name');
    }else{
        // allow change from default city to searched city
        cityInput = search.value;
        fetchWeatherData();
        // removes text from input field
        search.value = '';
        app.style.opacity = '0';
    }
    e.preventDefault();
})
// returns day of week from a date
function dayOfTheWeek(day, month, year){
    const weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        'Thursday',
        "Friday",
        "Saturday"
    ];
    return weekday[new Date(`${day}/${month}/${year}`).getDay()];
}
// fetching from API    
function fetchWeatherData(){
    fetch(`http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=123ac1176c339e22e6b46ccd6bd0a898&q=Nairobi`)
    .then(response => response.json())
    .then(data => {
        console.log(data);

        temp.innerHTML = data.current.temp_c + "&#176;";
        conditionOutput.innerHTML = data.current.condition.text;
// gets date 
        const date = data.location.localtime;
        const y = parseInt(date.slice(0,4));
        const m = parseInt(date.slice(5,2));
        const d = parseInt(date.slice(8,2));
        const time = date.slice(11);

        dateOutput.innerHTML = `${dayOfTheWeek(d, m, y)}${d},${m}${y}`;
        timeOutput.innerHTML = time;

        nameOutput.innerHTML = data.location.name;
// Icons
        const iconId = data.current.condition.icon.slice("http://openweathermap.org/img/wn/10d@2x.png".length);
        icon.scr = "./images" + iconId;

        cloudOutput.innerHTML = data.current.cloud + "%";
        humidityOutput.innerHTML = data.current.humidity + "%";
        windOutput.innerHTML = data.current.wind_kph + "km/hr";

        // set default time of day
        let timeOfDay = "day";
        const code = data.current.condition.code;
        if(!data.current,is_day){
            timeOfDay = "night";
        }
        // code for a clear weather is 800  **code from the api website
        if(code == 800)
        app.style.backgroundImage = `ur(./Images/${timeOfDay}/clear.jpg)`
        //  change the btn color if it's day/night
        btn.style.background = '#e5ba92';
        if(timeOfDay == 'night'){
            btn.style.background = '#181e27'
        // Do the same for a cloudy weather
        }else if (
            code == 801 ||
            code == 802 ||
            code == 803 ||
            code == 804 
        ){
            app.style.backgroundImage = `url(./Images/${timeOfDay}/cloudy.jpg)`;
            btn.style.background = '#fa6d1b';
            if (timeOfDay == 'night'){
                btn.style.background = '#181e27';
            }
        // Do the same for rain
        }else if(
            code == 500 ||
            code == 501 ||
            code == 502 ||
            code == 503 ||
            code == 504 ||
            code == 511 ||
            code == 520 ||
            code == 521 ||
            code == 522 ||
            code == 531
        ){app.style.backgroundImage = `url(./Images/${timeOfDay}/rainy.jpg)`;
        btn.style.background = '#647d75';
        if(timeOfDay == 'night'){
            btn.style.background = '#325c80';
        }
        // Do the same for thunderstorm
        }else{
            app.style.backgroundImage = `url(./Images${timeOfDay}/thunderstorm.jpg)`;
            btn.style.background = '#1b1b1b';
        }
        app.style.opacity = '1';
    })
    .catch(() =>{
        alert("Is that a city?")
        app.style.opacity = '1';
        
    });
}
// Day's activities
// Create a "remove" button and append it to each list item
const myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  const span = document.createElement("SPAN");
  const txt = document.createTextNode("\u00D7");
  span.className = "remove";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a remove button to hide the current list item
const remove = document.getElementsByClassName("remove");
 function deleteTask(){
    
 }

// Add a "checked" symbol when clicking on a list item
const list = document.querySelector('li');
list.addEventListener('click', function(e) {
  if (e.target.tagName === 'li') {
    e.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  const li = document.createElement("li");
  const inputValue = document.getElementById("myInput").value;
  const t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  const span = document.createElement("SPAN");
  const txt = document.createTextNode("\u00D7");
  span.className = "remove";
  span.appendChild(txt);
  li.appendChild(span);


  for (i = 0; i < remove.length; i++) {
    remove[i].onclick = function() {
      const div = this.parentElement;
      div.style.display = "none";
    }
  }
}
// call the function on page load
fetchWeatherData();
app.style.opacity = 1;

// http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=123ac1176c339e22e6b46ccd6bd0a898&q={cityInput}
