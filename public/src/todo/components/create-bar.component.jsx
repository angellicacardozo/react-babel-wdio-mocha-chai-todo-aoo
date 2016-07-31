var CreateBar=React.createClass({
	render: function() {
		return (
			<form>		
				<label for="content">Todo Content</label>
				<input type="text" id="content" />
				<button type="submit" id="add">Add</button>
			</form>
		);
	}
});