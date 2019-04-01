function nav() {
  let n = document.getElementById("myTopnav");

  if (n.className === "topnav") {
    n.className += " responsive";
  } else {
    n.className = "topnav";
  }
}