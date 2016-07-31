var CreateBar=React.createClass({
	getInitialState: function() {
		return {
			author: '',
			body: ''
		};
	},
	handleAuthorChange: function(e) {
		this.setState({
			author: e.target.value
		});
	},
	handleBodyChange: function(e) {
		this.setState({
			body: e.target.value
		});
	},
	handleSubmit: function(e) {
		e.preventDefault();

		var author=this.state.author.trim();
		var body=this.state.body.trim();

		if(!author || !body) {
			return;
		}

		this.props.onTodoSubmit({
			author: author,
			body: body
		});

		this.setState({
			author: '',
			body: ''
		});
	},
	render: function() {
		return (
			<form className="todoForm" onSubmit={this.handleSubmit}>		
				<label for="content">Todo Author</label>
				<input type="text" id="author" value={this.state.author} onChange={this.handleAuthorChange} />
				<label for="content">Todo Body</label>
				<input type="text" id="body" value={this.state.body} onChange={this.handleBodyChange} />
				<input type="submit" id="add" value="Post" />
			</form>
		);
	}
});