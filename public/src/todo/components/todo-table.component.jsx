var TodoTable= React.createClass({
	render: function() {
		var todoNodes=this.props.data.map(function(todo) {
			return (
				<TodoRow author={todo.author} key={todo.id}>
					{todo.body}
				</TodoRow>
			)
		});

		return (
			<div class="todos">
				{todoNodes}
			</div>
		);
	}
});