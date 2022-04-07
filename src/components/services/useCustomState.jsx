import axios from "axios";
import { useEffect, useState } from "react";

export function useAxiosGetData(initialUrl) {
  const [value, setValue] = useState([]);
  useEffect(() => {
    axios.get(initialUrl).then((res) => {
      setValue(res.data);
    });
  }, [initialUrl]);
  return { value };
}

export function modalreducer(state, action) {
  console.log(action.type, action.title);
  switch (action.type) {
    case "imhere":
      console.log(action);
      return {
        ...state,
        imhere: true,
      };
    case "portfolio":
      return {
        ...state,
        portfolio: true,
      };
    case "simpletrello":
      return {
        ...state,
        simpletrello: true,
      };
    case "close":
      if (action.title === "I'm here!") {
        return {
          ...state,
          imhere: false,
        };
      } else if (action.title === "ポートフォリオサイト") {
        return {
          ...state,
          portfolio: false,
        };
      } else if (action.title === "Simple Trello") {
        return {
          ...state,
          simpletrello: false,
        };
      }
    // eslint-disable-next-line no-fallthrough
    default:
      return state;
      
  }
}
