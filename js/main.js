
function createContext() {
  const canvas = document.querySelector("#canvas");
  const ctx = canvas.getContext("webgl");
  if (ctx === null) {
    alert("Unable to initialize WebGL. Your browser or machine may not support it.");
    return;
  }
  return ctx;
}

const gl = createContext();

function main() {
  // Set clear color to black, fully opaque
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  // Clear the color buffer with specified clear color
  gl.clear(gl.COLOR_BUFFER_BIT);
}

main();
