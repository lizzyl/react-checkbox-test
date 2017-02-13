require('./list.css')
require('./checkbox.css')
import React from 'react'
import ReactDOM from 'react-dom'

import CheckBox from './checkbox.jsx';


let Lists = React.createClass({
	// handleChangeCheckState: function(index) {
	// 	console.log(index)
	// 	console.log('before: '+this.state.departments[index].checked)
	// 	this.state.departments[index].checked = !this.state.departments[index].checked
	// 	console.log('after:'+this.state.departments[index].checked)

	// 	this.state.departments[index].positions.map((item) => {
	// 		item.checked = !item.checked;
	// 	});
	// 	// console.log(this.state.departments[0].positions[0].checked)

	// },
	componentDidMount: function() {
		// console.log(": ")
		// console.log(this.props.options)
		// const _options = this.props.options;
		// for(let i=0; i<_options.length; i++) {
		// 	if(_options[i].checked) {
		// 		ReactDOM.findDOMNode(this.refs['listcheckbox-' + i].className='ui-checkbox on');
		// 	} else {
		// 		ReactDOM.findDOMNode(this.refs['listcheckbox-' + i].className='ui-checkbox')
		// 	}
		// }
	},
	handleChecked: function(index) {
    // const _this = ReactDOM.findDOMNode(this.refs['listcheckbox-'+index]);
    console.log('list:')
    // console.log(_this)
    // if(_this.className == 'ui-checkbox') {
    //   _this.className='ui-checkbox on';
    // } else {
    //   _this.className = 'ui-checkbox';
    // }
	},
	render: function() {
		return (
			<div id="list">
				{this.props.options.map((item, index) => {
					return(
						<div key={index} ref={'listcheckbox-'+index} className="ui-checkbox" onClick={this.handleChecked.bind(this, index)}>
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
