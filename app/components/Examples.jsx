var React = require('react');

var Examples = (props) =>  {
    return(
        <div>
            <h1 className="text-center">Example Cities</h1>
            <p>Here are some example cities you can type to find the weather in:</p>
            <ul>
                <li>
                    Vancouver
                </li>
                <li>
                    Portland
                </li>
                <li>
                    San Diego
                </li>
            </ul>
        </div>
        
    )
}

module.exports = Examples;