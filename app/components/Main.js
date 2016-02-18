var React = require('react');
var ReactDOM = require('react-dom');

var Main = React.createClass({
	render: function(){
		return(
			<div className="note">
				<span>
					<button className="btn btn-default glyphicon glyphicon-pencil"/>
					<button className="btn btn-default glyphicon glyphicon-trash"/>
				</span>
			</div>
		)
	}
});

ReactDOM.render( <Main />, document.getElementById('app'));