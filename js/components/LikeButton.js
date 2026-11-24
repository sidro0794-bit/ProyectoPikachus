// Componente: botón de like. Gestiona su propio estado visual y su clic.
export function LikeButton({ name, liked = false, onToggle }) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "like";

  function render() {
    button.classList.toggle("like--active", liked);
    button.textContent = liked ? "♥" : "♡";
    button.setAttribute("aria-pressed", String(liked));
    button.setAttribute("aria-label", `${liked ? "Quitar like a" : "Dar like a"} ${name}`);
  }

  button.addEventListener("click", () => {
    liked = onToggle();
    render();
  });

  render();
  return button;
}
