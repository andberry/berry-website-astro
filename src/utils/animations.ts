const pageAnimationDef = {
  old: {
    name: "hide",
    duration: "0.1s",
    easing: "linear",
  },
  new: {
    name: "revealFromBottom",
    duration: "0.6s",
    delay: "0.25s",
    // easing: "cubic-bezier(0.25, 1, 0.5, 1)", // easeOutQuart
    // easing: "cubic-bezier(0.22, 1, 0.36, 1)", // easeOutQuint
    easing: "cubic-bezier(0.16, 1, 0.3, 1)", // easeOutExpo
  },
};

export const pageAnimations = {
  forwards: pageAnimationDef,
  backwards: pageAnimationDef,
};
