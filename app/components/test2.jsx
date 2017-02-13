import React from 'react';
import ReactDOM from 'react-dom'


let Test2 = React.createClass({
	componentDidMount: function() {
		const _options = this.props.options;
		for(let i=0; i<_options.length; i++){
			if(_options[i].checked){
				ReactDOM.findDOMNode(this.refs['checkbox-'+ i]).className = 'ui-checkbox on';
			}else{
				ReactDOM.findDOMNode(this.refs['checkbox-'+ i]).className = 'ui-checkbox';
			}
		}
	},
	handleChecked: function(index){
		console.log('handlech:'+index)
		const _this = ReactDOM.findDOMNode(this.refs['checkbox-'+index]);
		if(_this.className == 'ui-checkbox'){
			_this.className = 'ui-checkbox on';
		}else{
			_this.className = 'ui-checkbox';
		}
	},
	render: function(){
		return(
			<div className="del-item">
				<label className="ui-label">
					<span className="label-sign">*</span>
					<span className="label-text">{this.props.label}</span>
				</label>
				{this.props.options.map((item,index) => {
					return (
						<div key={index} ref={'checkbox-'+index} className="ui-checkbox" onClick={this.handleChecked.bind(this,index)}>
							<input className="input-hidden" type="checkbox" onChange={this.props.onChange.bind(this,index)} defaultChecked={item.checked}/>
							<span className="checkbox-body"></span>
							<span className="checkbox-text">{item.text}</span>
						</div>
					)
				})}
			</div>
		)
	}
})
module.exports = Test2;
