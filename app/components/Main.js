var React = require('react');
var ReactDOM = require('react-dom');

var Main = React.createClass({
	edit: function(){
		alert("editing note!");
	},

	delete: function() {
		alert("deleting note!");
	},

	render: function(){
		return(
			<div className="note">
				<p>{this.props.children}</p>
				<span>
					<button onClick={this.edit}
					className="btn btn-default glyphicon glyphicon-pencil"/>
					<button onClick={this.delete}
					className="btn btn-default glyphicon glyphicon-trash"/>
				</span>
			</div>
		)
	}
});

ReactDOM.render( <Main>Awesome! </Main>, document.getElementById('app'));