require('./checkbox.css');
import React from 'react';
import ReactDOM from 'react-dom'

import Lists from './list.jsx';

let CheckBox = React.createClass({
	componentDidMount: function() {
		var _this = this;
		setInterval(function() {

			if(_this.props.item.checked) {
				ReactDOM.findDOMNode(_this.refs['checkbox-' + _this.props.index]).className='ui-checkbox on';
			} else {
				ReactDOM.findDOMNode(_this.refs['checkbox-' + _this.props.index]).className='ui-checkbox';
			}
		}, 100)

	},
	handleChecked: function(index) {
		this.props.onChange(index)

    const _this = ReactDOM.findDOMNode(this.refs['checkbox-'+this.props.index]);
    // console.log('list:')
    // console.log(_this)
    if(_this.className == 'ui-checkbox') {
      _this.className='ui-checkbox on';
    } else {
      _this.className = 'ui-checkbox';
    }
	},

	render: function() {
		return (
			<div key={this.props.index} ref={'checkbox-'+this.props.index} className="ui-checkbox" onClick={this.handleChecked.bind(this, this.props.index)}>
				<input className="input-hidden" type="checkbox" defaultChecked={this.props.item.checked} />
				<span className="checkbox-body"></span>
				<span className="checkbox-text">{''+this.props.item.title}</span>
			</div>
		)
	}
})
module.exports = CheckBox;

