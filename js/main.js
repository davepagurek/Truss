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
  document.getElementById("musicApp").appendChild(l.element);
});