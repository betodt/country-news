var React = require('react');

var ThumbPhoto = React.createClass({
  render() {
    return (
      <div>
        <div>
          <img className="responsive-img materialboxed z-depth-2" src={this.props.src}/>
        </div>
      </div>
    );
  }
});

module.exports = ThumbPhoto;
