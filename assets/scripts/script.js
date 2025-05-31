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
for (const element of elements) {
  setEventListener2NShowModal(element);
}
// make zoom in and out to all the page
doingZoomOfAllScreen(zoomContainer);
