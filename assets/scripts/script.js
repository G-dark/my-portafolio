// imports required of the functions
import {
  configureTheVarsForBeginning,
  changeVarsWhenMouseMoves,
  finishMovement,
  setEventListener2NShowModal,
  doingZoomOfAllScreen,
} from "./functions.js";
// imports required of the variables setted
import { imans, elements, zoomContainer } from "./settingVariables.js";

// call all the functions for making the iman moves
for (const [iman, dragstate] of imans) {
  configureTheVarsForBeginning(iman, dragstate);
  changeVarsWhenMouseMoves(iman, dragstate);
  finishMovement(iman, dragstate);
}
// make zoom to a sticked
for (let i = 0; i < elements.length; ++i) {
  setEventListener2NShowModal(elements[i], i + 1);
}
// make zoom in and out to all the page
doingZoomOfAllScreen(zoomContainer);
