async function loadComponent(id, file) {
  const response = await fetch(file);
  const data = await response.text();
  document.getElementById(id).innerHTML = data;
}

loadComponent("header", "Header.html");
loadComponent("footer", "footer.html");
document.addEventListener("click", function(e) {

  const btn = document.getElementById("menuBtn");
  const menu = document.getElementById("mobileMenu");

  if(btn && e.target === btn){
    menu.classList.toggle("hidden");
  }

});