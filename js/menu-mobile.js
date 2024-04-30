export default function menuMobile() {
  const btnMobile = document.getElementById("btn-mobile");
  const nav = document.getElementById("nav");
  const body = document.body;

  function toggleMenu(event) {
    if (event.type === "touchstart") event.preventDefault();

    nav.classList.toggle("active");
    const active = nav.classList.contains("active");

    if (active) {
      body.classList.add("menu-active");
      btnMobile.setAttribute("aria-expanded", true);
      btnMobile.setAttribute("aria-label", "Fechar Menu");
    } else {
      body.classList.remove("menu-active");
      btnMobile.setAttribute("aria-expanded", false);
      btnMobile.setAttribute("aria-label", "Abrir Menu");
    }
  }

  function closeMenuOutsideClick(event) {
    const isClickInsideMenu =
      nav.contains(event.target) || btnMobile.contains(event.target);

    if (!isClickInsideMenu && nav.classList.contains("active")) {
      nav.classList.remove("active");
      body.classList.remove("menu-active");
      btnMobile.setAttribute("aria-expanded", false);
      btnMobile.setAttribute("aria-label", "Abrir Menu");
    }
  }

  btnMobile.addEventListener("click", toggleMenu);
  btnMobile.addEventListener("touchstart", toggleMenu);
  document.addEventListener("click", closeMenuOutsideClick);
}
