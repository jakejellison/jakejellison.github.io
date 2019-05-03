//THESE ARE THE VARIABLES WE WILL USE
var windspeed; //Wind speed. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour.
var winddeg; //Wind direction, degrees (meteorological)
var temp; //Temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit. 
var tempmin;
var tempmax;
var pressure; //Atmospheric pressure (on the sea level, if there is no sea_level or grnd_level data), hPa
var humidity; //Humidity, %
var weathertext; //Group of weather parameters (Rain, Snow, Extreme etc.)
var weatherdescription; //Weather condition within the group
var cloudiness; //Cloudiness, %


$(document).ready(function(){

    //NEW YORK CITY


    $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/weather?id=5128638&units=metric&APPID=be40f7c2ee43c2d186ea526e0513006b', //CHANGE THE URL TO YOUR API QUERY
        dataType: 'jsonp',
        success: function(results){
            weathertext = results.weather[0].main;
            weatherdescription = results.weather[0].description;
            windspeed = results.wind.speed;
            winddeg = results.wind.deg;
            tempmin = results.main.temp_min;
            tempmax = results.main.temp_max;
            temp = results.main.temp;
            pressure = results.main.pressure;
            humidity = results.main.humidity;
            cloudiness = results.clouds.all;

            myWeatherInterpretation();

        }
    });
    

    function myWeatherInterpretation(){
        //THIS IS WHERE YOU CAN CUSTOMIZE YOUR PAGE'S FUNCTIONS    
        
        
        //JUST SEEING IF THE VALUES COME THROUGH
        $("#nycurrent").append('There is currently ' + weathertext + ' in New York' + ' ');
        $("#nycurrent1").append('The humiditiy is ' + humidity + ' percent' + ' ');

    

        //END OF MYWEATHERINTERPRETATION FUNCTION
    }   


});

$(document).ready(function(){

    //BALTIMORE


    $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/weather?id=4347778&units=metric&APPID=be40f7c2ee43c2d186ea526e0513006b', //CHANGE THE URL TO YOUR API QUERY
        dataType: 'jsonp',
        success: function(results){
            weathertext = results.weather[0].main;
            weatherdescription = results.weather[0].description;
            windspeed = results.wind.speed;
            winddeg = results.wind.deg;
            tempmin = results.main.temp_min;
            tempmax = results.main.temp_max;
            temp = results.main.temp;
            pressure = results.main.pressure;
            humidity = results.main.humidity;
            cloudiness = results.clouds.all;

            myWeatherInterpretation();

        }
    });
    

    function myWeatherInterpretation(){
        //THIS IS WHERE YOU CAN CUSTOMIZE YOUR PAGE'S FUNCTIONS    
        
        
        //JUST SEEING IF THE VALUES COME THROUGH
        $('#bacurrent').append('There is currently ' + weathertext + ' in Baltimore' + ' ');
        $('#bacurrent1').append('The humidity is ' + humidity + ' percent' + ' ');

    

        //END OF MYWEATHERINTERPRETATION FUNCTION
    }   


});

$(document).ready(function(){

    //LOSANGELES


    $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/weather?id=5368361&units=metric&APPID=be40f7c2ee43c2d186ea526e0513006b', //CHANGE THE URL TO YOUR API QUERY
        dataType: 'jsonp',
        success: function(results){
            weathertext = results.weather[0].main;
            weatherdescription = results.weather[0].description;
            windspeed = results.wind.speed;
            winddeg = results.wind.deg;
            tempmin = results.main.temp_min;
            tempmax = results.main.temp_max;
            temp = results.main.temp;
            pressure = results.main.pressure;
            humidity = results.main.humidity;
            cloudiness = results.clouds.all;

            myWeatherInterpretation();

        }
    });
    

    function myWeatherInterpretation(){
        //THIS IS WHERE YOU CAN CUSTOMIZE YOUR PAGE'S FUNCTIONS    
        
        
        //JUST SEEING IF THE VALUES COME THROUGH
        $('#lacurrent').append('There is currently ' + weathertext + ' in Los Angeles' + ' ');
        $('#lacurrent1').append('The humiditiy is ' + humidity + ' percent' + ' ');

    

        //END OF MYWEATHERINTERPRETATION FUNCTION
    }   


});

$(document).ready(function(){

    //HOUSTON


    $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/weather?id=4699066&units=metric&APPID=be40f7c2ee43c2d186ea526e0513006b', //CHANGE THE URL TO YOUR API QUERY
        dataType: 'jsonp',
        success: function(results){
            weathertext = results.weather[0].main;
            weatherdescription = results.weather[0].description;
            windspeed = results.wind.speed;
            winddeg = results.wind.deg;
            tempmin = results.main.temp_min;
            tempmax = results.main.temp_max;
            temp = results.main.temp;
            pressure = results.main.pressure;
            humidity = results.main.humidity;
            cloudiness = results.clouds.all;

            myWeatherInterpretation();

        }
    });
    

    function myWeatherInterpretation(){
        //THIS IS WHERE YOU CAN CUSTOMIZE YOUR PAGE'S FUNCTIONS    
        
        
        //JUST SEEING IF THE VALUES COME THROUGH
        $('#hocurrent').append('There is currently ' + weathertext + ' in Houston' + ' ');
        $('#hocurrent1').append('The humiditiy is ' + humidity + ' percent' + ' ');

    

        //END OF MYWEATHERINTERPRETATION FUNCTION
    }   


});