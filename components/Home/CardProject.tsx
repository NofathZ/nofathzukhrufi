import styles from "../../styles/card.project.module.scss";
import Image from "next/image";

export default function CardProject(props: any) {
  const { type, title, description } = props;
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
      <p className={`lead-four ${styles["description"]}`}>{description}</p>
    </div>
  );
}
