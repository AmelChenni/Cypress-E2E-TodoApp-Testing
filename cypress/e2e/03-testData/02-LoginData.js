

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
    title: "Signup should succeed if Email is valid and new",
    value: "testCorrect@gmail.com",
    shouldPass: true,
  }
];




export const passwordTests = [
      {
    title: "Signup should fail if Password format is invalid",
    value :"Test1234",
    shouldPass: false,
    expectedError: "Password must be Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character",

  },
  {
    title: "Signup should fail if Password not Correct",
    value : "Test@1991!",
    shouldPass: true,
    // expectedError: "Second password does not match the first Password",

  },
  {
    title: "Signup should succeed if Password and Email are Correct ",
    value : "Test@1991!",
    shouldPass: true,
  }
];
