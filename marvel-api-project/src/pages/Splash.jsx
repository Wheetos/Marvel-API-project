import * as React from "react";
import styles from "../styles/Error.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../assets/spidey-throws.png";

const Splash = () => {
  const { id } = useParams();
  const [marvel, setMarvel] = useState([]);
  const [comic, setComic] = useState([]);
  useEffect(() => {
    const request1 = fetch(
      `https://gateway.marvel.com/v1/public/characters/${id}?&ts=1&apikey=869df33cbed7f29ac109149da9ccf83e&hash=d43a9e6097fe7b58c5be2871a3983e8c`
    )
      .then((response) => {
        //If the ID exists in the URL, then the page will load with information of the character's ID.
        //Otherwise, it will return an error to the user
        if (response.ok) {
          return response.json();
        }
        throw new Error("Something went wrong!");
      })
      .catch((error) => {
        console.log(error);
        const element = document.getElementById("error");
        if (element) {
          element.style.display = "flex";
        }
      });
    const request2 = fetch(
      `https://gateway.marvel.com/v1/public/characters/${id}/comics?format=comic&formatType=comic&noVariants=false&dateDescriptor=thisMonth&limit=3&ts=1&apikey=869df33cbed7f29ac109149da9ccf83e&hash=d43a9e6097fe7b58c5be2871a3983e8c`
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
      <div className="flexbox">
        {/*This div activates whenever an error occurs. */}
        <div className={styles["error-container-two"]} id="error">
          <img src={logo} className={styles["error-img"]} />
          <div className={styles["error-txt"]}>
            <h4>Sorry, this page does not exist</h4>
            <p>Spidey attempted to find something, but he wasn't able to.</p>
            <p>
              You can check to see if you typed in the address correctly, or go
              back to the previous page.
            </p>
          </div>
        </div>
        {marvel.map((data) => (
          <div key={data.id}>
            <div>
              <h1>{data.name}</h1>
              <img
                src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
                alt={data.name}
              />
              <p>{data.description}</p>
            </div>
          </div>
        ))}
        {comic.map((data) => (
          <div key={data.id}>
            <div>
              <h1>{data.title}</h1>
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
};

export default Splash;
