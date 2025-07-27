---
title: "Accessibility ABC for developers"
abstract: "An accessibility checklist every developer should keep in mind"
date: 2025-07-18
published: false
tags: ["frontend", "a11y"]
heroImage: "@images/trentino1.jpg"
---

## Intro
I've recently being asked to fix a lot of accessibility issues on a website: this is what I've learned, and what every developer should keep in mind when coding frontend from the very beginning

## My Accessibility Checklist

1.  Don't forget to add style for focus state
```css
a,
button {
  &:focus-visible {
      outline: 2px dashed var(--color-primary);
    }
}
```

1.  Don't use `div` for elements that require interaction, usually a `button` is what you need.

1.  focus() method does not work with hidden elements

1.  tabindex and logical sequence
Write the code with the elements in a logical sequence, and use tabindex only with values 0 or -1.
As mentioned in [this page on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/tabindex), we are recommended to only use 0 and -1 as tabindex values. Avoid using tabindex values greater than 0 and CSS properties that can change the order of focusable HTML elements (Ordering flex items). Doing so makes it difficult for people who rely on using keyboard for navigation or assistive technology to navigate and operate page content.
Frontend code should be written
