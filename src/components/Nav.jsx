var React = require('react');

var Nav = React.createClass({
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <a href="#" className="brand-logo left"><big>{this.props.title}</big></a>
            <ul id="nav-mobile" className="right hide-on-small-only">
              <li><a href={this.props.link}><i className="mdi mdi-twitter-box"></i></a></li>
              <li><a href={this.props.link}><i className="mdi mdi-facebook-box"></i></a></li>
              <li><a href={this.props.link}><i className="mdi mdi-instagram"></i></a></li>
              <li><a href={this.props.link}><i className="mdi mdi-linkedin-box"></i></a></li>
              <li><a href={this.props.link}><i className="mdi mdi-email"></i></a></li>
            </ul>
          </div>
        </nav>
        <nav>
          <div className="nav-wrapper">
            <a href="#" className="brand-logo left"><small>{this.props.subTitle}</small></a>
          </div>
        </nav>
        <nav>
          <div className="nav-wrapper">
            <ul id="nav-mobile" className="right">
              <li><a href="#/news"><strong>News</strong></a></li>
              <li><a href="#/photos"><strong>Photos</strong></a></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
});

module.exports = Nav;
