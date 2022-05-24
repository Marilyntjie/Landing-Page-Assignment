function onClick() {
    var x = document.getElementById("menu");
    if (x.className === "menu") {
      x.className += " dropdown";
    } else {
      x.className = "menu";
    }
  }