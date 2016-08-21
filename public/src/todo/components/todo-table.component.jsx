var TodoTable= React.createClass({
	handleCheckboxChange: function(e) {

		var todo=e.target.value;

		if(this.props.checked.indexOf(todo)===-1) {
			this.props.checked.unshift(todo);
		} else {
			this.props.checked.splice(this.props.checked.indexOf(todo), 1);
		}	
	},
	handleSubmit: function(e) {
		e.preventDefault();

		this.props.onTodoRemove(this.props.checked);
	},
	componentDidMount: function() {
		// ...
	},
	render: function() {
		var me=this;
		var todoNodes=this.props.data.map(function(todo) {
			return (
				<div className="todo-row">
					<TodoRow author={todo.author} key={todo.id}>
						{todo.body}
					</TodoRow>
					<input type="checkbox" value={todo} onChange={me.handleCheckboxChange} />
				</div>
			)
		});

		return (
			<form onSubmit={this.handleSubmit}>
				<div class="todos">
					{todoNodes}
				</div>
				<input type="submit" id="remove" value="Remove" />
			</form>
		);
	}
});