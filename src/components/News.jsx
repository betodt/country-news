var React = require('react');
var ThumbPhoto = require('./ThumbPhoto.jsx');

var News = React.createClass({
  render() {
    return (
      <div>
        <div className="news card card-panel large">
          <div className="row">
            <div className="col s3 m2">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Beats_Electronics_logo.svg/2000px-Beats_Electronics_logo.svg.png" className="responsive-img"/>
            </div>
            <div className="col s9 m10">
              <h4>Obesity in America</h4>
              <h5>Why are Americans so fat?</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non orci auctor, pulvinar magna et, tincidunt elit. Nullam et mattis eros. Nullam at sem id tellus viverra finibus. Cras at erat in risus mollis commodo quis eu risus. Sed vitae enim commodo, sollicitudin quam ut, viverra urna. Morbi dapibus facilisis nulla, nec imperdiet sapien posuere quis. Nulla facilisi.</p>

              <div className="row">
                <div className="col s6">
                  <ThumbPhoto src="http://www.marshotel.com/photos/obesity-statistics-in-american-children-39.gif"/>
                </div>
                <div className="col s6">
                  <ThumbPhoto src="http://www.marshotel.com/photos/obesity-statistics-in-american-children-39.gif"/>
                </div>
              </div>
              <h6>Kentucky, USA</h6>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = News;
