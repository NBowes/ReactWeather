var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = (props) =>{
    return(
        <div className="top-bar">
            <div className="top-bar-left">
                <ul className="menu">
                <li class="menu-text">Nate's Weather</li>
                    <li>
                        <IndexLink to='/' activeClassName='active'>Get Weather</IndexLink>
                    </li>
                    <li>
                        <Link to='/about' activeClassName='active'>About</Link>
                    </li>
                    <li>
                        <Link to='/examples' activeClassName='active'>Examples</Link>
                    </li>
                </ul>
            </div>
           
        </div>
    )
}
module.exports = Nav;