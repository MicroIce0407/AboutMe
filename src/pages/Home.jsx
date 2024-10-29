import Nav from "../components/Home/Nav";
import MainArea from "../components/Home/MainArea";
import Resume from "../components/Home/Resume";
import Autobiography from "../components/Home/Autobiography";
import SideProject from "../components/Home/SideProject";
import ContactMe from "../components/Home/ContactMe";
import { useState, useEffect } from "react";
import ScrollReveal from "scrollreveal";

const Homepage = () => {
  const [content, setContent] = useState("MainArea");
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const sr = ScrollReveal();
    sr.reveal(".reveal", {
      delay: 250,
      duration: 1300,
      reset: false,
      distance: "50px",
      origin: "bottom",
    });
    return () => {
      sr.destroy();
    };
  }, [content]);

  const handleContentChange = (newContent) => {
    if (newContent !== content) {
      setIsTransitioning(true);
      setTimeout(() => {
        setContent(newContent);
        setIsTransitioning(false);
      }, 300);
    }
  };

  return (
    <main id="homepage">
      <Nav setContent={handleContentChange} />
      <div className={`content ${isTransitioning ? "fade-out" : "fade-in"}`}>
        {content === "MainArea" && <MainArea />}
        {content === "Resume" && <Resume />}
        {content === "Autobiography" && <Autobiography />}
        {content === "SideProject" && <SideProject />}
        {content === "ContactMe" && <ContactMe />}
      </div>
    </main>
  );
};

export default Homepage;
