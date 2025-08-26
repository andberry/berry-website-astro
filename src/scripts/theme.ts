/**
 * Website dark/light theme support
 * Theme is implemented using
 * - class on <html>: dark for dark theme, nothing for light theme
 * - localstorage: set user preference
 * - ThemeSwitch.jsx: toggle dark class on <html>, set user preference in localstorage
 *
 * We default to dark theme:
 * by default dark class is on <html>, if user has light preference we remove it
 */
const setTheme = () => {
  typeof localStorage !== "undefined" &&
  localStorage.getItem("theme") === "light"
    ? document.documentElement.classList.remove("dark")
    : localStorage.setItem("theme", "dark");
};


export const handleTheme = () => {
  /**
 * When NOT using View Transition: is:inline is required on <script> tag
 * to run this code immediately, and not wait for HTML to be processed
 *
 * When Using View Transition: don't use is:inline and hook into lifecycle events
 * Using astro:after-swap event is strongly recommended
 * to prevent theme flashing during page load
 */
  document.addEventListener("astro:after-swap", () => {
    setTheme();
  });

  // we also want to check theme once during first page load
  setTheme();
}