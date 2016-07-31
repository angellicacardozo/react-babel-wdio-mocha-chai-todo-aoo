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

	 	return browser
	    	.url("http://localhost:3000")
	    	.setValue("#author", todoAuthor)
	    	.setValue("#body", todoText)
	    	.click("#add")
	    	.getText(".todo-row:first-child")
	    	.should.eventually.be.equal(expectedResult);
 	});
});