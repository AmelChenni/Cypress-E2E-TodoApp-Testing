// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --

const { faker } = require("@faker-js/faker");

// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('login',(email,password)=>{
        cy.request({
      url: "http://localhost:8080/api/v1/users/login",
      method: "POST",
      body: {
        email: email,
        password: password,
      },
    }).then((res) => {
      expect(res.status).to.eq(200);
    expect(res.body).to.have.an('object').to.have.property("access_token");
    expect(res.body).to.have.an('object').to.have.property("firstName");
    expect(res.body).to.have.an('object').to.have.property("userID");
      const access_token = res.body.access_token;
      const firstName = res.body.firstName;
      const userID = res.body.userID;
      cy.visit("/", {
        onBeforeLoad(win) {
          win.localStorage.setItem(
            "user",
            JSON.stringify({
              access_token: access_token,
              firstName: firstName,
              userID: userID,
            })
          );
        },
      });
    });
})

Cypress.Commands.add('addTask',(name,status)=>{
//   cy.login()
const user = JSON.parse(localStorage.getItem('user'));
const access_token = user.access_token;
    cy.request({
      url: "http://localhost:8080/api/v1/tasks",
      method: "POST",
        headers :{
                  authorization : `Bearer ${access_token}`
        },
      body: {
        item: name,
        isCompleted: status,
      },
    }).then((response)=>{
      expect(response.status).to.eq(201);

    // Assert that the response body exists and is not empty
    expect(response.body).to.exist;
    expect(response.body.addedTask).to.not.be.empty;

    // Assert that the response body has specific properties
    expect(response.body.addedTask).to.have.property('isCompleted');
    expect(response.body.addedTask).to.have.property('item');
    expect(response.body.addedTask.item).to.eq(name);

    })
})

Cypress.Commands.add('addEmptyTask',(name,status)=>{
//   cy.login()
const user = JSON.parse(localStorage.getItem('user'));
const access_token = user.access_token;
    cy.request({
      url: "http://localhost:8080/api/v1/tasks",
      method: "POST",
        headers :{
                  authorization : `Bearer ${access_token}`
        },
      body: {
        item: name,
        isCompleted: status,
      },
        failOnStatusCode: false, // Prevents test failure on 404
    }).then((response)=>{
      expect(response.status).to.eq(400);

    // Assert that the response body exists and is not empty
    expect(response.body).to.exist;
    cy.log(response.body.messag)
    expect(response.body).have.property('message');
    expect(response.body.message).to.include('length must be at least 3 characters long')
    // expect(response.body.addedTask).to.not.be.empty;

    // // Assert that the response body has specific properties
    // expect(response.body.addedTask).to.have.property('isCompleted');
    // expect(response.body.addedTask).to.have.property('item');
    // expect(response.body.addedTask.item).to.eq(name);

    })
})


Cypress.Commands.add('delete',(name)=>{
const user = JSON.parse(localStorage.getItem('user'));
const access_token = user.access_token;
    cy.request({
      url: "http://localhost:8080/api/v1/tasks",
      method: "GET",
        headers :{
                  authorization : `Bearer ${access_token}`
        },
      
    }).then((res)=>{
        cy.log(res.body.tasks)
        const tasks = res.body.tasks;

        const taskToDelete =tasks.find(task=> task.item === name)
        cy.log(taskToDelete)
        
        if (taskToDelete) { 
        const taskID = taskToDelete._id;
        cy.log(taskID)

            cy.request({
      url: `http://localhost:8080/api/v1/tasks/${taskID}`,
      method: "DELETE",
        headers :{
                  authorization : `Bearer ${access_token}`
        },
      
    }).then((res)=>{
        cy.log(res)
        cy.log(`✅ Task "${name}" deleted successfully`);
    })    
}else {
      cy.log(`⚠️ Task "${name}" not found`);
    }
       

    })
})