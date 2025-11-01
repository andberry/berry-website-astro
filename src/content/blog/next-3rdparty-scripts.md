---
title: "Properly handle third party external scripts in Next.js"
abstract: ""
date: 2025-10-24
published: true
tags: ["react", "nextjs"]
heroImage: "@images/trentino1.jpg"
---

## Scenario
You've been asked to add that simple third party script to a website build with Next.js.

You'd love to slap an external script in your page/component and see it working in your Next.js/React project in less than 5 minutes, right?

## Problem
Unfortunately embeedding third party scripts in Next.js is not always strighforward as you might think: sometimes the script works perfectly on the first page load but it does not after clicking a link in page (after using client side navigation).

## What's happening?
External scripts often assume they're loaded in the page after full page load, as it would happen in a plain static html website, they might need to access themself in the dom once loaded and the might need to update the DOM (eg. adding a div or an iframe).
Next.js websites are not plain html websites: there's a lot of JavaScript executed by server and client that might interfere with the execution of scripts.

## Solutions
First of all, do not use plain `<script>` tag, but use Next.js `<Script>` [Next.js Script](https://nextjs.org/docs/app/api-reference/components/script) component.

Try different values of `strategy` prop, you'll find that `lazyOnload` will often fixes your issues.

If using Next.js `<Script>` component is not enough, the best solution I've found so far
is a combination of `useEffect` and `useRef`: this will dynamically load the script every time your component is mouted.

```tsx
const containerRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  // Only load when the container is mounted
  if (!containerRef.current) {
    return;
  }

  // Create and inject the script
  const script = document.createElement('script');
  script.src = 'https://your.external.script/url-here';
  script.defer = true;
  // use the following if script needs data attributes and/or id
  /*
  script.dataset.param1 = 'param1';
  script.dataset.param2 = 'param2';
  script.id = 'your-script-id';
  */
  
  // Append script to the container
  containerRef.current.appendChild(script);

  return () => {
    // Cleanup: remove the script when component unmounts
    if (script.parentNode) {
      script.parentNode.removeChild(script);
    }
  };
}, []);

```