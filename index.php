<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">	
		<meta name="author" content="Dan Andrei Rusu">
		<link rel='shortcut icon' type='image/x-icon' href='static/img/weather.ico' />

		<title>What's my weather?</title>

		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
		<link rel="stylesheet" type="text/css" href="static/css/bootstrap.min.css">	

		<link rel="stylesheet" type="text/css" href="static/css/style.css">
		
	</head>

	<body>

		<header>
			<h1>What's my weather?</h1>
		</header>
		<br/>
		<br/>

		<div class="weather-container">
			<h2>Weather information</h2>
			<div class="row">
				<h4 id="location"></h4> 
				<h4 id="temp"></h4> 
					<h4 id="weatherInfo"> </h4>
			</div>
			<div class="row">
				<button class="myButton" id="switch"><i class="fa fa-refresh"></i>  Switch to Fahrenheit</button>
			</div>
		</div>

		<footer class="text-center footer">
	        <div class="footer-below">
	            <div class="container">
	                <div class="row">
	                    <div class="col-lg-12">
	                        Copyright &copy; <a href="http://dan-rusu.herokuapp.com">Dan Rusu</a> 2016
	                    </div>
	                </div>
	            </div>
	        </div>
    	</footer>	



		

		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
		<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.1/jquery.min.js"></script>
		<script type="text/javascript" src="static/js/weather.js"></script>
	</body>
</html>