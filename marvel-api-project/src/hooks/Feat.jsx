import { useState, useEffect } from "react";
import * as React from "react";
import "../styles/card.css";
import { useNavigate } from "react-router-dom";
const Feat = () => {
  let navigate = useNavigate();
  const [spidey, setSpidey] = useState([]);
  const [hulk, SetHulk] = useState([]);
  const [wolverine, SetWolveirne] = useState([]);
  const [ironman, SetIronman] = useState([]);
  const [thor, SetThor] = useState([]);
  useEffect(() => {
    const request1 = fetch(
      "https://gateway.marvel.com/v1/public/characters?name=Spider-Man%20(Peter%20Parker)&ts=1&apikey=869df33cbed7f29ac109149da9ccf83e&hash=d43a9e6097fe7b58c5be2871a3983e8c"
    ).then((response) => response.json());
    const request2 = fetch(
      "https://gateway.marvel.com/v1/public/characters?name=Hulk&ts=1&apikey=869df33cbed7f29ac109149da9ccf83e&hash=d43a9e6097fe7b58c5be2871a3983e8c"
    ).then((response) => response.json());
    const request3 = fetch(
      "https://gateway.marvel.com/v1/public/characters?name=Wolverine&ts=1&apikey=869df33cbed7f29ac109149da9ccf83e&hash=d43a9e6097fe7b58c5be2871a3983e8c"
    ).then((response) => response.json());
    const request4 = fetch(
      "https://gateway.marvel.com/v1/public/characters?name=Iron%20Man&ts=1&apikey=869df33cbed7f29ac109149da9ccf83e&hash=d43a9e6097fe7b58c5be2871a3983e8c"
    ).then((response) => response.json());
    const request5 = fetch(
      "https://gateway.marvel.com/v1/public/characters?name=Thor&ts=1&apikey=869df33cbed7f29ac109149da9ccf83e&hash=d43a9e6097fe7b58c5be2871a3983e8c"
    ).then((response) => response.json());

    Promise.all([request1, request2, request3, request4, request5]).then(
      ([data1, data2, data3, data4, data5]) => {
        setSpidey(data1.data.results);
        SetHulk(data2.data.results);
        SetWolveirne(data3.data.results);
        SetIronman(data4.data.results);
        SetThor(data5.data.results);
      }
    );
  }, []);

  return (
    <React.Fragment>
      <div className="wrapper">
        {spidey.map((data) => (
          <div key={data.id}>
            <div
              className="card"
              onClick={() =>
                navigate(`/Marvel-API-project/Characters/${data.id}`)
              }
            >
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
            <div
              className="card"
              onClick={() =>
                navigate(`/Marvel-API-project/Characters/${data.id}`)
              }
            >
              <img
                src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
                alt={data.name}
              />
              <p>{data.name}</p>
            </div>
          </div>
        ))}
        {wolverine.map((data) => (
          <div key={data.id}>
            <div
              className="card"
              onClick={() =>
                navigate(`/Marvel-API-project/Characters/${data.id}`)
              }
            >
              <img
                src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
                alt={data.name}
              />
              <p>{data.name}</p>
            </div>
          </div>
        ))}
        {ironman.map((data) => (
          <div key={data.id}>
            <div
              className="card"
              onClick={() =>
                navigate(`/Marvel-API-project/Characters/${data.id}`)
              }
            >
              <img
                src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
                alt={data.name}
              />
              <p>{data.name}</p>
            </div>
          </div>
        ))}
        {thor.map((data) => (
          <div key={data.id}>
            <div
              className="card"
              onClick={() =>
                navigate(`/Marvel-API-project/Characters/${data.id}`)
              }
            >
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
