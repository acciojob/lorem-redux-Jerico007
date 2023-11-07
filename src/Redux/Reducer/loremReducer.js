
import { SHOWLOREM, ERRORLOREM ,FETCHINGLOREM} from "../Action/action";

const initial = {
  title: "",
  error: null,
  fetching: false,
};

const loremReducer = (state = initial, action) => {
  if (action.type === SHOWLOREM) {
    return { ...state, title: action.payLoad ,fetching:false,error : null};
  } 
  else if(action.type === FETCHINGLOREM){
    return {...state , fetching : true};
  }
  else if (action.type === ERRORLOREM) {
    return { ...state, error: action.payLoad,fetching:false };
  }
  return state;
};

export default loremReducer;