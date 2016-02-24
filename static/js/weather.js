var location;
	var city, country, tempC, tempF,icon;
	var weather;
	var apiID;
	var api = "http://api.openweathermap.org/data/2.5/weather?q=";
	apiID = "&APPID=f49b968c08603a8aa5b791d2ba85ec54";
$(document).ready(function(){
	
	$.ajax({
		method: 'GET',
		url: 'http://ipinfo.io/json',
		success: function(data){
			city = data["city"];
			country = data["country"];
			$("#location").html("Location: " + "<b>"+ city +", "+country+"</b>");
			var urll = "http://api.openweathermap.org/data/2.5/weather?q=" + encodeURIComponent(city + "," + country)+apiID;
			$.ajax({
				url: urll,
				success: function(val){
					tempC = Math.round(val.main.temp - 273);
					tempF = Math.round((tempC * 9) / 5 + 32);
					weather = val.weather[0].main;
					icon = val.weather[0].icon;
					$("#temp").html("Temperature: " + tempC + "&#176;C");
					$("#weatherInfo").html("Weather outside: " + weather + "<img id='icon'/>");
					$("#icon").attr('src', 'http://openweathermap.org/img/w/'+icon+".png");
				},
				cache: false
			});
			
		},
		cache: false
	});
});

$("#switch").click(function (e){
	var i = $("#temp").text();
	if (i[i.length-1] == 'C'){
		$("#temp").html("Temperature: " + tempF + "&#176;F");
		$("#switch").html("<i class='fa fa-refresh'></i>  Switch to Celsius");
	}
	else
	{
		$("#temp").html("Temperature: " + tempC + "&#176;C");
		$("#switch").html("<i class='fa fa-refresh'></i>  Switch to Fahrenheit");
	}
});