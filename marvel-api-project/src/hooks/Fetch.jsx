import { useState, useEffect } from "react";
import * as React from "react";
import "../styles/card.css";
/*This Fetch function uses the useEffect() to fetch the Marvel API hash
and then the Promise.all function awaits the API requests to settle in where 
they are then processed in the console and also set as SetMarvel# */
const Fetch = () => {
  const [marvel, SetMarvel] = useState([]);
  const [marvel2, SetMarvel2] = useState([]);
  useEffect(() => {
    const request1 = fetch(
      "https://gateway.marvel.com/v1/public/characters?limit=100&ts=1&apikey=869df33cbed7f29ac109149da9ccf83e&hash=d43a9e6097fe7b58c5be2871a3983e8c",
    ).then((response) => response.json());
    const request2 = fetch(
      "https://gateway.marvel.com/v1/public/characters?limit=100&offset=100&ts=1&apikey=869df33cbed7f29ac109149da9ccf83e&hash=d43a9e6097fe7b58c5be2871a3983e8c",
    ).then((response) => response.json());

    Promise.all([request1, request2]).then(([data1, data2]) => {
      SetMarvel(data1.data.results);
      SetMarvel2(data2.data.results);
    });
  }, []);

  return (
    <React.Fragment>
      <div class="wrapper">
        {marvel.map((data) => (
          <div key={data.id}>
            <div class="card">
              <img
                src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
                alt={data.name}
              />
              <p>{data.name}</p>
            </div>
          </div>
        ))}
        {marvel2.map((data) => (
          <div key={data.id}>
            <div class="card">
              <img
                src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
                alt={data.name}
              />
              <p>{data.name}</p>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};
export default Fetch;
