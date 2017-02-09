require('./list.css')
import React from 'react'


let Lists = React.createClass({

	render: function() {
		return (
			<ul id="List">
				{
					this.props.listItems.map((item) => {
						return <li >
								<input type="checkbox" />
								<span>{item.title}</span>
						</li>
					})
				}
			</ul>
		)
	}
})

module.exports = Lists;
