const request = require('request');

var geocodeAddress = (address, callback) => {
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback("Error connecting to server");
        } else if (body.status === "ZERO_RESULTS") {
            callback("No results for address");
        } else if (body.status === "OK") {
            callback(undefined, {
                address: body.results[0].formatted_address,
                lattitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            });
        }
    })
}

module.exports = {
    geocodeAddress
}

