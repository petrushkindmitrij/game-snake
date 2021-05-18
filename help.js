import{ hidePauseLayer, setPauseStatus} from './pause.js';


const divHelpLayer = document.getElementById('help-layer');
const btnResumeHelp = document.getElementById('btn-resume-help');

const btnHelpOnScreen = document.getElementById('help-btn');
const btnPauseOnScreen = document.getElementById('pause-btn');

let helpStatus = true;

export function initialHelpLayer() {  
  btnHelpOnScreen.onclick = () => {    
    showHelpLayer();
  };
  
  btnResumeHelp.onclick = () => {
    hideHelpLayer();
  };
}

export function helpToggle() {

  if (!helpStatus) {
    // console.log(document.getElementById('game-layer'));
      showHelpLayer();
  } else {
    hideHelpLayer();
  }
}

export function getHelpStatus() {
  return helpStatus;
}

function showHelpLayer() {
  hidePauseLayer();
  setPauseStatus(true);
  divHelpLayer.style.display = 'flex';
  btnHelpOnScreen.style.display = 'none';
  btnPauseOnScreen.style.display = 'none';
  helpStatus = true;  
}

function hideHelpLayer() {
  setPauseStatus(false);
  divHelpLayer.style.display = 'none';
  btnHelpOnScreen.style.display = 'block';
  btnPauseOnScreen.style.display = 'block';
  helpStatus = false;  
}