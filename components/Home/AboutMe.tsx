import styles from "../../styles/aboutme.module.scss";
import Image from "next/image";

export default function AboutMe() {
  return (
    <div className="container" id="aboutme">
      <div className={styles["card-container"]}>
        <div className={`${styles["title"]}`}>
          <h1
            className="heading-two"
            style={{ color: "white", textAlign: "center" }}
          >
            About Me
          </h1>
        </div>
        <div className="row">
          <div className="col-md d-flex align-items-center flex-wrap">
            <div className={styles["img-box"]}></div>
            <label className={`mx-3 ${styles["person-name"]}`}>
              <span className="heading-three" style={{ color: "white" }}>
                Nofath Zukhrufi Haideal
              </span>
              <br />
              <span className="lead-four" style={{ color: "white" }}>
                Web Developer
              </span>
            </label>
          </div>
          <div className="col-md d-flex align-items-center">
            <p style={{ textAlign: "justify", color: "white" }}>
              Hello, my name is Nofath Zukhrufi Haidel, call me Nofath for
              short. I was born at 02 November 2001. I'm Indonesian. Currently
              taking a colleague on one of the most popular university in my
              country, Brawijaya University. I took Informatics Engineering
              field and I really interested on Web Development, Front End and
              Back End.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
