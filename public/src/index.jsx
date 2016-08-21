$(document).ready(function() {
	var data = [
	  {id: 1, author: "Pete Hunt", body: "This is one comment"},
	  {id: 2, author: "Jordan Walke", body: "This is *another* comment"}
	];
	var checked=[];
	ReactDOM.render(<ManageableTodoTable data={data} checked={checked} />, document.getElementById('app'));
});