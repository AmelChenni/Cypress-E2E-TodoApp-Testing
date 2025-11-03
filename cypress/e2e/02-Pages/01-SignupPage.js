class SignupPage {
  elements = {
    firstName: () => cy.get('[data-testid="first-name"]'),
    lastName: () => cy.get('[data-testid="last-name"]'),
    password: () => cy.get('[data-testid="password"]'),
    confirmPassword: () => cy.get('[data-testid="confirm-password"]'),
    email: () => cy.get('[data-testid="email"]'),
    submitBtn: () => cy.get("button")
  };

  fillFirstName(name) {
    this.elements.firstName().type(name);
  }

  fillLastName(name) {
    this.elements.lastName().type(name);
  }
   fillPassword(password) {
    this.elements.password().type(password);
  }
   fillConfirmPassword(Cpassword) {
    this.elements.confirmPassword().type(Cpassword);
  }
  fillEmail(email) {
    this.elements.email().type(email);
  }
 clickSubmit() {
    this.elements.submitBtn().click();
  }
  fillBasicInfo(first, last, email,password,cPassword) {
  this.fillFirstName(first);
  this.fillLastName(last);
  this.fillEmail(email);
  this.fillPassword(password)
  this.fillConfirmPassword(cPassword)
  this.clickSubmit();
}

 
  getFirstNameError() {
  return this.elements.firstName().parent().siblings('.MuiFormHelperText-root');
}
  getLastNameError() {
  return this.elements.lastName().parent().siblings('.MuiFormHelperText-root');
}
  getEmailError() {
  return this.elements.email().parent().siblings('.MuiFormHelperText-root');
}

  getPasswordError() {
  return this.elements.password().parent().siblings('.MuiFormHelperText-root');
}
 getPasswordConfirmError() {
  return this.elements.confirmPassword().parent().siblings('.MuiFormHelperText-root');
}



}


export const signupPage = new SignupPage();
