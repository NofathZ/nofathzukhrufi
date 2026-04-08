export default function Footer() {
  return (
    <footer className="py-5 text-center">
      <p className="text-muted" style={{ fontSize: "14px" }}>
        © {new Date().getFullYear()} Nofath. All rights reserved.
      </p>
    </footer>
  );
}
