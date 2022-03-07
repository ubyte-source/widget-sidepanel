# Documentation widget-Sidepanel

Widget Javascript Sidepanel is a library used to create a sidepanel on the right side of your web page in which you can insert different elements.

## Usage

So the basic setup looks something like this:

```

let sidepanel = new SidePanel();

sidepanel.setTitle(<A text you want to be display as title>);
sidepanel.pushContent(<An element that will be display>);
sidepanel.setActionShow(function () {
      // <An action that will be done when the sidepanel is opening>
});
sidepanel.setActionHide(function () {
      // <An action that will be done when the sidepanel is closing>
});
document.appendChild(sidepanel.out());

```

These are the 3 possible method that trigger the open/close action:

```

sidepanel.show();

sidepanel.hide();

element.onClick(function(event){
      sidepanel.toggle(event);
});

```

## Structure

library:
- [window.Sidepanel](https://github.com/energia-source/widget-sidepanel/tree/main/lib)
- [window.Sidepanel.Preloader](https://github.com/energia-source/widget-sidepanel/tree/main/lib)

<br>

## Contributing

Please read [CONTRIBUTING.md](https://github.com/energia-source/widget-xkr/blob/main/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting us pull requests.

## Versioning

We use [SemVer](https://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/energia-source/widget-xkr/tags). 

## Authors

* **Paolo Fabris** - *Initial work* - [energia-europa.com](https://www.energia-europa.com/)
* **Gabriele Luigi Masero** - *Developer* - [energia-europa.com](https://www.energia-europa.com/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details