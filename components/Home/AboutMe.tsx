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
            {"About Me"}
          </h1>
        </div>
        <div className="row">
          <div className="col-md d-flex align-items-center flex-wrap">
            <div className={styles["img-box"]}></div>
            <label className={`mx-3 ${styles["person-name"]}`}>
              <span className="heading-three" style={{ color: "white" }}>
                {"Nofath Zukhrufi Haideal"}
              </span>
              <br />
              <span className="lead-four" style={{ color: "white" }}>
                {"Web Developer"}
              </span>
            </label>
          </div>
          <div className="col-md d-flex align-items-center">
            <p style={{ textAlign: "justify", color: "white" }}>
              {`A passionate fresh graduate who has an interest in improving knowledge in Frontend Web Development and Fullstack
Web Development. I already have more than 1 year professional experiences as a intern and freelancer as Frontend
Web Developer. Skilled in Frontend Web Development using ReactJS and VueJS, skilled in Backend Web
Development using NestJS. Aiming to learn new knowledge and experience to improve quality as Frontend Web
Developer or Fullstack Web Developer`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
