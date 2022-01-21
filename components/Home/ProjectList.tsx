import { useState } from "react";
import styles from "../../styles/project.list.module.scss";
import CardProject from "./CardProject";

export default function ProjectList() {
  const [filter, setFilter] = useState("");
  const [datas, setDatas] = useState([
    {
      type: "Web Programming (FE)",
      title: "COM-Indo Website",
      link: "https://github.com/NofathZ/com-website",
    },
    {
      type: "Web Programming (FE)",
      title: "TechnoScape 2021",
      link: "https://github.com/NofathZ/pkljalurlomba_frontend",
    },
    {
      type: "Web Programming (FE)",
      title: "Chatie (Frontend)",
      link: "https://github.com/NofathZ/chatie-frontend",
    },
    {
      type: "Web Programming (BE)",
      title: "Chatie (Backend)",
      link: "https://github.com/NofathZ/chatie-backend",
    },
    {
      type: "Web Programming (FE)",
      title: "Trasholution",
      link: "https://github.com/NofathZ/trasholution-frontend",
    }
  ]);
  return (
    <>
      <div className="mb-3" id="projects">
        <div className={styles["container-bar"]}>
          <div className={`container ${styles["container"]}`}>
            <button className={`${styles["item"]}`} onClick={() => setFilter("")}>
              <span
                className={`heading-four ${styles["hover-type"]}`}
                style={{ color: "white" }}
              >
                All Projects
              </span>
            </button>
            <button className={`${styles["item"]}`} onClick={() => setFilter("Web Programming (FE)")}>
              <span
                className={`heading-four ${styles["hover-type"]}`}
                style={{ color: "white" }}
              >
                Web Programming (FE)
              </span>
            </button>
            <button className={`${styles["item"]}`} onClick={() => setFilter("Web Programming (BE)")}>
              <span
                className={`heading-four ${styles["hover-type"]}`}
                style={{ color: "white" }}
              >
                Web Programming (BE)
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {datas.map((data, idx) => {
            return filter == "" ? (
              <div
                key={idx}
                className="col-md-4 d-flex justify-content-center align-items-center mb-5"
              >
                <CardProject
                  id={idx}
                  type={data.type}
                  title={data.title}
                  link={data.link}
                />
              </div>
            ) : filter == data.type ? (
              <div
                key={idx}
                className="col-md-4 d-flex justify-content-center align-items-center mb-5"
              >
                <CardProject
                  id={idx}
                  type={data.type}
                  title={data.title}
                  link={data.link}
                />
              </div>
            ) : (
              ""
            );
          })}
        </div>
      </div>
    </>
  );
}
