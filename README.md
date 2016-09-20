# React Event System Lab

## Overview

In this lab you'll respond to events in React and write event handlers. 

## Keypad
![Keypad](https://media.giphy.com/media/3o6MbdTboTFWOUsLkc/giphy.gif)

Mr. Burns has requested us to build a new keypad component for the nuclear plant, since the last one was way too complicated for his employees to use. We'll keep things super simple instead, and use an `<input type="password" />` field to capture input. Here's how to complete the exercise:

1. In the `components/Keypad.js` file, create a `Keypad` React component.
2. In that component, render an `input` with the right type.
3. On that `input`, add an event handler that listens for the `keyUp` event.
4. When that event fires, use `console.log` to print out the text `'Entering password...'`.

## Eyes on the ball
![Key & Peele](https://media.giphy.com/media/l0K4i4Cm18z1X1t16/giphy.gif)

Let's say you're in the club with your buddy. The music's blaring, lights are flashing... It's so hard to get his attention! Your job is to create a component that registers whenever he focuses on you, _and_ when his eyes are drifting off.

1. In the `components/EyesOnMe.js` file, create a `EyesOnMe` React component.
2. In that component, render a `button`.
3. On that `button`, add event handlers that listens for the `focus` and `blur` events.
4. When the `focus` event fires, use `console.log` to print out the text `'Good!'`.
5. When the `blur` event fires, use `console.log` to print out the text `'Hey! Eyes on me!'`.

## Resources
- [React Events](https://facebook.github.io/react/docs/events.html)
