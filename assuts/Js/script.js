document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector("#navbar");
  window.addEventListener("scroll", function () {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
});

let listToggle = document.getElementById("listToggle");
let list = document.getElementById("list");
listToggle.addEventListener("click", function () {
  if (list.classList.contains("d-none")) {
    list.classList.add("d-block");
    list.classList.remove("d-none");
  } else {
    list.classList.add("d-none");
    list.classList.remove("d-block");
  }
});
//////////////////////////////////////

const dropdownMenus = document.querySelectorAll(".nav_links ul li");

dropdownMenus.forEach((menu) => {
  const dropdown = menu.querySelector(".dropDown");

  if (dropdown) {
    menu.addEventListener("mouseenter", () => {
      dropdown.style.transition = "opacity 0.5s ease, transform 0.5s ease";
      dropdown.style.display = "block";
      dropdown.style.opacity = "1";
      dropdown.style.visibility = "visible";
      dropdown.style.transform = "translateY(0)";
    });

    menu.addEventListener("mouseleave", () => {
      dropdown.style.display = "none";
      dropdown.style.opacity = "0";
      dropdown.style.visibility = "hidden";
      dropdown.style.transform = "translateY(-10px)";
    });
  }
});

document.querySelectorAll(".nav_links a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault(); 

    const targetId = this.getAttribute("href"); 
    const targetSection = document.querySelector(targetId); 

    targetSection.scrollIntoView({
      behavior: "smooth",
    });
  });
});
/*////////////////////////////////////// */

////////////// Scroll Top////////////////
let span = document.querySelector(".up");
window.onscroll = function () {
  if (this.scrollY >= 1000) {
    span.classList.add("show");
  } else {
    span.classList.remove("show");
  }
};
span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
////////////// Scroll Top////////////////

window.addEventListener("load", function () {
  document.getElementById("loading-screen").style.display = "none";
});
////////////////////////////////////
