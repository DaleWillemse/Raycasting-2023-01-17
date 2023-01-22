window.addEventListener("load", () => {
  const canvas = document.querySelector("#canvas");
  const context = canvas.getContext("2d");

  canvas.height = 600;
  canvas.width = 900;

  const draw = setInterval(function startPos(e) {
    let x = Math.random() * 800;
    let y = Math.random() * 500;
    context.fillRect(x, y, 150, 50); // creating a rect
  }, 500);
});
