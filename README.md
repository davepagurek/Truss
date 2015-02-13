<h1>Truss</h1>
A lightweight Javascript templating engine

<h2>Basic Setup</h2>

<h3>Components</h3>
```javascript
var components = components || {};

Truss.init(function(components) {
  components.SampleComponent = Truss.createComponent({
    "class": "SampleComponent",
    "template": "<h1></h1>" +
      "<p>Hello, <span class='name'></span></p>",
    "properties": {
      "title": "h1",
      "name": ".name"
    },
    "functions": {
      "hide": function() {
        this.element.style.display = "none";
      },
      "show": function() {
        this.element.style.display = "block";
      }
    },
    "events": {
      "init": function() {
        
      },
      "h1:click": {
        alert("Hello world!");
        this.hide();
      }
    }
  });
}, components);
```

The `class` variable will be the CSS class applied to the component div.

`template` is a string of contentless HTML that will be placed in the component div.

`properties` binds variable names to CSS selectors so that when creating a new instance of a component, the template is populated with the specified data.`$` represents the component div itself. A CSS selector followed by `:attribute` will set that attribute.

`functions` defines extra functions that can be called from components if need be. For example, common functions include "hide" and "show" subroutines to show or hide a component

`events` are functions that are automatically called. Event names are in the format `component:eventname`. Built-in event names in Javascript work as expected.

<h3>Main</h3>
Load `main.js` after loading the components.

```javascript
var components = components || {};

Truss.init(function(components) {

  //Library
  components.myComponent = components.SampleComponent.new({
    "title": "This is Truss!",
    "name": "world"
  });
  document.body.appendChild(components.myComponent.element);
  
}, components);
```

`new(settings)` accepts a settings object with the values of the properties for that component. You can set values of properties not defined in the component template and reference or call them later if need be.

<h3>Additional functions</h3>
`component.setproperty(property, value)` can be used to set or update a property after already creating an instance of a component.

If a component has an array for a property value, `component.addProperty(property, value)` adds the value to the array. If the property is another component, it will be added to the page accordingly.


