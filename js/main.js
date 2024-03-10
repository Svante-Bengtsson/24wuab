function myFunction() {
  var x = document.getElementById("menu-items");
  var menuIcon = document.querySelector('.hamburger-menu');
  if (x.style.marginRight === "0vw") {
    x.style.marginRight = "-80vw";
  } else {
    x.style.marginRight = "0vw";
  }
  /*chatgpt hjäpte med med nedanstående del av funktionen*/
  menuIcon.classList.toggle('change');
}
