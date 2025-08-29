import Content from "./compunents/Content";
import Navbar from "./compunents/Navbar";
import Navbar2 from "./compunents/Navbar2";
import Content2 from "./compunents/Content2";
import Bannar from "./compunents/Bannar";
import Footer from "./compunents/Footer";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <Navbar2 />
      <Content />
      <Content2 />
      <Bannar />
      <Footer/>
    </div>
  )
}