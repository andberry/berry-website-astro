import { gsap } from "gsap"

export const desktopMenuAnimation = () => {
  const desktopNavLinks = document.querySelectorAll('#desktop-main-nav .link');

  const mainTl = gsap.timeline({delay: 0.5})
  mainTl.fromTo(desktopNavLinks, {autoAlpha: 0, y: 3}, {autoAlpha: 1, y: 0, ease: 'power3.out', duration: 0.25, stagger: 0.12})
}

export const setupMobileMenuAnimation = () => {
  const mobileMenuOpenTrigger = document.querySelector('#mobile-menu-open-button');
  const mobileMenuPanel = document.querySelector('#mobile-menu-panel')
  const mobileMenuBgOverlay = document.querySelector('#mobile-menu-bg-overlay')
  const mobileMenuCloseTrigger = document.querySelector('#mobile-menu-close-button');
  const mobileNavLinks = document.querySelectorAll('#mobile-main-nav .js-link');
  const mobileSocials = document.querySelector('#mobile-socials')
  const mobileThemeSwitch = document.querySelector('#mobile-theme-switch')

  const tl = gsap.timeline({paused: true, delay: 1, defaults: {duration: 0.3}})
  tl.to(mobileMenuOpenTrigger, {y: -10, opacity: 0, ease: 'power3.inOut'})
  tl.to(mobileMenuBgOverlay, {autoAlpha: 1}, '>-0.2')
  tl.to(mobileMenuPanel, {x: 0}, '>-0.2')
  tl.to(mobileNavLinks, {autoAlpha: 1, y: 0, ease: 'power3.out', stagger: 0.06}, ">-0.1")
  tl.to(mobileSocials, {opacity: 1, y: 0}, '>-0.2')
  tl.to(mobileThemeSwitch, {opacity: 1, y: 0}, '>-0.2')
  tl.fromTo(mobileMenuCloseTrigger, {autoAlpha: 0, scale: 0.95}, {autoAlpha: 1, scale: 1}, '>-0.2')
  

  mobileMenuOpenTrigger?.addEventListener('click', () => {
    tl.restart()
  })
  mobileMenuCloseTrigger?.addEventListener('click', () => {
    tl.reverse()
  })
}

export const logoAnimation = () => {
  const logo = document.querySelector('#page-header .js-logoLink')

  const logoTl = gsap.timeline({repeat: -1, delay: 2});
  logoTl.fromTo(logo,{y: '100%', opacity: 0}, {opacity: 1, y: 0, duration: 0.4, ease: 'expo.out'});
  logoTl.to(logo,{opacity: 0, y: '100%', duration: 0.4, ease: 'expo.out'}, '>+12')

  logoTl.play()
}