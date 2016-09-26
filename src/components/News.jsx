var React = require('react');
var NewsStory = require('./NewsStory.jsx');

var News = React.createClass({
  render() {
    return (
      <div>
        <NewsStory/>
      </div>
    );
  }
});

module.exports = News;
