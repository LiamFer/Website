const menuBtn = document.querySelector(".menu");

menuBtn.addEventListener("click", (ev) => {
  let button = ev.currentTarget;
  let navBar = document.getElementById("menu");
  button.classList.toggle("opened");
  button.setAttribute("aria-expanded", button.classList.contains("opened"));
  navBar.classList.toggle("appear");
});

let counter = document.getElementById("experienceYears");

function increment(i, max) {
  if (i > max) return;
  setTimeout(function () {
    counter.innerText = i;
    increment(i + 1, max);
  }, 80);
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      if (entry.target.dataset.box == "experience-box") {
        increment(0, 20);
        entry.target.dataset.box = "0";
      }
    }
    entry.target.unobserve();
  });
});

const hiddenContent = document.querySelectorAll(".hidden");
hiddenContent.forEach((ev) => observer.observe(ev));
