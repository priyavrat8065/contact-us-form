const fields = document.querySelectorAll("input, textarea");
const btn = document.querySelector(".btn");
//
const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

btn.addEventListener("click", function () {
  // Reset the isFieldEmpty value to false
  isFieldEmpty = false;
  // Hide all the unhidden error messages resulted from the previous submit button click
  for (const el of document.querySelectorAll(".error-msg, .invalid-email")) {
    el.classList.add("hidden");
  }
  let count = 0;
  for (const field of fields) {
    // check if textfield is empty
    if (field.value === "") {
      isFieldEmpty = true;
      const selector = `#${field.getAttribute("id")} + .error-msg`;
      // console.log(selector);
      document.querySelector(`${selector}`).classList.toggle("hidden");
    } else {
      // check if radio button is checked or not
      if (field.getAttribute("name") === "query") {
        if (!field.checked) {
          count += 1;
        }
        // check if consent button checkbox is left unchecked or not
      } else if (!field.checked && field.getAttribute("id") === "consent") {
        isFieldEmpty = true;
        document
          .querySelector(".consent .error-msg")
          .classList.toggle("hidden");
      }
    }
  }
  // if count is equal to 2 it means neither radio button is checked
  if (count === 2) {
    isFieldEmpty = true;
    document.querySelector(".query .error-msg").classList.toggle("hidden");
  }
  // Check for email validity
  const email = document.querySelector("#email").value;
  // if (email.includes('@') ) {
  //   const [username, domain] = email.split('@');
  //   console.log(username);
  //   checkUsrDomValidity(username);
  //   if (domain.includes('.')){
  //     checkUsrDomValidity(domain);
  //   } else {
  //     console.log("invalid email");
  //   }
  // } else {
  //   if (email !== "") {
  //     console.log('Email does not inlcude @');
  //   }

  // }
  if (email !== "") {
    if (validateEmail(email)) {
      // console.log("valid");
  
    } else {
      console.log("invalid");
      document.querySelector('.invalid-email').classList.remove('hidden');
    }
  }
  if (!isFieldEmpty) {
    // display the success message
    document.querySelector(".success-msg").classList.remove("hidden");
    // hide the success message after 3 secs
    setTimeout(
      () => document.querySelector(".success-msg").classList.add("hidden"),
      3000
    );
    // Reset the whole form
    document.querySelector("form").reset();
  }
});
