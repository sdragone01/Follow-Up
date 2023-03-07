export const rightIn = {
  hidden: {
    x: "800vh",
    opacity: 0
  },
  visible: {
    x: "0",
    opacity: 1,
    transition: {
      delay: 2,
      duration: 2,
      type: "spring",
      damping: 150,
      stiffness: 500
    }
  },
  exit: {
    x: "100vh",
    opacity: 0
  }
};

export const leftIn = {
  hidden: {
    x: "-200vh",
    opacity: 0
  },
  visible: {
    x: "0",
    opacity: 1,
    transition: {
      delay: 0,
      duration: 0.1,
      type: "spring",
      damping: 150,
      stiffness: 500
    }
  },
  exit: {
    x: "-100vh",
    opacity: 0,
    transition: {
      delay: 0,
      duration: 0.1,
      type: "spring",
      damping: 150,
      stiffness: 500
    }
  }
};

export const raiseIn = {
  hidden: {
    y: "800vh",
    opacity: 0
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      delay: 2,
      duration: 2,
      type: "spring",
      damping: 150,
      stiffness: 500
    }
  },
  exit: {
    y: "100vh",
    opacity: 0
  }
};

export const dropIn = {
  hidden: {
    y: "-800vh",
    opacity: 0
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      delay: 2,
      duration: 2,
      type: "spring",
      damping: 150,
      stiffness: 500
    }
  },
  exit: {
    y: "-100vh",
    opacity: 0
  }
};
