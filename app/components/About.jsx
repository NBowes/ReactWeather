var React = require('react');

var About = (props) => {
    return (
        <div>
        <h1 className="text-center">About</h1>
                <p>
                    This app was created using React, Node.js, Express for a simple server. It also utilizes the <a href="https://openweathermap.org/" target="_blank">openweathermap.org </a>API
                </p>
        </div>
       
    )
}

module.exports = About;