
// 01-log in --------------> with API (Pass)
// 02-Add a task ----------> with API (PASS)
// 03-Add an empty task ---> with API (PASS)
// 04-Delete a task -------> with API (PASS)
// 05-Desplay All tasks ---> with API

const { faker } = require("@faker-js/faker");

describe("Crud On Tasks", () => {
  beforeEach(() => {
    cy.login(Cypress.env('email'), Cypress.env('password'));
  });
  
// 01-log in --------------> with ui
it('sould log in with API request',()=>{
    cy.login(Cypress.env('email'), Cypress.env('password'));
})

// 02-Add a task ----------> with API
  it("should allow user to add a new task", () => {
    const word = faker.word.sample(4);
    cy.addTask(word,false)
  cy.visit('/'); 
  });

// 03-Add an empty task ---> with API
 it("shouldnt allow user to add an empty task", () => {
    cy.addEmptyTask(' ',false)
  cy.visit('/'); 
  });

// 04-Delete a task -------> with API
  it("should can delete a tasl", () => {
    cy.delete( );
  });
});
