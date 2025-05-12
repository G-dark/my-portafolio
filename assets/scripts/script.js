const div = document.getElementById("iman1");
let isDragging = false;
let offsetX, offsetY;

div.addEventListener("mousedown", (e) => {
  isDragging = true;
  offsetX = e.clientX - div.offsetLeft;
  offsetY = e.clientY - div.offsetTop;
  div.style.cursor = "grabbing";
});

document.addEventListener("mousemove", (e) => {
  if (isDragging) {
    div.style.left = e.clientX - offsetX + "px";
    div.style.top = e.clientY - offsetY + "px";
  }
});

document.addEventListener("mouseup", () => {
  isDragging = false;
  div.style.cursor = "grab";
});

const div2 = document.getElementById("iman2");
let isDragging2 = false;
let offsetX2, offsetY2;

div2.addEventListener("mousedown", (e) => {
  isDragging2 = true;
  offsetX2 = e.clientX - div2.offsetLeft;
  offsetY2 = e.clientY - div2.offsetTop;
  div2.style.cursor = "grabbing";
});

document.addEventListener("mousemove", (e) => {
  if (isDragging2) {
    div2.style.left = e.clientX - offsetX2 + "px";
    div2.style.top = e.clientY - offsetY2 + "px";
  }
});

document.addEventListener("mouseup", () => {
  isDragging2 = false;
  div2.style.cursor = "grab";
});

const div3 = document.getElementById("iman3");
let isDragging3 = false;
let offsetX3, offsetY3;

div3.addEventListener("mousedown", (e) => {
  isDragging3 = true;
  offsetX3 = e.clientX - div3.offsetLeft;
  offsetY3 = e.clientY - div3.offsetTop;
  div3.style.cursor = "grabbing";
});

document.addEventListener("mousemove", (e) => {
  if (isDragging3) {
    div3.style.left = e.clientX - offsetX3 + "px";
    div3.style.top = e.clientY - offsetY3 + "px";
  }
});

document.addEventListener("mouseup", () => {
  isDragging3 = false;
  div3.style.cursor = "grab";
});

const div4 = document.getElementById("iman4");
console.log(div4.innerHTML);
let isDragging4 = false;
let offsetX4, offsetY4;

div4.addEventListener("mousedown", (e) => {
  isDragging4 = true;
  offsetX4 = e.clientX - div4.offsetLeft;
  offsetY4 = e.clientY - div4.offsetTop;
  div4.style.cursor = "grabbing";
});

document.addEventListener("mousemove", (e) => {
  if (isDragging4) {
    div4.style.left = e.clientX - offsetX4 + "px";
    div4.style.top = e.clientY - offsetY4 + "px";
  }
});

document.addEventListener("mouseup", () => {
  isDragging4 = false;
  div4.style.cursor = "grab";
});

const elemento2show1 = document.querySelector(".sticked-container");
const elemento2show2 = document.querySelector(".sticked-container2");
const elemento2show3 = document.querySelector(".sticked-container3");
const elemento2show4 = document.querySelector(".sticked-container4");
const elemento2show5 = document.querySelector(".sticked-container5");
elemento2show1.addEventListener("mousedown", () => {
  mostrarModal();
});
elemento2show2.addEventListener("mousedown", () => {
  mostrarModal2();
});
elemento2show3.addEventListener("mousedown", () => {
  mostrarModal3();
});
elemento2show4.addEventListener("mousedown", () => {
  mostrarModal4();
});
elemento2show5.addEventListener("mousedown", () => {
  mostrarModal5();
});
function mostrarModal() {
  // Aplicar desenfoque al fondo
  document.querySelector(".background").classList.add("blurred");

  // Inyectar HTML del modal

  document.getElementById("modal-container").innerHTML = `
        <div class="overlay" onclick="cerrarModal()"></div>
        <div id="page" class="modal">
         <div style="margin-top: 10px; display:flex; flex-direction:row; justify-content:end;">
           <button style = "background-color:white; border:none;"onclick="cerrarModal()">X</button>
          </div>
        <div id="page" style="position:sticked;">
          ${elemento2show1.innerHTML}
        </div>

        </div>
      `;
  hacerZoom(1.5);
}

function mostrarModal2() {
  // Aplicar desenfoque al fondo
  document.querySelector(".background").classList.add("blurred");

  // Inyectar HTML del modal

  document.getElementById("modal-container").innerHTML = `
        <div class="overlay" onclick="cerrarModal()"></div>

        <div id="page" class="modal">
            <div style="margin-top: 10px; display:flex; flex-direction:row; justify-content:end;">
           <button style = "background-color:white; border:none;"onclick="cerrarModal()">X</button>
          </div>
        <div style="position:sticked;">
          ${elemento2show2.innerHTML}
        </div>
        </div>
      `;
  hacerZoom(1.5);
}

function mostrarModal3() {
  // Aplicar desenfoque al fondo
  document.querySelector(".background").classList.add("blurred");

  // Inyectar HTML del modal

  document.getElementById("modal-container").innerHTML = `
        <div class="overlay" onclick="cerrarModal()"></div>

        <div id="page" class="modal">
            <div style="margin-top: 10px; display:flex; flex-direction:row; justify-content:end;">
           <button style = "background-color:white; border:none;"onclick="cerrarModal()">X</button>
          </div>
        <div style="position:sticked;">
          ${elemento2show3.innerHTML}
        </div>
        </div>
      `;
  hacerZoom(1.5);
}

function mostrarModal4() {
  // Aplicar desenfoque al fondo
  document.querySelector(".background").classList.add("blurred");

  // Inyectar HTML del modal

  document.getElementById("modal-container").innerHTML = `
        <div class="overlay" onclick="cerrarModal()"></div>

        <div id="page" class="modal">
            <div style="margin-top: 10px; display:flex; flex-direction:row; justify-content:end;">
           <button style = "z-index: 1003 ;background-color:transparent; border:none;"onclick="cerrarModal()">X</button>
          </div>
        <div style="position:sticked;">
        <div id="cinta3" class="cinta"></div>
          ${elemento2show4.innerHTML}
        </div>
        </div>
      `;
  hacerZoom(2);
}
function mostrarModal5() {
  // Aplicar desenfoque al fondo
  document.querySelector(".background").classList.add("blurred");

  // Inyectar HTML del modal

  document.getElementById("modal-container").innerHTML = `
        <div class="overlay" onclick="cerrarModal()"></div>

        <div id="page" class="modal">
            <div style="margin-top: 10px; display:flex; flex-direction:row; justify-content:end;">
           <button style = "z-index: 1003 ;background-color:transparent; border:none;"onclick="cerrarModal()">X</button>
          </div>
        <div style="position:sticked;">
          ${elemento2show5.innerHTML}
        </div>
        </div>
      `;
  hacerZoom(1.2);
}
function hacerZoom(escala) {
  document.getElementById("page").style.transform = `scale(${escala})`;
}

function cerrarModal() {
  // Quitar el modal y el desenfoque
  document.getElementById("modal-container").innerHTML = "";
  document.querySelector(".background").classList.remove("blurred");
  hacerZoom(1);
}

const zoomContainer = document.getElementById("zoom-container");
let scale = 1;
// previene el comportamiento por defecto del scroll con Ctrl
window.addEventListener('wheel', function (e) {
  if (e.ctrlKey) {
    e.preventDefault();
  }
}, { passive: false });

zoomContainer.addEventListener("wheel", function (e) {
  if (e.ctrlKey) {
    e.preventDefault(); // Prevent scroll

    const zoomIntensity = 0.1;
    if (e.deltaY < 0) {
      scale += zoomIntensity; // Zoom in
    } else {
      scale = Math.max(0.1, scale - zoomIntensity); // Zoom out
    }

    zoomContainer.style.transform = `scale(${scale})`;
  }
});
