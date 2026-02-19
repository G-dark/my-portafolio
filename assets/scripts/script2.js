 function doingZoomOfAllScreen(container, initialScale = 0.6) {
  let scale = initialScale;
  // previene el comportamiento por defecto del scroll con Ctrl
  window.addEventListener(
    "wheel",
    function (e) {
      if (e.ctrlKey) {
        e.preventDefault();
      }
    },
    { passive: false }
  );

}

const zoomContainer = document.getElementById("zoom-container2");

doingZoomOfAllScreen(zoomContainer);

