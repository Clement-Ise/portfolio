/*Line*/
var lines = document.querySelectorAll(".lines_head");
var i = 0;
if (lines) {
  lines.forEach(function (el) {
    gsap.set(el, { strokeDasharray: el.getTotalLength() });
    gsap.fromTo(
      el,
      { strokeDashoffset: el.getTotalLength(), opacity: 0 },
      { strokeDashoffset: 0, opacity: 1, duration: 2, delay: i / 4 + 0.5 }
    );
    i++;
  });
}

/*Photos */
const items = document.querySelectorAll(".item");
const image = document.querySelector(".me");

items.forEach((el) => {
  el.addEventListener("mouseover", (e) => {
    imageData = e.target.getAttribute("data-image");
    console.log(imageData);
    e.target.style.zIndex = 99;
    image.setAttribute("src", imageData);
  });
  el.addEventListener("mousemove", (e) => {
    image.style.top = e.clientY + "px";
    image.style.left = e.clientX + "px";
  });
  el.addEventListener("mouseleave", (e) => {
    e.target.style.zIndex = 1;
    image.setAttribute("src", "");
  });
});

/* Copyright*/
var date = new Date().getFullYear();

document.getElementById("year").innerHTML = date;
