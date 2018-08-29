var React = require('react');
//{temp, location} = props 
var WeatherMessage = ({temp,location}) =>{
        return(
            <p className="text-center">The temperature in {location} is {temp} °C. </p>
        );
}
module.exports = WeatherMessage;