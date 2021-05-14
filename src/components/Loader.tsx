import { motion } from "framer-motion";

const Loader = () => {
  const loarderVariant = {
    animationOne: {
      x: [-20, 20],
      y: [0, -30],
      transition: {
        x: {
          duration: 0.5,
          yoyo: Infinity,
        },
        y: {
          duration: 0.25,
          yoyo: Infinity,
          ease: "easeOut",
        },
      },
    },
  };
  return (
    <motion.div
      variants={loarderVariant}
      animate="animationOne"
      className="loader"
    ></motion.div>
  );
};
export default Loader;
