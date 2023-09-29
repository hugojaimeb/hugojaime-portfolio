import {
  FaReact,
  FaNode,
  FaJs,
  FaHtml5,
  FaCss3,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiFirebase,
  SiAngular,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function LogosRender() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div data-aos="fade-down" className="logos-wrapper">
      <div className="logos-container">
        <FaReact size={70} color="aqua" />
        React
      </div>
      <div className="logos-container">
        <FaNode size={70} color="green" /> Node.js
      </div>
      <div className="logos-container">
        <FaJs size={70} color="yellow" /> JavaScript
      </div>
      <div className="logos-container">
        <FaHtml5 size={70} color="rgb(239,96,40)" /> HTML5
      </div>
      <div className="logos-container">
        <FaCss3 size={70} color="blue" /> CCS3
      </div>
      <div className="logos-container">
        <FaBootstrap size={70} color="rgb(122,17,243)" /> Bootstrap
      </div>
      <div className="logos-container">
        <SiTypescript size={70} color="rgb(0, 122, 204)" /> TypeScript
      </div>
      <div className="logos-container">
        <SiTailwindcss size={70} color="rgb(56,189,248)" /> Tailwind
      </div>
      <div className="logos-container">
        <SiFirebase size={70} color="rgb(255,203,44)" /> FireBase
      </div>
      <div className="logos-container">
        <SiAngular size={70} color="rgb(229,54,64)" /> Angular
      </div>
      <div className="logos-container">
        <SiMongodb size={70} color="rgb(23,173,85)" /> MongoDB
      </div>
      <div className="logos-container">
        <SiPostgresql size={70} color="#2f6792" /> PostgresSQL
      </div>
    </div>
  );
}

export default LogosRender;
