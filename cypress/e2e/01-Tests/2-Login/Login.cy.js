///<reference types="cypress" />

import { loginPage } from '../../02-Pages/02-LoginPage';
import { emailTests, passwordTests } from '../../03-testData/02-LoginData';


 describe("Login test", () => {
  beforeEach(function () {
    cy.viewport("macbook-16");
    cy.visit("/login");
  });

emailTests.forEach(({title,value,shouldPass,expectedError}) => {
   it(title, function () {
    loginPage.fillBasicInfo (value,"Amel@1991");
    if(shouldPass){
    loginPage.getEmailError().should("not.exist");

   }else{
      loginPage.getEmailError()
      .should("be.visible")
      .and(
        "contain",expectedError);
    }
  });
});

//04-Password

passwordTests.forEach(({title,value,shouldPass,expectedError,index}) => {
   it(title, function () {
    loginPage.fillBasicInfo(`testNumber${index}@gmail.com`,value);
    if(shouldPass){
    loginPage.getPasswordError().should("not.exist");

    }else{
      loginPage.getPasswordError()
      .should("be.visible")
      .and(
        "contain",expectedError);
    }
   
  });
});
});
