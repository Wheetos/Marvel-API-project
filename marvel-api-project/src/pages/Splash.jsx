import * as React from "react";
import styles from "../styles/Splash.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "./Home";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Splash() {
  const { id } = useParams();
  const [marvel, setMarvel] = useState([]);
  useEffect(() => {
    fetch(
      `https://gateway.marvel.com/v1/public/characters/${id}?&ts=1&apikey=869df33cbed7f29ac109149da9ccf83e&hash=d43a9e6097fe7b58c5be2871a3983e8c`
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Something went wrong!");
      })
      .then((data) => {
        setMarvel(data.data.results);
      })
      .catch((error) => {
        console.log(error);
        const element = document.getElementById("error");
        if (element) {
        }
      });
  }, []);

  return (
    <React.Fragment>
      <Header />
      <div className="flexbox">
        {/*This div activates whenever an error occurs. */}
        <div id="error"></div>
        {marvel.map((data) => (
          <div key={data.id}>
            <div>
              <h1>{data.name}</h1>
              <img
                src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
                alt={data.name}
              />
            </div>
          </div>
        ))}
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default Splash;
