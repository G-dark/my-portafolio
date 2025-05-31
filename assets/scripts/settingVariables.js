// Imans

// Iman 1
const iman1 = document.getElementById("iman1"); // select the element of the document
const dragstate = {
  isDragging: false, // set the var track the drag on false by default
  // deffine vars for controll the offsets
  offsetX: 0,
  offsetY: 0,
};

// iman2

const iman2 = document.getElementById("iman2"); // select the element of the document
const dragstate2 = {
  isDragging: false, // set the var track the drag on false by default
  // deffine vars for controll the offsets
  offsetX: 0,
  offsetY: 0,
};

// iman3

const iman3 = document.getElementById("iman3"); // select the element of the document
const dragstate3 = {
  isDragging: false, // set the var track the drag on false by default
  // deffine vars for controll the offsets
  offsetX: 0,
  offsetY: 0,
};
// iman 4

const iman4 = document.getElementById("iman4"); // select the element of the document
const dragstate4 = {
  isDragging: false, // set the var track the drag on false by default
  // deffine vars for controll the offsets
  offsetX: 0,
  offsetY: 0,
};
// iman 5

const iman5 = document.getElementById("iman5"); // select the element of the document
const dragstate5 = {
  isDragging: false, // set the var track the drag on false by default
  // deffine vars for controll the offsets
  offsetX: 0,
  offsetY: 0,
};
const elemento2show1 = document.querySelector(".sticked-container");
const elemento2show2 = document.querySelector(".sticked-container2");
const elemento2show3 = document.querySelector(".sticked-container3");
const elemento2show4 = document.querySelector(".sticked-container4");
const elemento2show5 = document.querySelector(".sticked-container5");

export const zoomContainer = document.getElementById("zoom-container");

export const imans = [
  [iman1, dragstate],
  [iman2, dragstate2],
  [iman3, dragstate3],
  [iman4, dragstate4],
  [iman5, dragstate5],
];

export const elements = [
  elemento2show1,
  elemento2show2,
  elemento2show3,
  elemento2show4,
  elemento2show5,
];


