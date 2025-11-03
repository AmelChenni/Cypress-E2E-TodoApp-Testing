///<reference types="cypress" />
import { emailTests, firstNameTests,lastNameTests,passwordTests } from '../../03-testData/01-SignupData';
import { signupPage } from './../../02-Pages/01-SignupPage';
import { faker } from '@faker-js/faker';


describe("Register test", () => {
  beforeEach(function () {
    cy.viewport("macbook-16");
    cy.visit("/signup");
  });

  //  01- Fisrt name


firstNameTests.forEach(({title,value,shouldPass,expectedError}) => {
    it(title, function () {
    signupPage.fillBasicInfo(value, " ", " ", " ", " ");
    if(shouldPass){
    signupPage.getFirstNameError().should("not.exist")


    }else{
      signupPage.getFirstNameError()
      .should("be.visible")
      .and(
        "contain",expectedError);
    }
   
  });
});

//02-Last Name
lastNameTests.forEach(({title,value,shouldPass,expectedError}) => {
   it(title, function () {
    signupPage.fillBasicInfo(faker.internet.username(), value, " ", " ", " ");
    if(shouldPass){
    signupPage.getLastNameError().should("not.exist");


    }else{
      signupPage.getLastNameError()
      .should("be.visible")
      .and(
        "contain",expectedError);
    }
   
  });
});

//03-Email

emailTests.forEach(({title,value,shouldPass,expectedError,index}) => {
   it(title, function () {
    signupPage.fillBasicInfo(faker.internet.username(), faker.internet.username(),value,"Amel@1991", "Amel@1991");
    if(shouldPass){
    signupPage.getEmailError().should("not.exist")
  cy.url().should('include', '/todo')

    }else if(!shouldPass && title.includes('already exists') ){
   cy.get('.MuiAlert-message').should("be.visible")
      .and(
        "contain",expectedError);
  }else{
    signupPage.getEmailError()
      .should("be.visible")
      .and(
        "contain",expectedError);
    }
  });
});

//04-Password

passwordTests.forEach(({title,passwordValue,passworConfirmedValue,shouldPass,expectedError}) => {
   it(title, function () {
    signupPage.fillBasicInfo(faker.internet.username(), faker.internet.username(),faker.internet.email(),passwordValue, passworConfirmedValue);
    if(shouldPass){
    signupPage.getPasswordError().should("not.exist");
    cy.url().should('include', '/todo')
    }else if(!shouldPass && title.includes("not matchs") ){
      signupPage.getPasswordConfirmError()
      .should("be.visible")
      .and(
        "contain",expectedError);
    }else{
      signupPage.getPasswordError()
      .should("be.visible")
      .and(
        "contain",expectedError);
    }
   
  });
});



  });
