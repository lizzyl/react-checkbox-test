require('./sidebar.css');
let jsonp = require('../util/jsonp.js');
import React from 'react';
import Lists from './list.jsx';
import CheckBox from './checkbox.jsx';

let SideBar = React.createClass({
	getInitialState: function() {
		return {
			title: '',
			departments: [],

		};
	},
	componentDidMount: function() {
		jsonp(this.props.source, "", "callback", (data) => {
			if(data.status) {
				if(this.isMounted()) {
					this.setState({
						title: data.title,
						departments: data.departments,
					});
				}
				console.log('length:'+data.departments.length)
			}else {
				alert(data.msg);
				reject("get data recruitment error!");
			}
		})

	},
	handleChangeCheckState: function(e) {
		console.log('nihao')

		this.state.departments[0].checked = !this.state.departments[0].checked
		console.log(this.state.departments[0].checked)

		this.state.departments[0].positions.map((item) => {
			item.checked = !item.checked;
		});
		console.log(this.state.departments[0].positions[0].checked)

	},
	render: function() {

		return (
			<div id="recruitment">
				<h2 className="title">{this.state.title}</h2>
				<a href="javascript:;">清空</a>
        {
         this.state.departments.map((item, index) => {
           return <div>
           	  <div className="department">

                 <CheckBox options={item} onChange={this.handleChangeCheckState} />

              </div>
              <div>
              	<Lists listItems={item.positions}/>
              </div>
           </div>
         })
        }

			</div>
		)
	}

})

module.exports = SideBar;

