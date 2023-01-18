window.addEventListener("load", () => {
  const canvas = document.querySelector("#canvas");
  const context = canvas.getContext("2d");

  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  let painting = false;

  function startPos(e) {
    painting = true;
    draw(e);
  }

  function endPos() {
    painting = false;
    context.beginPath();
  }

  function draw(e) {
    if (!painting) return;
    context.lineWidth = 5;
    context.lineCap = "round";

    context.lineTo(e.clientX, e.clientY);
    context.stroke();
  }
  canvas.addEventListener("mousedown", startPos);
  canvas.addEventListener("mouseup", endPos);
  canvas.addEventListener("mousemove", draw);
});
