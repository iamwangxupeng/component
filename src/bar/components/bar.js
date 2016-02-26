import React from 'react'
import Reflux from 'reflux'
import ReactMixin from 'react-mixin'

import store from '../stores/store'
import actions from '../actions/action'

export default class Bar extends React.Component{
	detail(e){
		var bars=document.getElementsByClassName("bar");
		for(var n=0;n<bars.length;n++){
			bars[n].style.color="";
			bars[n].style.borderBottom="";
		}
		var dom=e.currentTarget
		dom.style.color="#FF6100";
		dom.style.borderBottom="2px solid #FF6100";
	}
	render(){
		var head={
			display: "inline-block",
			width: "48.88%",
			height: "50px",
			lineHeight: "50px",
			textAlign: "center",
		}
		return(
			<div>
				<span style={head} onClick={this.detail.bind(this)} className="bar left">分类</span><span className="line">|</span><span style={head} onClick={this.detail.bind(this)} className="bar right">精选</span>
			</div>
		)
	}
}
// ES6 mixin写法，通过mixin将store的与组件连接，功能是监听store带来的state变化并刷新到this.state
ReactMixin.onClass(Bar, Reflux.connect(store));