require('./checkboxs.css');
require('./checkbox.css');
import React from 'react';
import ReactDOM from 'react-dom'

import Lists from './list.jsx';
import CheckBox from './checkbox.jsx';

let CheckBoxs = React.createClass({

	render: function() {
		return (
			<div id="checkboxs">
				{this.props.options.map((item, index) => {

					return (
						<div className="departments">
							<CheckBox index={index} item={item} onChange={this.props.onChange.bind(this)}/>
              <div>
                <Lists index={index} options={item.positions} onChange={this.props.onChange1.bind(this)} />
              </div>
            </div>
					)
				})}
			</div>
		)
	}
})
module.exports = CheckBoxs;

