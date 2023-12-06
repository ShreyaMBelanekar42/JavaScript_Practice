const form = document.querySelector("form");
console.log(form);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#results");
  const weightCheck = document.querySelector("#weightCheck");

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `Please enter valid height`;
    // hide msg
    setTimeout(() => {
      result.innerHTML = "";
    }, 3000);
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please enter valid weight`;
    // hide msg
    setTimeout(() => {
      result.innerHTML = "";
    }, 3000);
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //display results
    result.innerHTML = `<span>${bmi}</span>`;
    setTimeout(() => {
      result.innerHTML = "";
    }, 5000);

    if (isNaN(bmi) || bmi < 0) {
      weightCheck.innerHTML = `<span>Invalid BMI</span>`;
      // hide msg
      setTimeout(() => {
        weightCheck.innerHTML = "";
      }, 5000);
    } else if (bmi < 18.6) {
      weightCheck.innerHTML = `<span>Underweight</span>`;
      // hide msg
      setTimeout(() => {
        weightCheck.innerHTML = "";
      }, 5000);
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      weightCheck.innerHTML = `<span>Normal Weight</span>`;
      // hide msg
      setTimeout(() => {
        weightCheck.innerHTML = "";
      }, 5000);
    } else if (bmi > 24.9) {
      weightCheck.innerHTML = `<span>Overweight</span>`;
      // hide msg
      setTimeout(() => {
        weightCheck.innerHTML = "";
      }, 5000);
    }
  }
  //clear input fields when a form is submitted
  this.reset();
});
