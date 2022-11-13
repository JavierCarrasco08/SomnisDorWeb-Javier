export function validation() {
  const $modal = document.querySelector(".modal");
  console.log($modal);
  // Correo electronico al que va enviado
  let correo = "somnisdorevents@gmail.com";
  document.addEventListener("input", (e) => {
    if (e.target.matches("form [required]")) {
      let $input = e.target,
        pattern = $input.pattern || $input.dataset.pattern;
      if (pattern && $input.value !== "") {
        let regx = new RegExp(pattern);
        return !regx.exec($input.value)
          ? (document.querySelector(`input[type="submit"]`).disabled = true)
          : (document.querySelector(`input[type="submit"]`).disabled = false);
      }
    }
  });

  document.addEventListener("submit", (e) => {
    if (e.target.matches(".form-ctc")) {
      e.preventDefault();
      $modal.classList.add("isActive-modal");

      fetch(`https://formsubmit.co/ajax/${correo}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          Name: e.target.nombre.value,
          Email: e.target.email.value,
          Mensaje: e.target.message.value,
        }),
      })
        .then((res) => (res.ok ? res.json() : Promise.reject(res)))
        .then((json) => {
          e.target.reset();
          // $modal.innerHTML = `<h2>${json.message}</h2>`;
          $modal.innerHTML = `<h2>${json.message}</h2>`;
          setTimeout(() => {
            $modal.classList.remove("isActive-modal");
          }, 2000);
          $modal.innerHTML = `
          <figure>
          <img src="../assets/leader.svg" alt="Loader...">
          </figure>`;
        })
        .catch((err) => {
          e.target.reset();
          console.log(err);
          $modal.innerHTML = `<h2>${err.message}</h2>`;
          setTimeout(() => {
            $modal.classList.remove("isActive-modal");
          }, 1000);
          $modal.innerHTML = `
          <figure>
          <img src="../assets/leader.svg" alt="Loader...">
          </figure>`;
        });
    }
  });
}
