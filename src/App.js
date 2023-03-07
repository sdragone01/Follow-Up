import React from "react";
import "./styles.css";
import { motion, AnimatePresence } from "framer-motion";
import * as Anime from "./animations";
import { Arrow } from "react-awesome-shapes";
import { useState } from "react";

export default function App() {
  const [isVisible, setIsVisible] = useState(true);
  const [isVisibleP2, setIsVisibleP2] = useState(false);
  const [isVisibleP3, setIsVisibleP3] = useState(false);

  const handleClick = () => {
    setIsVisible(false);
    setTimeout(page2delay, 2000);
  };
  const page2delay = () => {
    setIsVisibleP2(true);
    setTimeout(page2delayExit, 8000);
  };
  const page2delayExit = () => {
    setIsVisibleP2(false);
    setTimeout(page3delay, 6000);
  };
  const page3delay = () => {
    setIsVisibleP3(true);
  };

  return (
    <div className="App">
      <div className="container2">
        <AnimatePresence>
          {isVisible && (
            <motion.div
              key="name"
              className="container"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, rotate: 360, scale: 2 }}
              exit={{ opacity: 0 }}
              transition={{
                delay: 0,
                type: "spring",
                stiffness: 260,
                damping: 20
              }}
            >
              <h1 className="hey"> Hello! </h1>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="row2">
          <AnimatePresence>
            {isVisible && (
              <motion.div
                key="name"
                className="container"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, rotate: 360, scale: 2 }}
                exit={{ opacity: 0 }}
                transition={{
                  delay: 0.2,
                  type: "spring",
                  stiffness: 260,
                  damping: 20
                }}
              >
                <h1 className="hey"> I'm Sal </h1>
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {isVisible && (
              <motion.div
                variants={Anime.leftIn}
                initial="hidden"
                animate="visible"
                exit={{ x: "-100vh", opacity: 0 }}
                className="arrow"
                whileHover={{ scale: 1.03 }}
                onTap={handleClick}
              >
                <Arrow
                  onClick={handleClick}
                  color="#8b5cf6"
                  size="280px"
                  zIndex={2}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <AnimatePresence>
        {isVisibleP2 && (
          <div className="pageContainer">
            <div className="page2">
              <motion.div
                initial={{ y: "-100vh" }}
                animate={{
                  y: "0",
                  transition: {
                    delay: 1,
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                  }
                }}
                exit={{
                  transition: {
                    duration: 4
                  },

                  rotate: 180,
                  y: "150vh"
                }}
              >
                <h1 className="hey"> I </h1>
              </motion.div>
              <motion.div
                initial={{ y: "-100vh" }}
                animate={{
                  y: "0",
                  transition: {
                    delay: 1.5,
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                  }
                }}
                exit={{
                  transition: {
                    delay: 0.5,
                    duration: 4
                  },

                  rotate: -180,
                  y: "150vh"
                }}
              >
                <h1 className="hey"> Would </h1>
              </motion.div>
              <motion.div
                initial={{ y: "-100vh" }}
                animate={{
                  y: "0",
                  transition: {
                    delay: 2,
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                  }
                }}
                exit={{
                  transition: {
                    delay: 1,
                    duration: 4
                  },

                  rotate: 180,
                  y: "150vh"
                }}
              >
                <h1 className="hey">Like</h1>
              </motion.div>
              <motion.div
                initial={{ y: "-100vh" }}
                animate={{
                  y: "0",
                  transition: {
                    delay: 2.5,
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                  }
                }}
                exit={{
                  transition: {
                    delay: 1.5,
                    duration: 2
                  },

                  rotate: -180,
                  y: "150vh"
                }}
              >
                <h1 className="hey">To</h1>
              </motion.div>
            </div>
            <div className="page2">
              <motion.div
                initial={{ x: "-150vh" }}
                animate={{
                  x: "0",
                  transition: {
                    delay: 3,
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                  }
                }}
                exit={{
                  transition: {
                    delay: 1,
                    duration: 5
                  },

                  rotate: 180,
                  y: "150vh"
                }}
              >
                <h1 className="hey"> Follow </h1>
              </motion.div>
              <motion.div
                initial={{ x: "150vh" }}
                animate={{
                  x: "0",
                  transition: {
                    delay: 3.5,
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                  }
                }}
                exit={{
                  transition: {
                    delay: 0.5,
                    duration: 3
                  },

                  rotate: -180,
                  y: "150vh"
                }}
              >
                <h1 className="hey"> Up </h1>
              </motion.div>
            </div>
            <div className="page2">
              <motion.div
                initial={{ y: "150vh" }}
                animate={{
                  y: "0",
                  transition: {
                    delay: 4,
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                  }
                }}
                exit={{
                  transition: {
                    delay: 2,
                    duration: 3.5
                  },

                  rotate: -180,
                  y: "150vh"
                }}
              >
                <h1 className="hey"> On </h1>
              </motion.div>
              <motion.div
                initial={{ y: "150vh" }}
                animate={{
                  y: "0",
                  transition: {
                    delay: 4.5,
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                  }
                }}
                exit={{
                  transition: {
                    delay: 0.5,
                    duration: 4
                  },

                  rotate: 180,
                  y: "150vh"
                }}
              >
                <h1 className="hey"> My</h1>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isVisibleP3 && (
          <div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{
                scale: [1, 1.1, 1, 1.1, 1],
                rotate: [10, -10, 10, -10, 10],
                transition: {
                  times: [0, 0.5, 1, 1.5, 2],
                  repeat: Infinity,
                  delay: 0.2,
                  duration: 2,
                  type: "easeInOut",
                  stiffness: 260,
                  damping: 20
                }
              }}
            >
              <h1 className="application">Application</h1>
            </motion.div>
            <div className="running-man">
              <motion.div
                initial={{ x: "-200vh" }}
                animate={{
                  x: 0,
                  transition: {
                    duration: 10,
                    type: "easeInOut",
                    damping: 150,
                    stiffness: 500
                  }
                }}
              >
                <img
                  src="https://31.media.tumblr.com/8716861e2a0baa5ae77ce139f98c1614/tumblr_mwgb1bIZAe1qhcd6po1_r4_500.gif"
                  alt="new"
                />
              </motion.div>
              <motion.div
                initial={{ x: "200vh" }}
                animate={{
                  x: 0,
                  transition: {
                    duration: 10,
                    type: "easeInOut",
                    damping: 150,
                    stiffness: 500
                  }
                }}
              >
                <img
                  className="img"
                  src="https://31.media.tumblr.com/8716861e2a0baa5ae77ce139f98c1614/tumblr_mwgb1bIZAe1qhcd6po1_r4_500.gif"
                  alt="new"
                />
              </motion.div>
            </div>
            <motion.div
              className="links"
              initial={{ y: "200vh" }}
              animate={{
                y: 0,
                transition: {
                  duration: 5,
                  delay: 10,
                  type: "easeInOut",
                  damping: 150,
                  stiffness: 500
                }
              }}
            >
              <a href="https://codesandbox.io/s/optimistic-payne-k4rl0g?file=/src/App.js">
                <h1>Link to Sandbox</h1>
              </a>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
