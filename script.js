

var APIKey = "605656e79789a6155a7e3a9a62bea17c"

var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
  "q=Paris,France" + "&units=imperial&appid=" + APIKey;
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



var queryURL = "api.openweathermap.org/data/2.5/forecast?" +  "&units=imperial&appid=" + APIKey

$.ajax({
  url: queryURL,
  method: "GET"
})

.then(function (display) {
  console.log(queryURL);
  console.log(display);
  $(".date").text(display.date + " ");
    $(".humid").text("Humidity: " + display.main.humidity);
    $(".temper").text("Temperature (F) " + display.main.temp);

    var tempF = (display.main.temp - 273.15) * 1.80 + 32;
    $(".tempF").text("Temperature (Kelvin) " + tempF);

});

var weatherResponse=".then()";

var fiveDayArr = weatherResponse.list.filter(function(weatherObj) {
  for (var i= 0; i < fiveDayArr.length; i ++);
  if (weatherObj.dt_txt.includes('06:00:00')) {
    return true;
  }
  else {
    return false;
  };

});
