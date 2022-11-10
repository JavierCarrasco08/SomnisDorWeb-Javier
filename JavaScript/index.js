import { navModal } from "./navbar.js";
import { validation } from "./validation.js";
import { cookies } from "./cookies.js";

document.addEventListener("DOMContentLoaded", () => {
  cookies();
  validation();
  navModal();
});
