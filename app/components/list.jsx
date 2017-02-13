require('./list.css')
require('./checkbox.css')
import React from 'react'
import ReactDOM from 'react-dom'

import CheckBox from './checkbox.jsx';


let Lists = React.createClass({
	componentDidMount: function() {
		console.log(": ")
		console.log(this.props.options)
		const _this = this;
		setInterval(function() {
		let _options = _this.props.options;
			let index = _this.props.index
			for(let i=0; i<_options.length; i++) {
				if(_options[i].checked) {
					ReactDOM.findDOMNode(_this.refs['listcheckbox-' + index + i]).className='ui-checkbox on';

				} else {
					ReactDOM.findDOMNode(_this.refs['listcheckbox-' + index + i]).className='ui-checkbox'
				}
			}
		}, 200)

	},
	handleChecked: function(index) {
		this.props.onChange(index)
		// let _options1 = this.props.options;
		// // console.log(this.refs)
		// let index1 = this.props.index
		// for(let i=0; i<_options1.length; i++) {
		// 	if(_options1[i].checked) {
		// 		ReactDOM.findDOMNode(this.refs['listcheckbox-' + index1 + i]).className='ui-checkbox on';

		// 	} else {
		// 		ReactDOM.findDOMNode(this.refs['listcheckbox-' + index1 + i]).className='ui-checkbox'
		// 	}
		// }

    const _this = ReactDOM.findDOMNode(this.refs['listcheckbox-'+this.props.index+index]);
    console.log('list:')
    console.log(_this)
    if(_this.className == 'ui-checkbox') {
      _this.className='ui-checkbox on';
    } else {
      _this.className = 'ui-checkbox';
    }
	},
	render: function() {
		return (
			<div id="list">
				{this.props.options.map((item, index) => {
					return(
						<div key={index} ref={'listcheckbox-'+this.props.index+index} className="ui-checkbox" title={this.props.index} onClick={this.handleChecked.bind(this, index)}>
							<input className="input-hidden" type="checkbox" defaultChecked={item.checked} />
							<span className="checkbox-body"></span>
							<span className="checkbox-text">{item.title}</span>
						</div>
					)
				})}
			</div>
		)
	}
})

module.exports = Lists;
