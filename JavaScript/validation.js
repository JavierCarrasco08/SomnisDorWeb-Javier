export function validation() {
  document.addEventListener("input", (e) => {
    if (e.target.matches("form [required]")) {
      let $input = e.target,
        pattern = $input.pattern || $input.dataset.pattern;
      console.log($input);
      if (pattern && $input.value !== "") {
        let regx = new RegExp(pattern);
        return !regx.exec($input.value)
          ? (document.querySelector(`input[type="submit"]`).disabled = true)
          : (document.querySelector(`input[type="submit"]`).disabled = false);
      }
    }
  });
}
