require('./sidebar.css');
let jsonp = require('../util/jsonp.js');
import React from 'react';
import Lists from './list.jsx';
import CheckBoxs from './checkboxs.jsx';

let SideBar = React.createClass({
	getInitialState: function() {
		// jsonp(this.props.source, "", "callback", (data) => {
		// 	if(data.status) {
		// 		if(this.isMounted()) {
		// 			return {
		// 				title: data.title,
		// 				departments: data.departments,
		// 			};
		// 		}
		// 	}else {
		// 		return {
		// 			title: '',
		// 			departments: [],
		// 		};
		// 		alert(data.msg);
		// 		reject("get data recruitment error!");
		// 	}
		// })
				return {
					title: '',
					departments: [],
				};
	},
	loadData: function() {
		jsonp(this.props.source, "", "callback", (data) => {
			if(data.status) {
				if(this.isMounted()) {
					this.setState({
						title: data.title,
						departments: data.departments,
					});
				}
			}else {
				alert(data.msg);
				reject("get data recruitment error!");
			}
		})
	},
	componentDidMount: function() {
		this.loadData();
	},
	handleChangeCheckState: function(index) {
		let _departments = this.state.departments;
		console.log(index)
		console.log('before: '+_departments[index].checked)
		_departments[index].checked = !_departments[index].checked
		console.log('after:'+_departments[index].checked)


		_departments[index].positions.map((item) => {
			item.checked = !item.checked;
		});

		this.setState({departments: _departments})
	},
	handleChangeCheckState1: function(index1, index2) {
		console.log(index1+' '+index2)
		this.state.departments[index1].positions[index2].checked = !this.state.departments[index1].positions[index2].checked
		// this.setState({departments: _departments})
		console.log(this.state.departments[index1].positions[index2].checked)
	},
	render: function() {

		return (
			<div id="recruitment">
				<h2 className="title">{this.state.title}</h2>
				<a href="javascript:;">清空</a>
{console.log(this.state.departments)}
				<CheckBoxs test="test" options={this.state.departments} onChange1={this.handleChangeCheckState1.bind(this)} onChange={this.handleChangeCheckState.bind(this)} />
			</div>
		)
	}

})

module.exports = SideBar;

