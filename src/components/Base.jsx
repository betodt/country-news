var React = require('react');

var Nav = require('./Nav.jsx');

var Base = React.createClass({
  render() {
    return (
      <div>
        <div className="container">
          <Nav
            title="Country News"
            subTitle="Top Stories in my Country"
          />
          {this.props.children}
        </div>
        <div className="background">
          <div className="indigo"></div>
          <div className="grey lighten-3"></div>
        </div>
      </div>
    );
  }
});

module.exports = Base;
