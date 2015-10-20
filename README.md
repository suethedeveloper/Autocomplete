### Object
Create a UI component similar to jQuery Autocomplete

### Direction

	Write an auto-complete component using HTML5/CSS3 without a javascript framework 
  (jQuery, Underscore, etc.).

	Given the array of possible values such as ['apple', 'orange', 'banana'], typing 
  'ap' into the auto-complete component should show 'apple' as a possible value. 
  Typing 'an' should show 'orange' and 'banana' as options.

### Note
  1. Basic code with hard-coded array.
    When keyup event occurs, display autocomplete from pre-entered list by calling showAutocomplete function
  2. Create user's own list
    - Create list array when a user enter an item and click save. This will trigger createList function 
    - When a user clicks a done button, hide create list div and display search input field. 
    - When keyup event occurs, display autocomplete from an array that a user just created by calling showAutocomplete function