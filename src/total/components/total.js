import Bar from "./bar/components/bar"
import Module from "./module/components/module"
import Rplay from "./rplay/components/rplay"
import React from 'react'
import Reflux from 'reflux'
import ReactMixin from 'react-mixin'
import store from '../stores/store'
import actions from '../actions/action'
export default class Total extends React.Component{
	render(){
		return(
			<div>
				<Bar></Bar>
				<Module></Module>
				<Rplay></Rplay>
			</div>
		)
	}
}