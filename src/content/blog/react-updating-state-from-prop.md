---
title: "React: updating state from prop"
abstract: "Easy and fast solution to update component state from data flowing down from parent"
date: 2025-07-11
published: false
tags: ["react", "typescript", "javascript"]
heroImage: "@images/halifax-public-gardens.jpg"
---

## Scenario
You have a grid of cards with a `<Filters>` component on top managing filters to be sent to the API to fetch cards data.

Inside `<Filters>` you have a single `<Filter>` (please note no "s" here) managing the rendering and user interaction of a set of checkboxes.

We want the user to click on one or more checkboxes, then click on a "Apply" button and this should update the cards on the main component.

Can you spot it? Yep, that "Apply" button means you need a local state on the `<Filter>` component keeping track of user choices and calling the update funtion of the parent component clicking on Apply.

Also, local checkboxes state must reflect the state of the "upper/global" `<Filters>` component.
