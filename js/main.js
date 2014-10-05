Truss.init(function() {
  var ListItem = Truss.createComponent({
    "class": "ListItem",
    "template": "<li><input type='text' placeholder='words' /></li>",
    "properties": {
      "words": "input"
    },
    "events": {
      "input:input": function() {
        this.triggerEvent("inputChange");
      }
    }
  });
  
  var ListView = Truss.createComponent({
    "class": "ListView",
    "template": "<ul></ul>",
    "properties": {
      "items": "ul"
    },
    "events": {
      "$items:inputChange": function() {
        console.log(this.property("items"));
      }
    }
  });

  var l = ListView.new({
    "items": [
      ListItem.new({
        "words": "test"
      }),
      ListItem.new(),
      ListItem.new()
    ]
  });
  document.body.appendChild(l.element);
});