var React = require('react');
var Nav = require('Nav');

var Main = (props) => {
    return(
        <dir>
            <Nav/>
            <h1>Main Component</h1>
            {props.children}
        </dir> 
    )
}

module.exports = Main;