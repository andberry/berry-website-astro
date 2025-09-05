export const setupActivePageLinksUpdate = () => {
  /**
   * Active Page link
   * Since we're using View transition,
   * we need custom js code to run after every page swap
   * to correctly update active link
   */
  document.addEventListener("astro:after-swap", () => {
    const currentUrl = window.location.href;
    const mainNavLinks = document.querySelectorAll(
      "#desktop-main-nav .link, #mobile-main-nav .js-link",
    );
    for (const link of Array.from(mainNavLinks) as HTMLAnchorElement[]) {
      link.classList.remove("dark:text-greenyellow", "text-purple");
      if (link.href === currentUrl) {
        link.classList.add("dark:text-greenyellow", "text-purple");
      }
    }
  });
}