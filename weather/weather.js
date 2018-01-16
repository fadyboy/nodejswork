const request = require('request');

var getWeather = (lat, lng, callback) => {
    const apiKey = "3b7fe1bc462e3c28bc92b5b186b724c8";
    request({
        url: `https://api.darksky.net/forecast/${apiKey}/${lat},${lng}?units=si`,
        json: true
    }, (error, response, body) =>{
        if(error){
            callback("Error connecting to server");
        } else if(response.statusCode === 400){
            callback("Unable to fetch weather");
        } else if(response.statusCode === 200){
            callback(undefined, {
                temperature: body.currently.temperature,
                realFeel: body.currently.apparentTemperature
            })
        }
    });
}

module.exports = {
    getWeather
}

