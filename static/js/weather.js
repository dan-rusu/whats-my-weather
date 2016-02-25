var location;
var city, country, tempC=0, tempF,icon;
var weather;

var api = "http://api.openweathermap.org/data/2.5/weather?q=";
var apiID = "&APPID=f49b968c08603a8aa5b791d2ba85ec54&mode=xml";
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
				success: function(xmlResponse){

					//show temperature
					var tempAux, tUnit, tempValue;
					tempAux = xmlResponse.getElementsByTagName("temperature")[0];
					tUnit = tempAux.getAttribute("unit").toLowerCase();
					tempValue = tempAux.getAttribute("value");
					switch (tUnit){
						case 'kelvin':
										tempC = Math.round(tempValue - 273);
										tempF = Math.round((tempC * 9) / 5 + 32);
										break;
						case 'celsius':
							 			tempC = Math.round(tempValue);
							 			tempF = Math.round((tempC * 9) / 5 + 32);
										break;
						 case 'fahrenheit':
							 			tempF = Math.round(tempValue);
							 			tempC = Math.round(((tempF - 32) * 5) / 9);
							 			break;
					}
					$("#temp").html("Temperature: " + tempC + "&#176;C");

					//show humidity
					tempAux = xmlResponse.getElementsByTagName("humidity")[0];
					tUnit = tempAux.getAttribute("unit");
					tempValue = Math.round(tempAux.getAttribute("value"));
					$("#humidity").html("Humidity: " + tempValue + " " + tUnit);

					//show pressure
					tempAux = xmlResponse.getElementsByTagName("pressure")[0];
					tUnit = tempAux.getAttribute("unit");
					tempValue = Math.round(tempAux.getAttribute("value"));
					$("#pressure").html("Pressure: " + tempValue + " " + tUnit);

					//show wind info
					var t;
					tempAux = xmlResponse.getElementsByTagName("wind")[0];
					t = xmlResponse.getElementsByTagName("speed")[0];
					tUnit = t.getAttribute("name");
					t = xmlResponse.getElementsByTagName("direction")[0];
					tempValue = t.getAttribute("name");
					$("#wind").html("Wind: " + tUnit + " from " + tempValue);

					//show weather value
					tempAux = xmlResponse.getElementsByTagName("weather")[0];
					weather = tempAux.getAttribute("value");
					icon = tempAux.getAttribute("icon");
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