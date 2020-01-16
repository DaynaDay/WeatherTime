

var APIKey = "605656e79789a6155a7e3a9a62bea17c"
var searchName = $(".city").val();

var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
  "q=London,England" + searchName + "&units=imperial&appid=" + APIKey;
+ APIKey;

$.ajax({
  url: queryURL,
  method: "GET"
})

  .then(function (response) {
    console.log(queryURL);
    console.log(response);

    $(".city").text(response.name + " ");
    $(".wind").text("Wind Speed: " + response.wind.speed);
    $(".humidity").text("Humidity: " + response.main.humidity);
    $(".temp").text("Temperature (F) " + response.main.temp);

    var tempF = (response.main.temp - 273.15) * 1.80 + 32;
    $(".tempF").text("Temperature (Kelvin) " + tempF);
  });

$("#submitBtn").on("click", function (event) {
  event.preventDefault();
  if (!searchName)
    return false;
});


/////////////////////////////////////////////



// var weatherResponse=".then()"
// var fiveDayArr = weatherResponse.list.filter(function(weatherObj) {
//   if (weatherObj.dt_txt.includes('06:00:00')) {
//     return true;
//   }
//   else {
//     return false;
//   }
// });
