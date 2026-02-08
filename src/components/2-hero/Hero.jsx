import Lottie from "lottie-react";
import "./hero.css";
import devAnimation from "../../animation/dev.json";
import { useRef } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const lottieRef = useRef(null);

  return (
    <section className="hero flex">
      <div className="left-section  ">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            src="./IMG_0006-modified.png"
            className="avatar"
            alt=""
          />
          <div className="icon-verified"></div>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="title"
        >
          Software Engineer, <br />
          Frontend Developer, <br />
          UI/UX Designer
        </motion.h1>

        <p className="subtitle">
          I am a software engineer with a passion for creating beautiful and
          functional user interfaces. I have experience in frontend development
          and UI/UX design, and I am always looking for new challenges to grow
          my skills.
        </p>

        <div className="icons flex">
          <a href="https://twitter.com/"><div className="icon icon-twitter"></div></a>
          <a href="https://www.instagram.com/mark_bassem1"><div className="icon icon-instagram"></div></a>
          <a href="https://github.com/Mark-bassem"><div className="icon icon-github"></div></a>
          <a href="https://www.linkedin.com/in/mark-george-720580241/"><div className="icon icon-linkedin-square"></div></a>
        </div>
      </div>

      <div className="right-section animation ">
        <Lottie
          lottieRef={lottieRef}
          className=""
          onLoadedImages={() => {
            // @ts-ignore
            // https://lottiereact.com/
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={devAnimation}
        />
      </div>
    </section>
  );
};

export default Hero;
