import React from "react";
import {FetchData} from "../Hooks/FetchData";
export const Data = () => {
  const apiUrl = " https://api.chucknorris.io/jokes/random";
  const {data, isLoading, error} = FetchData(apiUrl);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.massage}</p>;
  }

  return (
    <div>
      <h1>Data from API</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
