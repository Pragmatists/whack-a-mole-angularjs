whack-a-mole-angularjs
======================

Whack-a-mole game TDD exercise for timeouts and random numbers. Version in AngularJS.

If you don't know what is whack-a-mole, [check this video out]( https://youtu.be/25lP02806rw?t=12s ).

Rules
-----

You are provided with 3x3 grid of nosy moles. But&hellip; the game logic is missing!
 Your goal is to implement it according to a couple of rules. But remember, write failing test before production code
 &mdash; otherwise it wouldn't be Test-Driven.

Rules:

1. To make it simple, let's start game on page load. Moreover there is no game end. In other words: no start button,
   no game time countdown, it's not needed in this exercise.
   
1. Every mole appears and disappears on its own. There is no correlation with other moles.

1. Mole is hidden for at least 2 seconds and at most 10 seconds.

1. Mole is visible for at least 4 second and at most 6 seconds.

1. You have to click on visible mole to make it hidden immediately and to gain 1 point.

1. Score is visible all the time and updated after each mole-whack.

The more points you have the better mole-whacker you are! Good luck! :-)

Setup
-----

Prerequisites:

* `npm` installed globally

Some of most useful commands are:

* `npm install` - install all dependencies
* `npm test` - run unit tests
* `npm start` - serve app in a browser and watch for changes

Additional tasks
----------------

1. If you have provided callback to mole directive, then use `scoreService` to update score on mole-whack instead of
   this callback.

1. Extract score from `app.html`/`app.controller.js` to separate directive.

1. Add `Start`/`Stop` button. Moles can be visible only during the game (after `Start` click and before `Stop` click).
   No timeout should be active before or after the game. Click on `Start` makes score set back to `0`. 
