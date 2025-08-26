import Content from "./compunents/Content";
import Navbar from "./compunents/Navbar";
import Navbar2 from "./compunents/Navbar2";
import Content2 from "./compunents/Content2";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Navbar2 />
      <Content />
      <Content2 />
    </div>
  )
}