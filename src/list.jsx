var React = require('react');
var ListItem = require('./list-item');

module.exports  = React.createClass({
  render: function() {
    return (
      <div>
        {this.renderList()}
      </div>
    );
  },
  renderList: function() {
    if (!Object.keys(this.props.items).length) {
      return
        <h4>
          Add a todo to get started.
        </h4>
    }
    else {
      var children = [];

      for(var key in this.props.items) {
        var item = this.props.items[key];
        if(item && item.text){          
          item.key = key;
          children.push(
            <ListItem
              item={item}
              key={key}
              >
            </ListItem>
          );
        }
      }

      return children;
    }
  }
});