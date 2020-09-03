
function weatherStuff(){

var url = "https://api.openweathermap.org/data/2.5/weather?q="+ document.getElementById("mintekst").value +"&appid=6d1234a94b21d0b09e9c7d8e301ab993"

var promise = fetch(url)

var promise2 = promise.then(data=>data.json())

promise2.then(UpdatePage)

}
function UpdatePage(data){

    document.getElementById("name").innerHTML = `Vejret i ${data.name}, ${data.sys.country}`
    document.getElementById("degrees").innerHTML = `${Math.floor(data.main.temp) - 272}°`
}