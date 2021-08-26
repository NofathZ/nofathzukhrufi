import Image from "next/image";
import styles from "../../styles/header.module.scss";

export default function Header() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md d-flex justify-content-center align-items-start flex-column">
          <h1 className="heading-one" style={{marginBottom:"25px"}}>Web Programmer</h1>
          <p className="lead-five" style={{marginBottom:"45px"}}>
            Hi, I am Nofath, focusing on creating Website on Front End and Back End
          </p>
          <button className={`${styles['read-more-btn']}`}>Read More</button>
        </div>
        <div className="col-md">
          <div className={styles["image-box"]}>
            <Image
              src="/Home/home-header-illustrator.png"
              width="600"
              height="600"
              layout="responsive"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
