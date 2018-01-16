const yargs = require('yargs');
const axios = require('axios');
const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to search for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

var address = argv.address;
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}`;

axios.get(geocodeUrl)
 .then((response)=>{
     if(response.data.status === "ZERO_RESULTS"){
         throw new Error("Unable to find results for address");
     }
     const apiKey = "3b7fe1bc462e3c28bc92b5b186b724c8";
     var lat = response.data.results[0].geometry.location.lat;
     var lng = response.data.results[0].geometry.location.lng;
     var weatherUrl = `https://api.darksky.net/forecast/${apiKey}/${lat},${lng}?units=si`;
     console.log("Address - ", response.data.results[0].formatted_address);
     return axios.get(weatherUrl);
 })
  .then((response)=>{
      var temp = response.data.currently.temperature;
      var realFeel = response.data.currently.apparentTemperature;
      console.log(`Current temp is ${temp}C but real feel is ${realFeel}C`);
  })
  .catch((e)=>{
      if(e.code === "ENOTFOUNT"){
          console.log("Error connecting to API servers");
      } else {
          console.log(e.message);
      }
  })



