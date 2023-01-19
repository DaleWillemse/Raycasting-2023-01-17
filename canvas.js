window.addEventListener("load", () => {
  const canvas = document.querySelector("#canvas");
  const context = canvas.getContext("2d");

  canvas.height = 600;
  canvas.width = 900;

  let painting = false;

  function startPos(e) {
    context.fillRect(e.clientX - 500, e.clientY - 200, 150, 50);
  }

  canvas.addEventListener("mousedown", startPos);
});
