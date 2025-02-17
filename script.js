const fields = document.querySelectorAll("input, textarea");
const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  for (const el of document.querySelectorAll(".error-msg")) {
    el.classList.add("hidden");
  }
  let count = 0;
  for (const field of fields) {
    // console.log(field);
    // console.log(field.getAttribute("id"));
    // console.log(box.value);
    // if (box.value === "") console.log(box.getAttribute("id"));
    if (field.value === "") {
      // console.log(`${field.getAttribute("id")} is empty`);
      const selector = `#${field.getAttribute("id")} + .error-msg`;
      console.log(selector);
      document.querySelector(`${selector}`).classList.toggle("hidden");
    } else {
      if (field.getAttribute("name") === "query") {
        if (!field.checked) {
          count += 1;
        }
      } else if (!field.checked && field.getAttribute("id") === "consent") {
        document
          .querySelector(".consent .error-msg")
          .classList.toggle("hidden");
      }
    }
  }
  console.log(count);
  if (count === 2) {
    document.querySelector(".query .error-msg").classList.toggle("hidden");
  }
});
