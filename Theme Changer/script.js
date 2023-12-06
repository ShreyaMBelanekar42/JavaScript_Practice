const buttons = document.querySelectorAll("button");
const body = document.querySelector("body");

buttons.forEach(function selectBg(button) {
  // console.log(button);
  button.addEventListener("click", function (e) {
    // console.log(e);
    // console.log(e.target);
    // if (e.target.id == "green") {
    //     body.style.backgroundColor = e.target.id;
    // } else if(e.target.id == "red"){
    //     body.style.backgroundColor = e.target.id;
    // }else if(e.target.id == "pink"){
    //     body.style.backgroundColor = e.target.id;
    // }else if(e.target.id == "orange"){
    //     body.style.backgroundColor = e.target.id;
    // }else if(e.target.id == "grey"){
    //     body.style.backgroundColor = e.target.id;
    // }else if(e.target.id == "purple"){
    //     body.style.backgroundColor = e.target.id;
    // }

    switch (e.target.id) {
      case "green":
        body.style.backgroundColor = e.target.id;
        break;

      case "red":
        body.style.backgroundColor = e.target.id;
        break;

      case "pink":
        body.style.backgroundColor = e.target.id;
        break;

      case "orange":
        body.style.backgroundColor = e.target.id;
        break;

      case "grey":
        body.style.backgroundColor = e.target.id;
        break;

      case "purple":
        body.style.backgroundColor = e.target.id;
        break;

      default:
        body.style.backgroundColor = "blue";
        break;
    }
  });
});
