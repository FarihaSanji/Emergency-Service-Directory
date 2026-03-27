1. Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll

These methods are used to select elements from the DOM.
getElementById: This method selects a single element using its id. Since id is unique, it always returns one element. It is simple and fast.


getElementsByClassName:This method selects all elements with the same class name. It returns an HTMLCollection, which updates automatically if the DOM changes.

querySelector: This method returns the first element that matches a CSS selector. It is flexible because we can use id, class, or tag selectors.

querySelectorAll:This method returns all elements that match a CSS selector. It returns a NodeList, which can be looped easily.


2. How to create and insert a new element into the DOM

To add a new element,we have to follow these steps:

1. Create the element
2. Add content
3. Insert it into the DOM

Example:

const div = document.createElement("div");
div.textContent = "Hello, this is new!";
document.body.appendChild(div);

3. What is Event Bubbling and how does it work?

Event bubbling means when an event happens on an element, it moves upward to its parent elements.

For example, if we click a button inside a div:
first the button event runs, then the div event runs.So the flow is child to parent.

4. What is Event Delegation in JavaScript? Why is it useful?

Event delegation means adding one event listener to a parent element instead of adding multiple listeners to child elements.It works because of event bubbling.

It is useful because:
it improves performance
it reduces code complexity
it works for dynamically added elements

5. Difference between preventDefault() and stopPropagation()

preventDefault(): This method stops the default behavior of the browser.
Example: stopping a link from opening or a form from submitting.

stopPropagation():This method stops the event from moving up the DOM.
So parent elements will not receive the event.

In short:
preventDefault stops default browser action
stopPropagation stops event flow
