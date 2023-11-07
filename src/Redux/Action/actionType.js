import { SHOWLOREM, ERRORLOREM,FETCHINGLOREM } from "./action";
import axios from "axios";
import store from "../store";

export const fetchingLorem = ()=>{
    return {
        type : FETCHINGLOREM,
    }
}

export const showLorem = (data) => {
  return {
    type: SHOWLOREM,
    payLoad: data,
  };
};

export const errorLorem = (data) => {
  return {
    type: ERRORLOREM,
    payLoad: data,
  };
};

export const fetchData = () => {
    store.dispatch(fetchingLorem());
  return function getData() {
    try {
      let response = axios
        .get(`https://api.api-ninjas.com/v1/loremipsum?paragraphs=2`, {
          headers: { "X-Api-Key": "8RW8lTj7i58zV3GO2VYdng==EH177Vrdhyq88U3D" },
        })
        .then((data) => {
          store.dispatch(showLorem(data.data.text));
        });
    } catch (error) {
      console.log(error.message);
    }
  };
};
