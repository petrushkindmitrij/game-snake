import { getHelpStatus } from './help.js';

const divPauseLayer = document.getElementById('pause-layer');
const btnResumePause = document.getElementById('btn-resume-pause');
const btnPauseOnScreen = document.getElementById('pause-btn'); //кнопка паузы на экране

let pauseStatus = true;

export function initialPauseLayer() {  
  btnResumePause.onclick = () => { 
    hidePauseLayer();
  };
  
  
  btnPauseOnScreen.onclick = () => {
    showPauseLayer();
  }
}

export function pauseToggle() {

    if (!getHelpStatus()){
      if (!pauseStatus) {
        // console.log(document.getElementById('pause-layer'));         
        showPauseLayer();
        
      } else {
        hidePauseLayer();
        
      }
    }
}

export function getPauseStatus() {
  return pauseStatus;
}

export function setPauseStatus(value) {
  pauseStatus = value;
}

export function showPauseLayer() {
  divPauseLayer.style.display = 'flex';
  btnPauseOnScreen.style.display = 'none';
  pauseStatus = true;
}

export function hidePauseLayer() {
  divPauseLayer.style.display = 'none';  
  btnPauseOnScreen.style.display = 'block';
  pauseStatus = false;
}