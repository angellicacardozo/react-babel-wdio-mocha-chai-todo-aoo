/**
**
**
**/
describe("Todo List Test Suite", function(){
	it('should present an input for todo content insertion', function() {
		return browser
			.url("http://localhost:3000")
			.isExisting("input[type=text]#content")
			.should.equal(true);
	});
   it("should click on the add todo button and new todo be presented", function() {
   	var todoText="My newest todo ...";

	 return browser
	    .url("http://localhost:3000")
	    .setValue("#content", todoText)
	    .click("#add")
	    .getText(".todos li:first-child")
	    .should.eventually.be.equal(todoText);
 	});
});