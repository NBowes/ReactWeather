var axios = require('axios');

const OPEN_WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather?appid=926b89f49fc008a5c6d8cb6d49d05d87&units=metric";

module.exports = {
    getTemp: function(location){
        var newLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_URL}&q=${newLocation}`
        return axios.get(requestUrl).then(function(res){
            if(res.data.cod && res.data.message){
                throw new Error(res.data.message)
            }else{
                return res.data;
            }
        },function(err){            
            throw new Error(err.response.data.message)
        });
    }
}
