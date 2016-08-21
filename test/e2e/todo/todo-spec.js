/** 
** todo-spec.js
**
** @describe This is an E2E test specification for the module TODO with tests cases 
**           wich reflects uses interaction and spectation.
**           Usage recommendation: This class is meant to be a guide for FE code reviews in first place.
**			 If a team developer is not able to understand the story implementation by its tests,
**			 so it cannot be understood at all. Cause of tests are the reflection of a developer 
**			 interpretation of the problem. Code implemented must be testable and readable by 
**			 anyone who undestands the basic of its domain.
**/
describe("Todo List Test Suite", function(){
	it('should present an input for todo text body insertion', function() {
		return browser
			.url("http://localhost:3000")
			.isExisting("input[type=text]#body")
			.should.equal(true);
	});
   	it("should click on the add todo button and new todo be presented", function() {
   		var todoAuthor="Author";
   		var todoText="My newest todo ...";
   		var expectedResult= todoAuthor + ": " + todoText;
   		var todoRow=browser.element(".todo-row:first-child");
   		var todoRowValue='';

		browser
    	.url("http://localhost:3000")
    	.setValue("#author", todoAuthor)
    	.setValue("#body", todoText)
    	.click("#add");

	    todoRow.waitForExist(5000);

	    return browser
			  .getText(".todo-row:first-child > .todo-data")
			  .should.equal(expectedResult);
 	});
 	describe("When removing a To Do", function() {
 		it("should start with 2 items on the list", function() {
	   		var todoRow=browser.element(".todo-row:first-child");

		    todoRow.waitForExist(5000);

			return browser
	    	.url("http://localhost:3000")
	    	.elements(".todo-row")
	   		.value.length.should.be.equal(2);
 		});
 		it("should present 1 item when 1 item of 2 is removed", function() {
 			return browser
 				.url("http://localhost:3000")
 				.click(".todo-row:first-child > input[type='checkbox']")
 				.click("#remove")
 				.elements(".todo-row")
 				.value.length.should.be.equal(1);
 		});
 	});
});