
import React from 'react';

let CheckBox = React.createClass({

	render: function() {
		return (
			<div id="checkBox">
			<input type="checkbox" />
      <span>{this.props.options.title}</span>
      </div>
		)
	}
})
module.exports = CheckBox;

