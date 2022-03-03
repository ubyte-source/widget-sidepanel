(function (window) {

	'use strict';

	class Preloader {

		/**
		 * The constructor function creates an object that has a sidepanel property
		 * @param sidepanel - The sidepanel object that is calling the constructor.
		 */

		constructor(sidepanel) {
			this.sidepanel = sidepanel;
			this.elements = {};
		}

		/**
		 * Get the sidepanel object
		 * @returns The sidepanel object.
		 */

		getSidepanel() {
			return this.sidepanel;
		}

		/**
		 * * Create a div element with the class `preloader` if it doesn't already exist
		 * @returns The preloader element.
		 */

		getPreloader() {
			if (this.elements.hasOwnProperty('preloader')) return this.elements.preloader;
			this.elements.preloader = document.createElement('div');
			this.elements.preloader.className = 'preloader';
			return this.elements.preloader;
		}

		/**
		 * Create a spinner element if it doesn't exist, and return it
		 * @returns The spinner element.
		 */

		getSpinner() {
			if (this.elements.hasOwnProperty('spinner')) return this.elements.spinner;
			this.elements.spinner = document.createElement('div');
			this.elements.spinner.className = 'spinner';

			for (let item = 0; item < 3; item++) {
				let bounce = document.createElement('div');
				bounce.className = 'bounce-' + item;
				this.elements.spinner.appendChild(bounce);
			}

			return this.elements.spinner;
		}

		/**
		 * Creates a spinner and appends it to the preloader
		 * @returns Nothing.
		 */

		showSpinner() {
			let spinner = this.getSpinner();
			this.getPreloader().appendChild(spinner);
			return this;
		}

		/**
		 * Hide the spinner.
		 * 
		 * The above function is used to hide the spinner
		 * @returns Nothing.
		 */

		hideSpinner() {
			let spinner = this.getSpinner();
			window.SidePanel.removeElementDOM(spinner);
			return this;
		}

		/**
		 * Show the preloader.
		 * @returns Nothing.
		 */

		show() {
			let preloader = this.getPreloader();
			this.getSidepanel().getWrapper().appendChild(preloader);
			return this;
		}

		/**
		 * Hide the preloader by removing it from the DOM.
		 * @returns Nothing.
		 */

		hide() {
			let preloader = this.getPreloader();
			window.SidePanel.removeElementDOM(preloader);
			return this;
		}

		/**
		 * Returns a boolean value indicating whether the preloader is currently visible
		 * @returns The status of the preloader.
		 */

		status() {
			return this.getPreloader().parentNode !== null;
		}
	}

	class SidePanel {

		/**
		 * It returns a string.
		 * @returns The handle() method returns a string.
		 */

		static handle() {
			return 'data-handle-event';
		}

		/**
		 * The function returns a string that represents the CSS class for the side panel
		 * @returns The string 'sidepanel close pure-u-22-24 pure-u-lg-0-24'
		 */

		static option() {
			return 'sidepanel close pure-u-22-24 pure-u-lg-$0-24';
		}

		/**
		 * The constructor function creates a new object and assigns it to the variable `this`. 
		 * The object contains two properties: `actions` and `elements`. 
		 * The `actions` property contains a set of functions that can be called by the user. 
		 * The `elements` property contains a set of HTML elements that can be accessed by the user. 
		 * 
		 * The `actions` property contains two functions: `show` and `hide`. 
		 * The `show` function is called when the user clicks the "Show" button. 
		 * The `hide` function is called when the user clicks the "Hide" button. 
		 * 
		 * The `elements` property contains a single HTML element: `preloader`. 
		 * The `preloader` property is an instance of the Preloader class. 
		 * 
		 * The Preloader class is defined in the next section.
		 */
		constructor() {
			this.actions = {
				// show: (function)
				// hide: (function)
			};
			this.elements = {};
			this.elements.preloader = new window.SidePanel.Preloader(this);
		}

		/**
		 * Get the preloader object
		 * @returns The preloader element.
		 */

		getPreloader() {
			return this.element.preloader;
		}

		/**
		 * It sets the function to the show action.
		 * @param func - The function to be called when the action is triggered.
		 * @returns The object itself.
		 */

		setActionShow(func) {
			this.actions.show = func;
			return this;
		}

		/**
		 * Get the action for the show action
		 * @returns The action that is being returned is the show action.
		 */

		getActionShow() {
			if (this.actions.hasOwnProperty('show')) return this.actions.show;
			return null;
		}

		/**
		 * It sets the function that will be called when the hide action is triggered.
		 * @param func - The function to be called when the action is triggered.
		 * @returns The object itself.
		 */

		setActionHide(func) {
			this.actions.hide = func;
			return this;
		}

		/**
		 * Get the action for the hide button
		 * @returns The return value is a function that takes a single argument, which is the current state.
		 */

		getActionHide() {
			if (this.actions.hasOwnProperty('hide')) return this.actions.hide;
			return null;
		}

		/**
		 * Set the size of the widget
		 * @param size - The size of the button.
		 * @returns Nothing.
		 */

		setSize(size) {
			this.getWrapper().className = this.constructor.option().replace(/\$0/si, size);
			return this;
		}

		/**
		 * Create a div element and set it's size to 6
		 * @returns The sidepanel element.
		 */

		getWrapper() {
			if (this.elements.hasOwnProperty('sidepanel')) return this.elements.sidepanel;
			this.elements.sidepanel = document.createElement('div');
			this.setSize(6);
			return this.elements.sidepanel;
		}

		/**
		 * Set the title of the sidepanel
		 * @param text - The text to be displayed in the title bar.
		 * @returns The object istelf.
		 */

		setTitle(text) {
			let title = this.getTitle(),
				node = document.createTextNode(text);

			title.innerHTML = '';
			title.appendChild(node);

			return this;
		}

		/**
		 * *Get the title element of the sidepanel.*
		 * @returns The title of the sidepanel.
		 */

		getTitle() {
			if (this.elements.hasOwnProperty('h4')) return this.elements.h4;
			let header = this.getHeader();
			this.elements.h4 = document.createElement('h4');
			header.insertBefore(this.elements.h4, header.firstChild);
			return this.elements.h4;
		}

		/**
		 * * Set the description of the current element
		 * @param text - The text to be displayed in the description.
		 * @returns Nothing.
		 */

		setDescription(text) {
			let description = this.getDescription(),
				node = document.createTextNode(text);

			description.innerHTML = '';
			description.appendChild(node);

			return this;
		}

		/**
		 * * Create a new paragraph element and append it to the header element
		 * @returns The description element.
		 */

		getDescription() {
			if (this.elements.hasOwnProperty('description')) return this.elements.description;
			this.elements.description = document.createElement('p');
			this.getHeader().appendChild(this.elements.description);
			return this.elements.description;
		}

		/**
		 * * Get the header element if it exists, otherwise create it
		 * @returns The header element.
		 */

		getHeader() {
			if (this.elements.hasOwnProperty('header')) return this.elements.header;
			let wrapper = this.getWrapper();
			this.elements.header = document.createElement('div');
			this.elements.header.className = 'header';
			this.getContent().classList.add('spaced');
			wrapper.insertBefore(this.elements.header, wrapper.firstChild);
			return this.elements.header;
		}

		/**
		 * * Get the content element if it exists, otherwise create it
		 * @returns The content element.
		 */

		getContent() {
			if (this.elements.hasOwnProperty('content')) return this.elements.content;
			let wrapper = this.getWrapper();
			this.elements.content = document.createElement('div');
			this.elements.content.className = 'content';
			wrapper.appendChild(this.elements.content);
			return this.elements.content;
		}

		/**
		 * *This function pushes content to the end of the content div.*
		 * @param content - The content to be added to the dialog.
		 * @returns The current object.
		 */

		pushContent(content) {
			this.getContent().appendChild(content);
			return this;
		}

		/**
		 * Returns the JavaScript representation of the object
		 * @returns The getWrapper() method returns the wrapper element.
		 */

		out() {
			return this.getWrapper();
		}

		/**
		 * * For each attribute in the closest element that matches the handle attribute, split the attribute
		 * into a type and a function name.
		 * * If the type matches the event type or if the type is empty, execute the function
		 * @param event - The event object that was passed to the event handler.
		 * @returns Nothing.
		 */

		handleEvent(event) {
			let attribute = this.constructor.closestAttribute(event.target, this.constructor.hanlde());
			if (attribute === null) return;

			let attribute_split = attribute.split(/\s+/);
			for (let item = 0; item < attribute_split.length; item++) {
				let execute = attribute_split[item].split(String.fromCharCode(58));
				if (execute.length !== 2) break;
				if (execute[0] === event.type || 0 === execute[0].length) {
					if (typeof this[execute[1]] !== 'function') continue;

					this[execute[1]].call(this, event);
				}
			}
		}

		/**
		 * *Toggle* the visibility of an element
		 * @param event - The event that triggered the toggle.
		 * @returns Nothing.
		 */

		toggle(event) {
			let status = this.status(),
				method = status ? 'hide' : 'show';

			this[method](event);
			return this;
		}

		/**
		 * *Show the action menu.*
		 * 
		 * The function is called when the user clicks on the action menu icon. It adds the `close` class to
		 * the action menu icon and removes it from the action menu. It also calls the `show` function of the
		 * action menu
		 * @param event - The event that triggered the action.
		 * @returns Nothing.
		 */

		show(event) {
			this.getWrapper().classList.remove('close');

			let show = this.getActionShow();
			if (show !== null && typeof show === 'function') show.call(this, event);
			return this;
		}

		/**
		 * Hide the element
		 * @param event - The event object that was triggered.
		 * @returns Nothing.
		 */

		hide(event) {
			this.getWrapper().classList.add('close');

			let hide = this.getActionHide();
			if (hide !== null && typeof hide === 'function') hide.call(this, event);
			return this;
		}

		/**
		 * Returns a boolean value indicating whether the status of the modal is open or closed
		 * @returns The return value is a boolean value.
		 */

		status() {
			return false === this.getWrapper().classList.contains('close');
		}

		/**
		 * Find the closest attribute to the target element
		 * @param target - The element to search for the attribute.
		 * @param attribute - The attribute to search for.
		 * @param html - If true, the result will be the HTML of the closest attribute.
		 * @returns The closest attribute.
		 */

		static closestAttribute(target, attribute, html) {
			if (typeof attribute === 'undefined'
				|| !attribute.length) return null;

			let result = null, element = target;

			do {
				let tagname = element.tagName.toLowerCase();
				if (tagname === 'body') return null;

				result = element.getAttribute(attribute);
				if (result !== null) {
					result = result.toString();
					if (result.length) break;
				}

				element = element.parentNode;
			} while (element !== null
				|| typeof element === 'undefined');

			if (typeof html === 'undefined'
				|| html !== true) return result;

			return element;
		}

		/**
		 * Remove the element from the DOM
		 * @param element - The element to remove from the DOM.
		 * @returns The return value is a boolean value.
		 */

		static removeElementDOM(element) {
			let parent = element === null || typeof element === 'undefined' || typeof element.parentNode === 'undefined' ? null : element.parentNode;
			if (parent === null) return false;
			parent.removeChild(element);
			return true;
		}

		/**
		 * Create an HTML element with the class `material-icons` and the innerText of the `name` parameter
		 * @param name - The name of the icon.
		 * @returns The icon that was created.
		 */
		
		static getIcon(name) {
			let i = document.createElement('i');
			i.className = 'material-icons';
			i.innerText = name;
			return i;
		}
	}

	window.SidePanel = SidePanel;
	window.SidePanel.Preloader = Preloader;

})(window);