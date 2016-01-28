whack-a-mole-angularjs
======================

Whack-a-mole game TDD exercise for timeouts and random numbers. Version in AngularJS.

If you don't know what is whack-a-mole, [check this video out]( https://youtu.be/25lP02806rw?t=12s ).

rules
-----

You are provided with 3x3 grid of nosy moles. But&hellip; the game logic is missing!
 Your goal is to implement it according to a couple of rules. But remember, write failing test before production code.
 Otherwise it wouldn't be Test-Driven Development ;-)

Rules:

1. Game takes&hellip; forever ;-) No start button, no game end.
2. Every mole appears and disappears on its own. There is no correlation with other moles.
3. Mole is hidden for at least 2 seconds and at most 20 seconds.
4. Mole is visible for at least 4 second and at most 6 seconds.
5. You have to click on visible mole to make it hidden immediately and to gain 1 point.
6. The more points you have the better mole-whacker you are!

Good luck! :-)

setup
-----

Prerequisites:

* `npm` installed globally

Some of most useful commands are:

* `npm install` - install all dependencies
* `npm test` - run unit tests
* `npm start` - serve app in a browser and watch for changes


