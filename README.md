### Things to note

* Explicit CSS height is specified for wrapper element
* _getEntryStatusHTML_ and _getNationalityHTML_ options are provided to demonstrate how to fix possible problems with horizontal alignment within match element
* The data is tweaked a little to display "BYE" (`{ "title": "<div style='margin-left: 60px'>BYE</div>" }`)
* Special options are applied to display a "mobile" layout on smaller screens. (This happens only once on initialization so it won't switch when you resize the window).


In this example Bracketry is imported using module import from a remote URL. Therefore you don't need to npm install anything.

To run it locally you'll need to run an http server in the root of the project (because ES modules are used here).
