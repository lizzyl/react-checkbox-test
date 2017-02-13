require('./checkboxs.css');
require('./checkbox.css');
import React from 'react';
import ReactDOM from 'react-dom'

import Lists from './list.jsx';
import CheckBox from './checkbox.jsx';

let CheckBoxs = React.createClass({
	componentDidMount: function() {
		console.log("checkboxs: ")
		console.log(this.props.options)
		let _options = this.props.options;
		const _this = this;
		setInterval(function() {
			_options = _this.props.options;
			for(let i=0; i<_options.length; i++) {
				if(_options[i].checked) {
					ReactDOM.findDOMNode(_this.refs['checkbox-' + i]).className='ui-checkbox on';
				} else {
					ReactDOM.findDOMNode(_this.refs['checkbox-' + i]).className='ui-checkbox';
				}
			}
		},300)


	},
	handleChecked: function(index) {
		// console.log('handel'+index)
		this.props.onChange(index);

		let _options = this.props.options;
		for(let i=0; i<_options.length; i++) {
			if(_options[i].checked) {
				ReactDOM.findDOMNode(this.refs['checkbox-' + i]).className='ui-checkbox on';
			} else {
				ReactDOM.findDOMNode(this.refs['checkbox-' + i]).className='ui-checkbox';
			}
		}

    // const _this = ReactDOM.findDOMNode(this.refs['checkbox-'+index]);
    // console.log('checkboxs:'+index)

    // console.log(_this)
    // if(_this.className == 'ui-checkbox') {
    //   _this.className='ui-checkbox on';
    // } else {
    //   _this.className = 'ui-checkbox';
    // }
	},

	render: function() {
		return (
			<div id="checkboxs">
				{this.props.options.map((item, index) => {

					return (
						<div className="departments">
						{console.log(index)}
							<div key={index} ref={'checkbox-'+index} className="ui-checkbox" onClick={this.handleChecked.bind(this, index)}>
								<input className="input-hidden" type="checkbox" defaultChecked={item.checked} />
								<span className="checkbox-body"></span>
								<span className="checkbox-text">{item.title}</span>
							</div>
              <div>
                <Lists index={index} options={item.positions} onChange={this.props.onChange1.bind(this, index)} />
              </div>
            </div>
					)
				})}
			</div>
		)
	}
})
module.exports = CheckBoxs;

