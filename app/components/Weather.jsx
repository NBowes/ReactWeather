var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
    getInitialState: function(){
        return {
            isLoading: false
        }
    },
    handleSearch: function(location){
        var that = this;
        this.setState({
            isLoading: true,
            errorMessage: undefined
        });

        openWeatherMap.getTemp(location).then(function (main) {
            that.setState({
              location: location,
              temp: main.temp,
              min: main.temp_min,
              max: main.temp_max,
              isLoading: false
            });
          }, function (e) {
              that.setState({
                  errorMessage: e.message,
                  isLoading: false
                })
          });
    },
    componentDidMount: function(){
        var location = this.props.location.query.location;

        if(location && location.length > 0){
            this.handleSearch(location);
            window.location.hash = "#/"
        }
    },
    componentWillReceiveProps: function(newProps){
        var location = newProps.location.query.location;

        if(location && location.length > 0){
            this.handleSearch(location);
            window.location.hash = "#/"
        }
    },
    render: function(){
        var {isLoading, temp, location, errorMessage, min, max} = this.state;
        function renderMessage(){
            if(isLoading){
                return <p className="text-center">Fetching weather...</p>
            } else if (temp && location){
                return <WeatherMessage location={location} temp={temp} min={min} max={max}/>
            }
        }
        function renderError(){
            if(typeof errorMessage === "string"){
                return (
                    <ErrorModal message={errorMessage}/>
                )
                
            }
        }

        return(
            <div>
                    <h1 className="text-center weather-title">Get Weather</h1>
                    <WeatherForm onSearch={this.handleSearch}/>
                    {renderMessage()}
                    {renderError()}
            </div>
        );
    }
})

module.exports = Weather;