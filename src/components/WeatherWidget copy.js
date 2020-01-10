import React from 'react'
import Image from "react-bootstrap/Image";


const WeatherWidget = () => {

let requestFirst = () => {
let request = new XMLHttpRequest()
request.open('GET', 'https://api.openweathermap.org/data/2.5/weather?lat=51.51&lon=-0.13&APPID=11c50404b4fe1ddf6ea079ca87dd541c', true)
request.onload = function() {
    // Begin accessing JSON data here
    let name = JSON.parse(this.response).name;
    let temp = JSON.parse(this.response).main.temp;
    let hum = JSON.parse(this.response).main.humidity;
    let wind = JSON.parse(this.response).wind.speed;
    temp -= 273; // Kelvin to Celsius
    let tempFixed = temp.toFixed();
    document.getElementById("name").innerHTML = name;
    document.getElementById("temp").innerHTML = tempFixed;
    document.getElementById("hum").innerHTML = hum;
    document.getElementById("wind").innerHTML = wind;
}
request.send();
}
let requestSecond = () => {
let request = new XMLHttpRequest()
request.open('GET', 'https://api.openweathermap.org/data/2.5/weather?lat=47.01&lon=28.86&APPID=11c50404b4fe1ddf6ea079ca87dd541c', true)
request.onload = function() {
    // Begin accessing JSON data here
    let name2 = JSON.parse(this.response).name;
    let temp2 = JSON.parse(this.response).main.temp;
    let hum2 = JSON.parse(this.response).main.humidity;
    let wind2 = JSON.parse(this.response).wind.speed;
    temp2 -= 273; // Kelvin to Celsius
    let tempFixed2 = temp2.toFixed();
    document.getElementById("name2").innerHTML = name2;
    document.getElementById("temp2").innerHTML = tempFixed2;
    document.getElementById("hum2").innerHTML = hum2;
    document.getElementById("wind2").innerHTML = wind2;
}
request.send();
}

requestFirst();



    return (
        <div className="resume-section p-3 p-lg-5 d-flex align-items-center" id="weatherWidget">
        <div className="w-100">
          <h2 className="mb-5">Weather widget</h2>
          <p>Weather widget. Displays weather information in Chisinau and London. Data is taken from the weather API.</p>
          <div className="content">
              <div className="container-fluid">
                  <div className="row">
                      <div className="card col-sm-6" style="width: 35%;">
                        <Image src="Image/london.jpg" width="100%" className="card-Image-top" alt="London" />
                        <div className="card-body">
                          <p  id="name"></p>
                          <p  className="card-text">London is the capital of and largest city in England and the United Kingdom, with the largest municipal population in the European Union.</p>
                        </div>
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item">Temperatura: <span  id="temp"></span><span > °</span></li>
                          <li className="list-group-item">Humidity: <span  id="hum"></span><span > %</span></li>
                          <li className="list-group-item">Wind: <span  id="wind"></span><span > km/h</span></li>
                        </ul>
                      </div>
                      <div className="card col-sm-6">
                        <Image src="Image/chisinau.jpg" width="100%" height="229.5" className="card-Image-top" alt="Chisinau" />
                        <div className="card-body">
                          <p  id="name2"></p>
                          <p  className="card-text">Chisinau is the capital and largest city[9] of the Republic of Moldova. The city is Moldova's main industrial and commercial center, and is located in the middle of the country.</p>
                        </div>
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item">Temperatura: <span  id="temp2"></span><span > °</span></li>
                          <li className="list-group-item">Humidity: <span  id="hum2"></span><span > %</span></li>
                          <li className="list-group-item">Wind: <span  id="wind2"></span><span > km/h</span></li>
                        </ul>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
    );
}

export default WeatherWidget;