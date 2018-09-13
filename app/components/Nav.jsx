var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
    onSearch: function(e){
        e.preventDefault();

        var location = this.refs.search.value;
        var encodedLocation = encodeURIComponent(location)
        if (location.length > 0){
            this.refs.search.value = '';
            window.location.hash = "#/?location=" + encodedLocation
        }
    },
    render: function(){
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
           <div className="top-bar-right">
                <form onSubmit={this.onSearch}>
                    <ul className="menu">
                        <li><input type="text" ref="search" placeholder="Seach weather by city"/></li>
                        <li><button className="button expanded">Get Weather</button></li>
                    </ul>
                </form>
           </div>
        </div>
    )
}
});
module.exports = Nav;