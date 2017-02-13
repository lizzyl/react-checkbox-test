require('./list.css')
require('./checkbox.css')
import React from 'react'
import ReactDOM from 'react-dom'

import CheckBox from './checkbox.jsx';


let Lists = React.createClass({

	render: function() {
		return (
			<div id="list">
				{this.props.options.map((item, index) => {
					return(
						<CheckBox index={index} item={item} onChange={this.props.onChange.bind(this, this.props.index)}/>
					)
				})}
			</div>
		)
	}
})

module.exports = Lists;
