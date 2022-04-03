import axios from "axios";
import { useEffect, useState } from "react";

export function useAxiosGetData(initialUrl) {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(initialUrl, { responseType: "blob" }).then((res) => {
      setData([URL.createObjectURL(res.data)]);
    });
  }, [initialUrl]);
  return { data };
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
    default:
      return state;
  }
}
