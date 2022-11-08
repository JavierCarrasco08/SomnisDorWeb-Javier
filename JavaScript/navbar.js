export function navModal() {
  const $button = document.querySelector(".hamburguer"),
    $nav = document.querySelector(".hero_navbar"),
    $ES = document.querySelector(".hero_idioma");
  document.addEventListener("click", (e) => {
    if (e.target.matches(".hamburguer *")) {
      $button.classList.toggle("isActive");
      $nav.classList.toggle("translate");
      $ES.classList.toggle("translateES");
    }
  });
}
