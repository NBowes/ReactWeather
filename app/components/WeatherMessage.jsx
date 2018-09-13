var React = require('react');
//{temp, location} = props 
var WeatherMessage = ({temp,location,min,max}) =>{
        return(
    <div class="card">
        <div class="card-divider">
            <h3 className="text-center">{location}</h3>
        </div>
        <div class="card-section">
            <h4 className="text-center">Current Temperature: {temp} °C. </h4>
            <h4 className="text-center">Min Temperature: {min} °C. </h4>
            <h4 className="text-center">Max Temperature: {max} °C. </h4>
        </div>
    </div>
        );
}
module.exports = WeatherMessage;