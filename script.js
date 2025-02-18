const fields = document.querySelectorAll("input, textarea");
const btn = document.querySelector(".btn");


btn.addEventListener("click", function () {
  // Reset the isFieldEmpty value to false
  isFieldEmpty = false;
  // Hide all the unhidden error messages resulted from the previous submit button click
  for (const el of document.querySelectorAll(".error-msg")) {
    el.classList.add("hidden");
  }
  let count = 0;
  for (const field of fields) {
    // check if textfield is empty
    if (field.value === "") {
      isFieldEmpty = true;
      const selector = `#${field.getAttribute('id')} + .error-msg`;
      console.log(selector);
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

  if (!isFieldEmpty) {
    // display the success message
    document.querySelector('.success-msg').classList.remove('hidden');
    // hide the success message after 3 secs
    setTimeout( () => document.querySelector('.success-msg').classList.add('hidden'), 3000);
    // Reset the whole form
    document.querySelector('form').reset();
  }
});
