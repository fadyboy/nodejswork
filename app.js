const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');
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


geocode.geocodeAddress(argv.address, (errorMsg, results) => {
    if (errorMsg) {
        console.log(errorMsg);
    } else if (results) {
        // console.log(JSON.stringify(results, undefined, 2));
        console.log(results.address);
        weather.getWeather(results.lattitude, results.longitude, (erroMsg, weatherResults) =>{
            if(erroMsg){
                console.log(erroMsg);
            } else if(results){
                console.log(`Current temp is ${weatherResults.temperature}C, while real feel is ${weatherResults.realFeel}C`);
            }
        });
    }
});

