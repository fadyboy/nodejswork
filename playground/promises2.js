const request = require('request');

var geocodeAddress = (address) => {
    return new Promise((resolve, reject)=>{
        resolve()
    })
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}`,
        json: true
    })
}