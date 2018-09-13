var React = require('react');
var {Link} = require('react-router');

var Examples = (props) =>  {
    return(
        <div>
            <h1 className="text-center">Example Cities</h1>
            <p>Here are some example cities you can type to find the weather in:</p>
            <ul>
             
                    <li><Link to="/?location=Vancouver">Vancouver</Link></li>
   
            
                    <li><Link to="/?location=Portland">Portland</Link></li>
                
              
                    <li><Link to="/?location=San%20Diego">San Diego</Link></li>
           
            </ul>
        </div>
        
    )
}

module.exports = Examples;