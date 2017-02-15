
require('./app/lib/common.css');
import React from 'react';
import ReactDOM from 'react-dom';

import SideBar from './app/components/sidebar.jsx';

ReactDOM.render(
	<div>
		<SideBar source="http://localhost:3000/data/recruitment" />
	</div>,
	document.querySelector("#myApp")
);
