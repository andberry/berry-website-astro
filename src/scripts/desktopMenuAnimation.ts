import { gsap } from "gsap"

export const desktopMenuAnimation = () => {
  const desktopNavLinks = document.querySelectorAll('#desktop-main-nav .link');

  const mainTl = gsap.timeline({paused: true, delay: 0.5})
  mainTl.fromTo(desktopNavLinks, {autoAlpha: 0, y: 3}, {autoAlpha: 1, y: 0, ease: 'power3.out', duration: 0.25, stagger: 0.12})

  mainTl.play()
}

export const logoAnimation = () => {
  const logo = document.querySelector('#page-header .js-logoLink')

  const logoTl = gsap.timeline({repeat: -1, delay: 2});
  logoTl.fromTo(logo,{y: '100%', opacity: 0}, {opacity: 1, y: 0, duration: 0.4, ease: 'expo.out'});
  logoTl.to(logo,{opacity: 0, y: '100%', duration: 0.4, ease: 'expo.out'}, '>+12')

  logoTl.play()
}