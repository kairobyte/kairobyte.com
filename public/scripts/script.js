const openOption = document.getElementById("open");
const closeOption = document.getElementById("close");
const content = document.getElementById("nav-content-id");

openOption.addEventListener("click", () => {
  openOption.style.display = "none";
  closeOption.style.display = "block";
  content.classList.add("vis");
})

closeOption.addEventListener("click", () => {
  closeOption.style.display = "none";
  openOption.style.display = "block";
  content.classList.remove("vis");
})