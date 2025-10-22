---
title: "Tailwind CSS: Speed, Consistency, and Zero CSS Headaches"
abstract: "why Tailwind CSS is like git for me: never without it"
date: 2023-07-18
published: true
tags: ["frontend", "css"]
heroImage: "@images/garda1.jpg"
---
## A bit of history
I started coding websites many years ago using html and plain CSS only.

CSS preprocessors came to life and defining variables, reusing piece of styles with mixins felt magic, but one of the main issues and power of css remained: **the global scope nature of the language**.

You had to pay attention to avoid unwanted issues, like introducing a visual bug in page, while updating or fixing a part of UI in another page: basically you gave yourself a bunch of rules trying to avoid messing up things.

Then CSS naming convensions and approaches raised: **BEM**, **ITCSS**, **Atomic CSS**, and **CSS namespaces** to name the most common ones. They helped reducing the chances of introducing unwanted regressions, and they helped a lot with another major problem of CSS: **naming things**.

We started naming classes in a more structured way, defining relationships between classes, assigning role and context to classes, but you still had to spend time inventing class names.

A few examples that look totally fine the day you write them, and meaningless only one week after: `.c-section__wrapper .c-section__wrapper__inner .c-section__container__inner .c-section__items .c-section__items__inner`

And do we want to talk about **speed and confidence** when a new dev joins a project? Jumping into a project with a medium to big sass usage requires time (a lot) for a new dev to get confident with the way the project is styled. Most of the time there's no documentation and you, as a new dev, usually need to spend time looking at all sass variables and mixins definitions and their usage across the project.

For me **Tailwind CSS** is THE solution for these main css issues I've been constantly fight against:
- **global scope nature**
- **naming things**
- **dev speed and confidence**
- **documentation**.

And the huge diffusion of component-based development simply emphasize the benefits of this framework.

The only cons I can see? Honestly your markup will be a bit cluttered with a bunch of classes and might look ugly. That's it. But pros win hands down.

## A few Bites of Tailwind CSS
Tailwind CSS is a utility first CSS Framework.

It provides you a bunch of classes that you apply directly to your markup where each class implements a property/value combinations of CSS.

A few examples:
- `p-*` classes for padding,
- `m-*` classes for margin.
- `flex` for `display: flex`,
- `flex-col` for `flex-direction: col`,

Basically **almost every combination of css propertly/values is covered with a class**, and where there's no a documented class, you have the freedom to add a custom one.

**Responsive design with media queries**: no more custom mixins or long media query to write. Simply prepend your class with a predefined customizable breakpoint name.
- `p-4 md:p-16 lg:p-24`: apply different values of padding at different breakpoints
- `md:flex md:flex-col lg:flex-row`: make this `flex` with `flex-direction: row` starting from md breakpoint (768px) and make it `flex-direction: row` starting from lg breakpoint (1024px up)

This is working perfectly with the component based apprach typical of modern front-end frameworks: you have a component implementing a piece of ui and you attach utility classes directly to the component: no need to invent a class name to be attached to a div, no need to open a separate file to add style using that class name.

Does this look similar to inline style? Nope: classes in Tailwind CSS are generated based on a config file that allows you to customize them, creating de-facto a base for a design system.

Worried about **performance**? By default you have a huge number of classes you can use, but Tailwind scans your project searching for utility classes, and then it generates only the necessary CSS based on the classes you are actually using. This makes sure that **you're sending to the browser the smalles css possible, containing only the needed style**.


## Pros
- Style is tightly coupled with a piece of UI: you directly add classes to a component markup
- No need to invent class names
- No need to switch between multiple source files
- Don't reinvent the wheel defining everytime sass vars, mixins, functions and pre/post processors
- Reusability? done right! I mean, it's atomic: `flex` is a single class you're reusing across components. How many time did you write `display: flex` in your css/scss using custom class names?
- Team cohesion: the way your project is styles is one, well defined and shared across all devs
- Gives structure to the project and to the team
- Awesome documentation

## Cons
Markup is cluttered with a long list of classes

## Useful tips
Sometimes I've found useful to add a custom, non-tailwind, class with no style attached just to help me identify the piece of UI in browser (eg. 'c-hero', 'c-cards-grid')