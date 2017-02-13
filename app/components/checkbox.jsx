require('./checkbox.css');
import React from 'react';
import ReactDOM from 'react-dom'

import Lists from './list.jsx';

let CheckBox = React.createClass({
	componentDidMount: function() {
		const _options = this.props.options;
		console.log(_options)
		if(_options.checked) {
			ReactDOM.findDOMNode(this.refs['checkbox'].className='ui-checkbox on');
		} else {
			ReactDOM.findDOMNode(this.refs['checkbox'].className='ui-checkbox')
		}
		// for(let i=0; i<_options.length; i++) {
		// 	if(_options[i].checked) {
		// 		ReactDOM.findDOMNode(this.refs['checkbox-' + i].className='ui-checkbox on');
		// 	} else {
		// 		ReactDom.findDOMNode(this.refs['checkbox-' + i].className='ui-checkbox')
		// 	}
		// }
	},
	handleChecked: function(index) {
		const _this = ReactDOM.findDOMNode(this.refs['checkbox-'+index]);
		if(_this.className == 'ui-checkbox') {
			_this.className='ui-checkbox on';
		} else {
			_this.className = 'ui-checkbox';
		}
	},

	render: function() {
		return (
			<div id="checkbox" ref={'checkbox'} className="ui-checkbox" onClick={this.props.onChange.bind(this, this.props.index)} >
				<input className="input-hidden" type="checkbox"  onChange={this.props.onChange.bind(this, this.props.index)} defaultChecked={this.props.options.checked} />
				<span className="checkbox-body"></span>
				<span className="checkbox-text">{this.props.options.title}</span>
			</div>
		)
	}
})
module.exports = CheckBox;

