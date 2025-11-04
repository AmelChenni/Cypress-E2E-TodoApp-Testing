///<reference types="cypress" />

const { faker } = require("@faker-js/faker");

// 01-log in --------------> with ui (PASS)
// 02-Add a task ----------> with ui (PASS)
// 03-Add an empty task ---> with ui (PASS)
// 04-Delete a task -------> with ui (PASS)
// 05-Desplay All tasks ---> with ui

describe("Todo feature tests", () => {
  beforeEach(() => {
    cy.visit("/login");
    cy.get('[data-testid="email"]').type("test100@gmail.com");
    cy.get('[data-testid="password"]').type("Amel@1991");
    cy.get("button").contains("Login").click();

    //
  });
  // 01-log in --------------> with ui
  it("should Login correct", () => {
    cy.url().should("include", "/todo");
    cy.get('[data-testid="welcome"]').should("be.visible");
  });
  // 02-Add a task ----------> with ui
  it("should allow user to add a new task", () => {
    const word = faker.word.sample(4);
    cy.get(".MuiButtonBase-root").eq(1).click();
    cy.get('[data-testid="new-todo"]').should("be.visible").type(word);
    cy.get('[data-testid="submit-newTask"]').click();
    cy.get('[data-testid="todo-item"]')
      .eq(0)
      .should("be.visible")
      .and("contain.text", word);
  });

  // 03-Add an empty task ---> with ui
  it("should not allow user to add an empty task", () => {
    cy.get(".MuiButtonBase-root").eq(1).click();
    cy.get('[data-testid="new-todo"]').should("be.visible").type(" ");
    cy.get('[data-testid="submit-newTask"]').click();
    cy.get(".MuiFormHelperText-root")
      .should("be.visible")
      .and(
        "contain.text",
        "New todo is required, and it should be more than 3 characters"
      );
  });

  // 04 - Delete a task -------> with UI
  it.only("should allow user to delete a task", () => {
      if (cy.get('[data-testid="no-todos"]')
        .should('be.visible')         
        .and('contain.text', 'No Available Todos')) {
          cy.log("⚠️ No Available Todos");
      } else {
        cy.get('[data-testid="todo-item"]')
          .first()
          .within(() => {
            cy.get(".sc-cwHptR").invoke("text").as("itemText");
            cy.get('[data-testid="delete"]').click();
          });

        cy.get("@itemText").then((text) => {
          cy.get('[data-testid="todo-item"]').should("not.contain.text", text);
        });
      }
  });
});
