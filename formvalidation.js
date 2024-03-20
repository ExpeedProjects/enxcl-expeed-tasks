function validationForm() {
  const name = document.getElementById("exampleInputname").value.trim();
  const email = document.getElementById("exampleInputEmail").value.trim();
  const password = document.getElementById("exampleInputPassword").value.trim();
  const phone = document.getElementById("exampleInputelephone").value.trim();
  let isValid = true;

  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";
  document.getElementById("phnError").textContent = "";

  if (name === "") {
    document.getElementById("nameError").textContent = "name is required!";
    isValid = false;
  }

  if (email === "") {
    document.getElementById("emailError").textContent = "email is mandatory!";
    isValid = false;
  }

  if (password.length < 8) {
    document.getElementById("passwordError").textContent =
      "Password is mandatory!(contain atleast 8 characters)";
    isValid = false;
  } else if (
    !/(?=.[a-zA-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%*?&]{8,}/.test(password)
  ) {
    passwordError.textContent =
      "Password must contain at least one letter, one number, and one special character and be at least 8 characters long";
    isValid = false;
  } else {
    passwordError.textContent = "Password added successfully";
  }
  if (phone.length < 10) {
    document.getElementById("phnError").textContent =
      "phone number is mandatory!(must contain 10 characters)";
    isValid = false;
  }
  return isValid;
}
