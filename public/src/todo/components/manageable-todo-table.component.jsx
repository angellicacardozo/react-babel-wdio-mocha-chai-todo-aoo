var ManageableTodoTable= React.createClass({
	getInitialState: function() {
		return {
			data: [],
			checked: []
		};
	},
	handleTodoSubmit: function(todo) {
		this.props.data.unshift(todo);
		this.setState({
			data: todo
		});
	},
	handleTodoRemove: function(todos) {
		// remove todos from data array
	},
	componentDidMount: function() {
		// ...
	},
	render: function() {
		return (
			<div>
				<CreateBar onTodoSubmit={this.handleTodoSubmit} />
				<TodoTable data={this.props.data} checked={this.props.checked} onTodoRemove={this.handleTodoRemove} />
			</div>
		);
	}
});