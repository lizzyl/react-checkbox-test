require('./checkboxs.css');
require('./checkbox.css');
import React from 'react';
import ReactDOM from 'react-dom'

import Lists from './list.jsx';
import CheckBox from './checkbox.jsx';

let CheckBoxs = React.createClass({

	handleChecked: function(index) {
console.log("handle"+index)
		// const _this = ReactDOM.findDOMNode(this.refs['checkbox-'+index]);
		// if(_this.className == 'ui-checkbox') {
		// 	_this.className='ui-checkbox on';
		// } else {
		// 	_this.className = 'ui-checkbox';
		// }
	},

	render: function() {
		return (
			<div id="checkboxs">
				{this.props.options.map((item, index) => {
					return (
						<div>
							<div className="departments">
								<div id="checkbox" key={index} ref={'checkbox-'+index} className="ui-checkbox" >
									<input className="input-hidden" type="checkbox" onChange={this.props.onChange.bind(this, index)} defaultChecked={item.checked} />
									<span className="checkbox-body"></span>
									<span className="checkbox-text">{item.title}</span>
								</div>
              </div>
              <div>
              	<Lists options={item.positions} />
              </div>
						</div>
					)
				})}
			</div>
		)
	}
})
module.exports = CheckBoxs;

