var React = require('react');
var ThumbPhoto = require('./ThumbPhoto.jsx');

var Photos = React.createClass({
  render() {
    return (
      <div>
        <div className="card card-panel large">
          <div className="row">
            <div className="col s3">
              <ThumbPhoto src="http://www.freedigitalphotos.net/images/img/homepage/87357.jpg"/>
            </div>
            <div className="col s3">
              <ThumbPhoto src="http://www.marshotel.com/photos/obesity-statistics-in-american-children-39.gif"/>
            </div>
            <div className="col s3">
              <ThumbPhoto src="http://www.marshotel.com/photos/obesity-statistics-in-american-children-39.gif"/>
            </div>
            <div className="col s3">
              <ThumbPhoto src="http://www.freedigitalphotos.net/images/img/homepage/87357.jpg"/>
            </div>
          </div>
          <div className="row">
            <div className="col s3">
              <ThumbPhoto src="http://www.freedigitalphotos.net/images/img/homepage/87357.jpg"/>
            </div>
            <div className="col s3">
              <ThumbPhoto src="http://www.marshotel.com/photos/obesity-statistics-in-american-children-39.gif"/>
            </div>
            <div className="col s3">
              <ThumbPhoto src="http://www.marshotel.com/photos/obesity-statistics-in-american-children-39.gif"/>
            </div>
            <div className="col s3">
              <ThumbPhoto src="http://www.freedigitalphotos.net/images/img/homepage/87357.jpg"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Photos;
