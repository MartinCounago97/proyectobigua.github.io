function getRelativePath(fileName) {
  // Obtener el pathname actual y contar cuántas carpetas hay que subir
  const path = window.location.pathname;
  const depth = path.split("/").length - 2; // -2 porque el primero es vacío y el último es el archivo
  const prefix = "../".repeat(depth);
  return prefix + fileName;
}

// Cargar MENU
fetch(getRelativePath("menu.html"))
  .then((response) => {
    if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
    return response.text();
  })
  .then((html) => {
    /*const menu = document.getElementById("menu");
    if (menu) menu.innerHTML = html;*/
    document.getElementById("menu").outerHTML = html;
  })
  .catch((error) => console.error("Error loading menu:", error));

// Cargar FOOTER
fetch(getRelativePath("footer.html"))
  .then((response) => {
    if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
    return response.text();
  })
  .then((html) => {
    const footer = document.getElementById("footer");
    if (footer) footer.innerHTML = html;
  })
  .catch((error) => console.error("Error loading footer:", error));
