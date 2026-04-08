import Link from "next/link";
import styles from "../styles/navbar.module.scss";

export default function NavbarComp() {
  return (
    <nav
      className="fixed-top px-4 py-3 d-flex justify-content-between align-items-center"
      style={{
        backdropFilter: "blur(10px)",
        backgroundColor: "rgba(245, 245, 247, 0.8)",
      }}
    >
      <Link
        href="/"
        style={{
          textDecoration: "none",
          color: "#1d1d1f",
          fontWeight: 800,
          fontSize: "20px",
          letterSpacing: "-0.03em",
        }}
      >
        N
      </Link>
    </nav>
  );
}
