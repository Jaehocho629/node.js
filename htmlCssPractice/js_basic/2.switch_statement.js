const STATE_RUN = 'run';
const STATE_IDLE = 'idle';
const STATE_STOP = 'stop';
const STATE_PAUSE = 'pause';


let state = STATE_RUN;

switch(state){
    case STATE_RUN:
        console.log("action run");
        break;
    case STATE_IDLE:
        console.log("action idel");
        break;
    case STATE_STOP:
        console.log("action stop");
        break;
    case STATE_PAUSE:
        console.log("pause");
        break;
    default:
        console.log("ERROR! 다음 중 선택하세요.[RUN, IDLE, STOP, PAUSE]");
        break;

}
