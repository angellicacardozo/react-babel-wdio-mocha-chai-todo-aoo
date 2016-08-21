var TodoRow= React.createClass({
	render: function() {
		return (
			<div className="todo-data">
					{this.props.author}: {this.props.children}
			</div>
		);
	}
});