import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Loader from "./Loader";
const Home = () => {
  const buttonVariant = {
    hover: {
      scale: 1.1,
      textShadow: "0px 0px 8px rgb(255,255,255)",
      boxShadow: "0px 0px 8px rgb(255,255,255)",
      transition: {
        yoyo: Infinity,
        duration: 0.2,
      },
    },
  };
  const conatinerVariant = {
    hover: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 1,
        duration: 1.5,
      },
    },
    exit: {
      x: "-100vw",
      transition: {
        ease: "easeInOut",
      },
    },
  };
  return (
    <motion.div
      variants={conatinerVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="home container"
    >
      <h2>Welcome to Pizza Joint</h2>
      <Link to="/base">
        <motion.button
          variants={buttonVariant}
          whileHover="hover"
        >
          Create Your Pizza
        </motion.button>
      </Link>
      <Loader />
    </motion.div>
  );
};

export default Home;
