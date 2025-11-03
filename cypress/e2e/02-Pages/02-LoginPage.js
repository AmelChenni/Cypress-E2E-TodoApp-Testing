class LoginPage {
  elements = {
    email: () => cy.get('[data-testid="email"]'),
     password: () => cy.get('[data-testid="password"]'),
    submitBtn: () => cy.get("button")
  };


   fillPassword(password) {
    this.elements.password().type(password);
  }

  fillEmail(email) {
    this.elements.email().type(email);
  }

  fillBasicInfo( email,password) {
  this.fillEmail(email);
  this.fillPassword(password)
  this.clickSubmit();
}

  clickSubmit() {
    this.elements.submitBtn().click();
  }
  getEmailError() {
  return this.elements.email().parent().siblings('.MuiFormHelperText-root');
}

  getPasswordError() {
  return this.elements.password().parent().siblings('.MuiFormHelperText-root');
}



}


export const loginPage = new LoginPage();
