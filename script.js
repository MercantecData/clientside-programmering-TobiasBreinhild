
function weatherStuff(){

var url = "https://api.openweathermap.org/data/2.5/weather?q="+ document.getElementById("mintekst").value +"&appid=6d1234a94b21d0b09e9c7d8e301ab993"

var promise = fetch(url)

var promise2 = promise.then(data=>data.json())

promise2.then(UpdatePage)

}



function UpdatePage(data){

    console.log(data)
    /*
    document.getElementById("name").innerHTML = `${data.name}, ${data.sys.country}`
    document.getElementById("degrees").innerHTML = `${Math.floor(data.main.temp) - 272}°`
    document.getElementById("weatherPic").innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"/>`
    document.getElementById("weatherDesc").innerHTML = `${data.weather[0].description}`
    document.getElementById("arrow").innerHTML = `<img src="Pictures/arrow.png" style=" transform: rotate(${data.wind.deg}deg)"/>`
    document.getElementById("windVelocity").innerHTML = `${data.wind.speed} m/s`
    */

    var div = document.createElement("div");
    div.style.width = "100px"
    div.style.height = "300px"
    div.style.background = "deepskyblue"
    div.style.color = "black"
    div.style.border = "10px solid white"
    div.style.borderRadius = "10px"
    div.style.margin = "50px 10px 10px 10px"
    div.style.textAlign = "center"
    div.style.display = "inline-block"

    div.innerHTML = `${data.name}, ${data.sys.country} \n
                     ${Math.floor(data.main.temp) - 272}° \n
                     <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"/> \n
                     ${data.weather[0].description} \n
                     <img src="Pictures/arrow.png" style=" transform: rotate(${data.wind.deg}deg)"/> \n 
                     ${data.wind.speed} m/s`;

    document.getElementById("main").appendChild(div);
}