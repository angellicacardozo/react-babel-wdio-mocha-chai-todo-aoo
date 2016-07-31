var TodoRow= React.createClass({
	render: function() {
		return (
			<div className="todo-row">
				{this.props.author}: {this.props.children}
			</div>
		);
	}
});