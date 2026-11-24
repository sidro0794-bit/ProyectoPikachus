// Componente: cabecera de la página
export function Header({ title }) {
  const header = document.createElement("header");
  const h1 = document.createElement("h1");
  h1.textContent = title;
  header.append(h1);
  return header;
}
