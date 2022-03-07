# Documentation widget-Sidepanel

Widget Javascript Sidepanel is a library used to create a sidepanel on the right side of your web page in which you can insert different elements.

## Structure

library:
- [window.Sidepanel](https://github.com/energia-source/widget-sidepanel/tree/main/lib#windowsidepanel-usable-methods)
- [window.Sidepanel.Preloader](https://github.com/energia-source/widget-sidepanel/tree/main/lib#windowsidepanelpreloader-usable-methods)

<br>

#### ***Class window.Sidepanel usable methods***

##### `static handle()`

It returns a string.

 * **Returns:** The handle() method returns a string.

##### `static option()`

The function returns a string that represents the CSS class for the side panel

 * **Returns:** The string 'sidepanel close pure-u-22-24 pure-u-lg-0-24'

##### `constructor()`

The constructor function creates a new object and assigns it to the variable `this`. The object contains two properties: `actions` and `elements`. The `actions` property contains a set of functions that can be called by the user. The `elements` property contains a set of HTML elements that can be accessed by the user.

The `actions` property contains two functions: `show` and `hide`. The `show` function is called when the user clicks the "Show" button. The `hide` function is called when the user clicks the "Hide" button.

The `elements` property contains a single HTML element: `preloader`. The `preloader` property is an instance of the Preloader class.

The Preloader class is defined in the next section.

##### `getPreloader()`

Get the preloader object

 * **Returns:** The preloader element.

##### `setActionShow(func)`

It sets the function to the show action.

 * **Parameters:** `func` — The function to be called when the action is triggered.
 * **Returns:** The object itself.

##### `getActionShow()`

Get the action for the show action

 * **Returns:** The action that is being returned is the show action.

##### `setActionHide(func)`

It sets the function that will be called when the hide action is triggered.

 * **Parameters:** `func` — The function to be called when the action is triggered.
 * **Returns:** The object itself.

##### `getActionHide()`

Get the action for the hide button

 * **Returns:** The return value is a function that takes a single argument, which is the current state.

##### `setSize(size)`

Set the size of the widget

 * **Parameters:** `size` — The size of the button.
 * **Returns:** Nothing 

##### `getWrapper()`

Create a div element and set it's size to 6

 * **Returns:** The sidepanel element.

##### `setTitle(text)`

Set the title of the sidepanel

 * **Parameters:** `text` — The text to be displayed in the title bar.
 * **Returns:** The object istelf.

##### `getTitle()`

*Get the title element of the sidepanel.*

 * **Returns:** The title of the sidepanel.

##### `setDescription(text)`

* Set the description of the current element

 * **Parameters:** `text` — The text to be displayed in the description.
 * **Returns:** Nothing 

##### `getDescription()`

* Create a new paragraph element and append it to the header element

 * **Returns:** The description element.

##### `getHeader()`

* Get the header element if it exists, otherwise create it

 * **Returns:** The header element.

##### `getContent()`

* Get the content element if it exists, otherwise create it

 * **Returns:** The content element.

##### `pushContent(content)`

*This function pushes content to the end of the content div.*

 * **Parameters:** `content` — The content to be added to the dialog.
 * **Returns:** The current object.

##### `out()`

Returns the JavaScript representation of the object

 * **Returns:** The getWrapper() method returns the wrapper element.

##### `handleEvent(event)`

* For each attribute in the closest element that matches the handle attribute, split the attribute into a type and a function name. * If the type matches the event type or if the type is empty, execute the function

 * **Parameters:** `event` — The event object that was passed to the event handler.
 * **Returns:** Nothing 

##### `toggle(event)`

*Toggle* the visibility of an element

 * **Parameters:** `event` — The event that triggered the toggle.
 * **Returns:** Nothing 

##### `show(event)`

*Show the action menu.*

The function is called when the user clicks on the action menu icon. It adds the `close` class to the action menu icon and removes it from the action menu. It also calls the `show` function of the action menu

 * **Parameters:** `event` — The event that triggered the action.
 * **Returns:** Nothing 

##### `hide(event)`

Hide the element

 * **Parameters:** `event` — The event object that was triggered.
 * **Returns:** Nothing 

##### `status()`

Returns a boolean value indicating whether the status of the modal is open or closed

 * **Returns:** The return value is a boolean value.

##### `static closestAttribute(target, attribute, html)`

Find the closest attribute to the target element

 * **Parameters:**
   * `target` — The element to search for the attribute.
   * `attribute` — The attribute to search for.
   * `html` — If true, the result will be the HTML of the closest attribute.
 * **Returns:** The closest attribute.

##### `static removeElementDOM(element)`

Remove the element from the DOM

 * **Parameters:** `element` — The element to remove from the DOM.
 * **Returns:** The return value is a boolean value.

##### `static getIcon(name)`

Create an HTML element with the class `material-icons` and the innerText of the `name` parameter

 * **Parameters:** `name` — The name of the icon.
 * **Returns:** The icon that was created.

<br>

#### ***Class window.Sidepanel.Preloader usable methods***

##### `constructor(sidepanel)`

The constructor function creates an object that has a sidepanel property

 * **Parameters:** `sidepanel` — The sidepanel object that is calling the constructor.

##### `getSidepanel()`

Get the sidepanel object

 * **Returns:** The sidepanel object.

##### `getPreloader()`

* Create a div element with the class `preloader` if it doesn't already exist

 * **Returns:** The preloader element.

##### `getSpinner()`

Create a spinner element if it doesn't exist, and return it

 * **Returns:** The spinner element.

##### `showSpinner()`

Creates a spinner and appends it to the preloader

 * **Returns:** Nothing 

##### `hideSpinner()`

Hide the spinner.

The above function is used to hide the spinner

 * **Returns:** Nothing 

##### `show()`

Show the preloader.

 * **Returns:** Nothing 

##### `hide()`

Hide the preloader by removing it from the DOM.

 * **Returns:** Nothing 

##### `status()`

Returns a boolean value indicating whether the preloader is currently visible

 * **Returns:** The status of the preloader.

## Built With

* [Javascript](https://www.javascript.com/) - Javascript