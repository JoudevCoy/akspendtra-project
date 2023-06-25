// bagian javascript

let navbtn = document.querySelector(".btn-navbar"),
  navbar = document.querySelector(".navbar");

navbtn.addEventListener('click', function(){
  navbar.classList.toggle("navbar-active");
});