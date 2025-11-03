import { faker } from '@faker-js/faker';
export const firstNameTests = [
  {
    title: "should fail if First Name is empty",
    value: " ",
    shouldPass: false,
    expectedError: "First Name is required, and it should be more than 3 characters",
  },
  {
    title: "should fail if First Name has 2 characters",
    value: "Am",
    shouldPass: false,
    expectedError: "First Name is required, and it should be more than 3 characters",
  },
  {
    title: "should succeed if First Name has 3 characters",
    value: "Ame",
    shouldPass: true,
  },
  {
    title: "should succeed if First Name has 4 characters",
    value: "Amel",
    shouldPass: true,
  },
];



export const lastNameTests = [
      {
    title: "Signup should fail if Last Name is empty",
    value: " ",
    shouldPass: false,
    expectedError: "Last Name is required, and it should be more than 3 characters",

  },
  {
    title: "Signup should fail if Last Name has 2 characters",
    value: "ch",
    shouldPass: false,
    expectedError: "Last Name is required, and it should be more than 3 characters",
  },
  {
    title: "Signup should succeed if Last Name has 3 characters",
    value: "che",
    shouldPass: true,
  },
  {
    title: "Signup should succeed if Last Name has 4 characterss",
    value: "chenni",
    shouldPass: true,
  }
];

export const emailTests = [
      {
    title: "Signup should fail if Email is invalid",
    value: "test@.com",
    shouldPass: false,
    expectedError: "Please Insert a correct Email format",

  },
  {
    title: "Signup should fail if Email is empty",
    value: " ",
    shouldPass: false,
    expectedError: "Please Insert a correct Email format",
  },
  {
    title: "Signup should fail if Email already exists",
    value: "test100@gmail.com",
    shouldPass: false,
    expectedError: "Email is already exists in the Database",

  },
  {
    title: "Signup should succeed if Email is valid and new",
    value: faker.internet.email(),
    shouldPass: true,
  }
];




export const passwordTests = [
      {
    title: "Signup should fail if Password format is invalid",
    passwordValue:"Test1234",
    passworConfirmedValue:" ",
    shouldPass: false,
    expectedError: "Password must be Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character",

  },
  {
    title: "Signup should fail if Confirm Password format is invalid",
    passwordValue: "TEST1234!",
    passworConfirmedValue: "TEST1234!",
    shouldPass: false,
    expectedError: "Password must be Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character",
  },
  {
    title: "Signup should fail if Password and Confirm Password do not matchs",
    passwordValue: "Test@1991!",
    passworConfirmedValue: "Test@1988!",    
    shouldPass: false,
    expectedError: "Second password does not match the first Password",

  },
  {
    title: "Signup should succeed if Password and Confirm Password match and valid",
    passwordValue: "Test@1991!",
    passworConfirmedValue: "Test@1991!",
    shouldPass: true,
  }
];
