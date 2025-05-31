export function configureTheVarsForBeginning(iman, dragstate) {
  // add event listener and set the vars when the element be press down
  iman.addEventListener("mousedown", (e) => {
    dragstate.isDragging = true;
    dragstate.offsetX = e.clientX - iman.offsetLeft;
    dragstate.offsetY = e.clientY - iman.offsetTop;
    iman.style.cursor = "grabbing";
  });
}
export function changeVarsWhenMouseMoves(iman, dragstate) {
  // add event listener to change the var when the mouse moves
  document.addEventListener("mousemove", (e) => {
    if (dragstate.isDragging) {
      iman.style.left = e.clientX - dragstate.offsetX + "px";
      iman.style.top = e.clientY - dragstate.offsetY + "px";
    }
  });
}

export function finishMovement(iman, dragstate) {
  // add event listener when the click done
  document.addEventListener("mouseup", () => {
    dragstate.isDragging = false;
    iman.style.cursor = "grab";
  });
}

export function setEventListener2NShowModal(element, number) {
  element.addEventListener("mousedown", () => {
    showModal(element, number);
  });
}

export function showModal(element, number) {
  // Aplicar desenfoque al fondo
  document.querySelector(".background").classList.add("blurred");

  // Inyectar HTML del modal
  if (number == 4) {
    document.getElementById("modal-container").innerHTML = `
        <div class="overlay" onclick="cerrarModal()"></div>
        <div id="page" class="modal">
         <div style="margin-top: 10px; display:flex; flex-direction:row; justify-content:end;">
           <button style = z-index: 1001; "background-color:white; border:none;"onclick="cerrarModal()">X</button>
          </div>
        <div id="page" style="position:sticked;">
        <div id="cinta3" class="cinta"></div>
          ${element.innerHTML}
        </div>

        </div>
      `;
  } else {
        document.getElementById("modal-container").innerHTML = `
        <div class="overlay" onclick="cerrarModal()"></div>
        <div id="page" class="modal">
         <div style="margin-top: 10px; display:flex; flex-direction:row; justify-content:end;">
           <button style = "background-color:white; border:none;"onclick="cerrarModal()">X</button>
          </div>
        <div id="page" style="position:sticked;">
          ${element.innerHTML}
        </div>

        </div>
      `;
  }

  makeZoom(1.5);
}

export function makeZoom(escala) {
  document.getElementById("page").style.transform = `scale(${escala})`;
}

function cerrarModal() {
  // Quitar el modal y el desenfoque
  document.getElementById("modal-container").innerHTML = "";
  document.querySelector(".background").classList.remove("blurred");
  hacerZoom(1);
}
window.cerrarModal = cerrarModal;

export function doingZoomOfAllScreen(container, initialScale = 1) {
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

  container.addEventListener("wheel", function (e) {
    if (e.ctrlKey) {
      e.preventDefault(); // Prevent scroll

      const zoomIntensity = 0.1;
      if (e.deltaY < 0) {
        scale += zoomIntensity; // Zoom in
      } else {
        scale = Math.max(0.1, scale - zoomIntensity); // Zoom out
      }

      container.style.transform = `scale(${scale})`;
    }
  });
}
