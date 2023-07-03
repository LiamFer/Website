const menuBtn = document.querySelector(".menu");

menuBtn.addEventListener("click", (ev) => {
  let button = ev.currentTarget;
  let navBar = document.getElementById("menu");
  button.classList.toggle("opened");
  button.setAttribute("aria-expanded", button.classList.contains("opened"));
  navBar.classList.toggle("appear");
});

var counter = document.getElementById('experienceYears');

function increment(i, max){
  if(i > max) return;
  setTimeout(function(){
    counter.innerText = i ;
    increment(i+1, max);
  },80)
}

increment(0,20);