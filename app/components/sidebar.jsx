require('./sidebar.css');
let jsonp = require('../util/jsonp.js');
import React from 'react';
import Lists from './list.jsx';
import CheckBoxs from './checkboxs.jsx';

let SideBar = React.createClass({
	getInitialState: function() {
		return {
			title: '',
			departments: [],

		};
	},
	componentDidMount: function() {
		// let recruitment = {
		// 	title: "招聘职位",
		// 	departments: [{
		// 		id: 1,
		// 		title: "工程研发部门",
		// 		quantity: 120,
		// 		checked: true,
		// 		positions: [{
		// 			title: "Mac 开发工程师",
		// 			checked: false,
		// 			quantity: 9
		// 		}, {
		// 			title: "iOS App 测试工程师",
		// 			checked: false,
		// 			quantity: 17
		// 		}, {
		// 			title: "Android 远程控制工程师",
		// 			checked: false,
		// 			quantity: 61
		// 		}, {
		// 			title: "Web 前端工程师",
		// 			checked: false,
		// 			quantity: 31
		// 		}, {
		// 			title: "Android 多媒体软件开发工程师",
		// 			checked: false,
		// 			quantity: 9
		// 		}]
		// 	}, {
		// 		id: 2,
		// 		title: "产品设计部门",
		// 		quantity: 136,
		// 		checked: true,
		// 		positions: [{
		// 			title: "网页设计师",
		// 			checked: false,
		// 			quantity: 47
		// 		}, {
		// 			title: "ID/工业设计师",
		// 			checked: true,
		// 			quantity: 39
		// 		}, {
		// 			title: "视觉设计师/GUI界面设计师",
		// 			checked: false,
		// 			quantity: 42
		// 		}, {
		// 			title: "平面设计师",
		// 			checked: false,
		// 			quantity: 8
		// 		}]
		// 	}]
		// }
		// this.setState({
		// 	title: recruitment.title,
		// 	departments: recruitment.departments,
		// });

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
	handleChangeCheckState: function(index) {

		let _departments = this.state.departments;

		console.log(index)
		console.log('before: '+_departments[index].checked)
		this.state.departments[index].checked = !this.state.departments[index].checked
		console.log('after:'+this.state.departments[index].checked)
		console.log(this.state.departments)

		// this.state.departments[index].positions.map((item) => {
		// 	item.checked = !item.checked;
		// });

		// this.setState({departments: _departments})


	},
	render: function() {

		return (
			<div id="recruitment">
				<h2 className="title">{this.state.title}</h2>
				<a href="javascript:;">清空</a>
				<CheckBoxs test="test" options={this.state.departments} onChange={this.handleChangeCheckState.bind(this)} />
			</div>
		)
	}

})

module.exports = SideBar;

