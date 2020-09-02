
function weatherStuff(){

var url = "https://api.openweathermap.org/data/2.5/weather?q="+ document.getElementById("mintekst").value +"&appid=6d1234a94b21d0b09e9c7d8e301ab993"

var promise = fetch(url)

var promise2 = promise.then(data=>data.text())

promise2.then(data=>document.getElementById("ye").innerHTML=data)

}