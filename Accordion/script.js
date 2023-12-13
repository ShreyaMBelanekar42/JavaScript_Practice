let icon = document.getElementById("icon");
let accordion = document.getElementsByClassName("contentBox");

icon.onclick = function () {
  for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function () {
      this.classList.toggle("active");
    });
  }
};
