import React from "react";
import { useAxiosGetData } from "../components/services/useCustomState";

const initialUrl = "https://api.chucknorris.io/jokes/random";

export default function JokeCategory() {
  const { value: data } = useAxiosGetData(initialUrl);

  return (
    <div className="container3">
      <h1>{data.value}</h1>
    </div>
  );
}
