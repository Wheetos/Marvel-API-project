import * as React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import logo from "../assets/spidey-throws.png";
import styles from "../styles/Error.module.css";

function NotFound() {
  return (
    <React.Fragment>
      <Header />
      <nav className={styles.flexbox}>
        <div className={styles["error-container"]}>
          <img src={logo} className={styles["error-img"]}></img>
          <div className={styles["error-txt"]}>
            <h4>Sorry, this page isn't available.</h4>
            <p>Spidey attempted to find something, but he wasn't able to.</p>
            <p>
              You can check to see if you typed in the address correctly, or go
              back to the previous page.
            </p>
          </div>
        </div>
      </nav>
      <Footer />
    </React.Fragment>
  );
}

export default NotFound;
