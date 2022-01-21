import styles from "../../styles/card.project.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function CardProject(props: any) {
  const { type, title, link } = props;
  return (
    <div className={styles["card-box"]}>
      <div className={`d-flex align-items-center ${styles["icon-wrapper"]}`}>
        <div className={styles["icon-box"]}>
          <Image
            src="/Home/web-development.png"
            width="300px"
            height="300px"
            layout="responsive"
          />
        </div>
        <label className="mx-3 heading-four">{type}</label>
      </div>
      <h1 className={`heading-three ${styles["title"]}`}>{title}</h1>
      <a href={`${link}`} target="_blank" rel="noreferrer" style={{textDecoration:"none"}}>
        <div className="d-flex align-items-center" style={{cursor: "pointer"}}>
          <label className="heading-four" style={{color: "#458FF6", cursor: "pointer"}}>Go To Project</label>
          <svg className="mx-2" 
            width="29"
            height="19"
            viewBox="0 0 29 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.73745 11.2372L22.7834 11.2372L18.1596 15.861C17.5219 16.4987 17.5219 17.4553 18.1596 18.0931C18.7974 18.7308 19.754 18.7308 20.3918 18.0931L27.726 10.7589C28.3637 10.1212 28.3637 9.16452 27.726 8.52677L20.3918 1.19258C19.754 0.554828 18.7974 0.554828 18.1596 1.19258C17.5219 1.83034 17.5219 2.78697 18.1596 3.42473L22.7834 8.04845L1.73745 8.04845C0.940251 8.04845 0.143058 8.6862 0.143058 9.64284C0.143058 10.5995 0.940251 11.2372 1.73745 11.2372Z"
              fill="#458FF6"
            />
          </svg>
        </div>
      </a>
    </div>
  );
}
