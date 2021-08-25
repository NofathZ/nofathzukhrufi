import Navbar from "../Navbar";
import Footer from "../Footer";

export default function index(props: any) {
  const { children } = props
  return (
    <>
      <Navbar />
      { children }
      <Footer />
    </>
  );
}
