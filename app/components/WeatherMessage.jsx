var React = require('react');
//{temp, location} = props 
var WeatherMessage = ({temp,location,min,max,description}) =>{
        return(
    <div class="card">
        <div class="card-divider">
            <h3 className="text-center">{location}</h3>
            <h6 className="text-center weather-description">{description}</h6>
        </div>
        <div class="card-section">
            <h5 className="text-center">Current Temperature: {temp} °C. </h5>
            <h5 className="text-center">Min Temperature: {min} °C. </h5>
            <h5 className="text-center">Max Temperature: {max} °C. </h5>
        </div>
    </div>
        );
}
module.exports = WeatherMessage;