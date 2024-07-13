import { useState, useEffect } from "react";
import * as React from "react";
const Feat = () => {
    const [spidey, setSpidey] = useState([]);
    const [hulk, SetHulk] = useState([]);
    useEffect(() => {
        const request1 = fetch(
          "https://gateway.marvel.com/v1/public/characters?name=Spider-Man%20(Peter%20Parker)&ts=1&apikey=869df33cbed7f29ac109149da9ccf83e&hash=d43a9e6097fe7b58c5be2871a3983e8c"
        ).then((response) => response.json());
        const request2 = fetch(
          "https://gateway.marvel.com/v1/public/characters?name=Hulk&ts=1&apikey=869df33cbed7f29ac109149da9ccf83e&hash=d43a9e6097fe7b58c5be2871a3983e8c"
        ).then((response) => response.json());
    
        Promise.all([request1, request2]).then(([data1, data2]) => {
          setSpidey(data1.data.results);
          SetHulk(data2.data.results);
        });
      }, []);

      return (
        <React.Fragment>
          <div className="wrapper">
            {spidey.map((data) => (
              <div key={data.id}>
                <div className="card">
                  <img
                    src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
                    alt={data.name}
                  />
                  <p>{data.name}</p>
                </div>
              </div>
            ))}
            {hulk.map((data) => (
              <div key={data.id}>
                <div className="card">
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
export default Feat;