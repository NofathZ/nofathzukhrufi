import { Link, animateScroll as scroll } from "react-scroll";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import styles from "../styles/navbar.module.scss";
import Image from "next/image";

export default function NavbarComp() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="none" variant="light">
        <Container>
          <Navbar.Brand
            className={`${styles["brand"]} d-flex align-items-center`}
            href="#home"
          >
            <div className={styles["img-box"]}>
              <Image
                src="/brand-navbar-logo.svg"
                width="200"
                height="200"
                layout="responsive"
              />
            </div>
            <label className="mx-2">Nofath</label>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Link
                className={styles["navbar-item"]}
                to="aboutme"
                smooth={true}
                offset={-70}
                duration={0}
              >
                About Me
              </Link>
              <Link
                className={styles["navbar-item"]}
                to="projects"
                smooth={true}
                offset={-70}
                duration={0}
              >
                Projects
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
