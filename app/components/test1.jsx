import React from 'react';
import ReactDOM from 'react-dom'

import CheckBox from './test2.jsx';

let Test1 = React.createClass({
	getInitialState: function() {
		return {
			checkboxOption: [],
		};
	},
	componentDidMount: function() {
		let checkboxOptions = [
			{
				text:'多选框-1',
				value: 'checkbox-1',
				checked: true
			},
			{
				text:'多选框-2',
				value: 'checkbox-2',
				checked: false
			},
			{
				text:'多选框-3',
				value: 'checkbox-3',
				checked: false
			}
		];
		this.setState({
			checkboxOption: checkboxOptions,
		});
	},

	handleChangeCheckBox: function(index){
		let _checkboxOption = this.state.checkboxOption;

		if(_checkboxOption[index].checked){
			_checkboxOption[index].checked = false;
		}else{
			_checkboxOption[index].checked = true;
		}

		this.setState({checkboxOption: _checkboxOption})
	},

	render: function(){
		return(
			<div>
			   <CheckBox options={this.state.checkboxOption} onChange={this.handleChangeCheckBox.bind(this)}/>
			</div>
		)
	}
})
module.exports = Test1;
