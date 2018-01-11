const request = require('request');

var geocodeAddress = (address) => {
   return new Promise((resolve, reject) => {
       debugger;
       request({
           url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}`,
           json: true
       }, (error, response, body) => {
           if(error){
               reject("Error connecting to server");
           } else if(body.status === "ZERO_RESULTS"){
               reject("No results for address");
           } else if(body.status === "OK"){
               resolve({
                address: body.results[0].formatted_address,
                lattitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
               });
           }
       });
   })
}

geocodeAddress("8 Agolu avenue")
 .then((res) =>{
     console.log(JSON.stringify(res, undefined, 2));
 })
 .catch((errorMsg)=>{
     console.log(errorMsg);
 })
