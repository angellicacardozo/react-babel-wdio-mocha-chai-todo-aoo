var ManageableTodoTable= React.createClass({
	getInitialState: function() {
		return {
			data: []
		};
	},
	handleTodoSubmit: function(todo) {
		this.props.data.unshift(todo);
		this.setState({
			data: todo
		});
	},
	componentDidMount: function() {
		// ...
	},
	render: function() {
		return (
			<div>
				<CreateBar onTodoSubmit={this.handleTodoSubmit} />
				<TodoTable data={this.props.data} />
			</div>
		);
	}
});