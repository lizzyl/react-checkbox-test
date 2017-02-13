
require('./app/lib/common.css');
import React from 'react';
import ReactDOM from 'react-dom';

import Search from './app/components/search.jsx';
import Header from './app/components/header.jsx';
import Otherapp from './app/components/otherapp.jsx';
import Spike from './app/components/spike.jsx';
import More from './app/components/more.jsx';
import Like from './app/components/like.jsx';
import SideBar from './app/components/sidebar.jsx';
import Test1 from './app/components/test1.jsx';

ReactDOM.render(
	<div>
		<Test1 />
		<SideBar source="http://localhost:3000/data/recruitment" />
	</div>,
	document.querySelector("#myApp")
);
