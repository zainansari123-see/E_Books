// import { Content } from "next/font/google";
import Content from "./compunents/Content";
import Navbar from "./compunents/Navbar";
import Navbar2 from "./compunents/Navbar2";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Navbar2 />
      <Content />
    </div>
  )
}