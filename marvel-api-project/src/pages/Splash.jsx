import * as React from "react";
import styles from "../styles/Character.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Splash = () => {
  const { id } = useParams();
  const [marvel, setMarvel] = useState([]);
  const [comic, setComic] = useState([]);
  useEffect(() => {
    const request1 = fetch(
      `https://gateway.marvel.com/v1/public/characters/${id}?&ts=1&apikey=869df33cbed7f29ac109149da9ccf83e&hash=d43a9e6097fe7b58c5be2871a3983e8c`
    ).then((response) => {
      //If the ID exists in the URL, then the page will load with information of the character's ID.
      //Otherwise, it will return an error to the user
      if (response.ok) {
        return response.json();
      }
      throw new Error("Something went wrong!");
    });
    const request2 = fetch(
      `https://gateway.marvel.com/v1/public/characters/${id}/comics?format=comic&formatType=comic&noVariants=false&limit=10&ts=1&apikey=869df33cbed7f29ac109149da9ccf83e&hash=d43a9e6097fe7b58c5be2871a3983e8c`
    ).then((response) => response.json());

    Promise.all([request1, request2]).then(([data1, data2]) => {
      setMarvel(data1.data.results);
      setComic(data2.data.results);
      console.log(data2.data.results);
    });
  }, []);

  return (
    <React.Fragment>
      <Header />
      <div className={styles["flexbox"]}>
        {marvel.map((data) => (
          <div key={data.id} className={styles["container-one"]}>
            <h1>{data.name}</h1>
            <img
              src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
              alt={data.name}
              className={styles["bio-img"]}
            />
            <p>{data.description}</p>
          </div>
        ))}
        <div className={styles["comic-container"]}>
          {comic.map((data2) => (
            <div key={data2.id} className={styles["comic-div"]}>
              <h1>{data2.title}</h1>
              <img
                src={`${data2.thumbnail.path}.${data2.thumbnail.extension}`}
                alt={data2.name}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Splash;
