import Image from "next/image";
import styles from "../../styles/header.module.scss";

export default function Header() {
  return (
    <div className="container">
      <div className="row">
        <div className="col d-flex justify-content-center align-items-start flex-column">
          <h1>Virtual healthcare for you</h1>
          <p>
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
          </p>
          <button>Consult today</button>
        </div>
        <div className="col">
          <div className={styles["image-box"]}>
            <Image
              src="/Home/home-header-illustrator.svg"
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
