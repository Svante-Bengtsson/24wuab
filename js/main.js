let slideIndex = 1;
let slides = document.getElementsByClassName("slide");
function hamburgermeny() {
  var x = document.getElementById("menu-items");
  var menuIcon = document.querySelector('.hamburger-menu');
  x.classList.toggle('open');
  menuIcon.classList.toggle('change');
}

document.querySelectorAll('.click1').forEach(e => {
  let container1 = document.querySelector(".container1")
  var click2 = document.querySelector('.click2');
  e.addEventListener('click', () => {
    e.parentElement.children[1].classList.toggle('hide');
    click2.parentElement.children[1].classList.add('hide');
    console.log(click2.parentElement.children[1]);
    container1.classList.remove('contchange2')
    container1.classList.toggle('contchange1')
  })
});
document.querySelectorAll('.click2').forEach(e => {
  var container1 = document.querySelector(".container1")
  var click1 = document.querySelector('.click1');
  e.addEventListener('click', () => {
    e.parentElement.children[1].classList.toggle('hide');
    console.log(click1.parentElement.children[1]);
    click1.parentElement.children[1].classList.add('hide');
    container1.classList.remove('contchange1')
    container1.classList.toggle('contchange2')

  })
});
window.onscroll = function() {stickyaside()};
var aside = document.querySelector(".sidebar");
var sticky = aside.offsetTop
function stickyaside() {
  if (window.scrollY >= sticky) {
    aside.classList.add("sticky")
  } else {
    aside.classList.remove("sticky");
  }
}


showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function showSlides(n) {
  let i;
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slides[slideIndex-1].style.display = "block";
}