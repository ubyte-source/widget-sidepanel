(function (window) {

	'use strict';

	class Preloader {
		constructor(sidepanel) {
			this.sidepanel = sidepanel;
			this.elements = {};
		}

		getSidepanel() {
			return this.sidepanel;
		}
		getPreloader() {
			if (this.elements.hasOwnProperty('preloader')) return this.elements.preloader;
			this.elements.preloader = document.createElement('div');
			this.elements.preloader.className = 'preloader';
			return this.elements.preloader;
		}
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
		showSpinner() {
			let spinner = this.getSpinner();
			this.getPreloader().appendChild(spinner);
			return this;
		}
		hideSpinner() {
			let spinner = this.getSpinner();
			SidePanel.removeElementDOM(spinner);
			return this;
		}
		show() {
			let preloader = this.getPreloader();
			this.getSidepanel().getWrapper().appendChild(preloader);
			return this;
		}
		hide() {
			let preloader = this.getPreloader();
			SidePanel.removeElementDOM(preloader);
			return this;
		}
		status() {
			return this.getPreloader().parentNode !== null;
		}
	}

	class SidePanel {

		static handle() {
			return 'data-handle-event';
		}
		static option() {
			return 'sidepanel close pure-u-$0-24';
		}

		constructor() {
			this.actions = {
				// show: (function)
				// hide: (function)
			};
			this.elements = {};
			this.elements.preloader = new Preloader(this);
		}

		getPreloader() {
			return this.element.preloader;
		}
		setActionShow(func) {
			this.actions.show = func;
			return this;
		}
		getActionShow() {
			if (this.actions.hasOwnProperty('show')) return this.actions.show;
			return null;
		}
		setActionHide(func) {
			this.actions.hide = func;
			return this;
		}
		getActionHide() {
			if (this.actions.hasOwnProperty('hide')) return this.actions.hide;
			return null;
		}
		setSize(size) {
			this.getWrapper().className = this.constructor.option().replace(/\$0/si, size);
			return this;
		}
		getWrapper() {
			if (this.elements.hasOwnProperty('sidepanel')) return this.elements.sidepanel;
			this.elements.sidepanel = document.createElement('div');
			this.setSize(6);
			return this.elements.sidepanel;
		}
		setTitle(text) {
			let title = this.getTitle(), node = document.createTextNode(text);
			title.innerHTML = '';
			title.appendChild(node);
			return this;
		}
		getTitle() {
			if (this.elements.hasOwnProperty('h4')) return this.elements.h4;
			let header = this.getHeader();
			this.elements.h4 = document.createElement('h4');
			header.insertBefore(this.elements.h4, header.firstChild);
			return this.elements.h4;
		}
		setDescription(html) {
			let description = this.getDescription();
			description.innerHTML = '';
			description.appendChild(html);
			return this;
		}
		getDescription() {
			if (this.elements.hasOwnProperty('description')) return this.elements.description;
			this.elements.description = document.createElement('p');
			this.getHeader().appendChild(this.elements.description);
			return this.elements.description;
		}
		getHeader() {
			if (this.elements.hasOwnProperty('header')) return this.elements.header;
			let wrapper = this.getWrapper();
			this.elements.header = document.createElement('div');
			this.elements.header.className = 'header';
			this.getContent().classList.add('spaced');
			wrapper.insertBefore(this.elements.header, wrapper.firstChild);
			return this.elements.header;
		}
		getContent() {
			if (this.elements.hasOwnProperty('content')) return this.elements.content;
			let wrapper = this.getWrapper();
			this.elements.content = document.createElement('div');
			this.elements.content.className = 'content';
			wrapper.appendChild(this.elements.content);
			return this.elements.content;
		}
		pushContent(content) {
			this.getContent().appendChild(content);
			return this;
		}
		out() {
			return this.getWrapper();
		}
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
		toggle(event) {
			let status = this.status(), method = status ? 'hide' : 'show';
			this[method](event);
			return this;
		}
		show(event) {
			this.getWrapper().classList.remove('close');

			let show = this.getActionShow();
			if (show !== null && typeof show === 'function') show.call(this, event);
			return this;
		}
		hide(event) {
			this.getWrapper().classList.add('close');

			let hide = this.getActionHide();
			if (hide !== null && typeof hide === 'function') hide.call(this, event);
			return this;
		}
		status() {
			return false === this.getWrapper().classList.contains('close');
		}
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
		static removeElementDOM(element) {
			let parent = element === null || typeof element === 'undefined' || typeof element.parentNode === 'undefined' ? null : element.parentNode;
			if (parent === null) return false;
			parent.removeChild(element);
			return true;
		}
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