// ════════════════════════════════════════════════════════════════════════
// Aztech II · FTC 17626 — interactividad del sitio
// El menú flotante de la trayectoria es 100% CSS (hover); aquí solo
// manejamos el respaldo visual si alguna imagen de temporada no carga.
// ════════════════════════════════════════════════════════════════════════
(function () {
  "use strict";

  // Si una imagen de temporada falla, la sustituimos por un placeholder.
  document.querySelectorAll(".season-photo").forEach(function (img) {
    img.addEventListener("error", function () {
      var fallback = document.createElement("div");
      fallback.className = "season-photo season-photo--missing";
      fallback.innerHTML = "Imagen<br>próximamente";
      img.replaceWith(fallback);
    });
  });

  // La foto del equipo también: si falta, evita el ícono roto.
  var team = document.querySelector(".team-photo");
  if (team) {
    team.addEventListener("error", function () {
      team.style.display = "none";
    });
  }
})();
