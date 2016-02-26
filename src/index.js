import React from 'react';
import ReactDOM from 'react-dom';
import Bar from "./bar/components/bar";
import Module from "./module/components/module";
import Rplay from "./rplay/components/rplay";
ReactDOM.render(
	<div>
		<Bar></Bar>
		<Module></Module>
		<Rplay></Rplay>
	</div>,
	document.querySelector('#module')
);