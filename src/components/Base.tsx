import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Base = ({ addBase, pizza }) => {
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];
  const containerVariant = {
    hidden: {
      opacity: 0,
      x: "100vw",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        delay: 0.5,
      },
    },
  };
  const nextContainer = {
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: 0,
      transition: {
        duration: 0.1,
        type: "spring",
        stiffness: 120,
      },
    },
  };
  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      className="base container"
    >
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          let spanClass =
            pizza.base === base ? "active" : "";
          return (
            <motion.li
              whileHover={{
                originX: 0,
                scale: 1.5,
                color: "yellow",
              }}
              transition={{
                type: "spring",
                stiffness: 500,
              }}
              key={base}
              onClick={() => addBase(base)}
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          );
        })}
      </ul>

      {pizza.base && (
        <motion.div
          variants={nextContainer}
          className="next"
        >
          <Link to="/toppings">
            <motion.button
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 8px rgb(255,255,255)",
                boxShadow: "0px 0px 8px rgb(255,255,255)",
              }}
            >
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Base;
