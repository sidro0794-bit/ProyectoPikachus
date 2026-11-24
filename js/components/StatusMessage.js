// Componente: mensaje de estado (cargando, error con reintento, lista vacía)
function StatusMessage({ role, message, action }) {
  const box = document.createElement("div");
  box.className = "status";
  box.setAttribute("role", role);
  const text = document.createElement("p");
  text.textContent = message;
  box.append(text);
  if (action) box.append(action);
  return box;
}

export function LoadingMessage() {
  return StatusMessage({ role: "status", message: "Cargando Pokémon…" });
}

export function ErrorMessage({ onRetry }) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "retry";
  button.textContent = "Reintentar";
  button.addEventListener("click", onRetry);
  return StatusMessage({
    role: "alert",
    message: "No se han podido cargar los Pokémon.",
    action: button,
  });
}

export function EmptyMessage() {
  return StatusMessage({ role: "status", message: "No hay Pokémon para mostrar." });
}
