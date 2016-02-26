import React from 'react'
import Reflux from 'reflux'
import ReactMixin from 'react-mixin'

import store from '../stores/store'
import actions from '../actions/action'
export default class Module extends React.Component{
	//组件渲染完成后，通过action获取所有的数组，刷新绑定到this.state上
  	componentDidMount() {
    	actions.show();
 	}
 	get(i){
 		actions.get(i);
 	}
	render(){	
		var border={
			overflow:"auto",
			width:"100%"
		}
		var put={
			width:"33.3%",
			height:"130px",
			float:"left",
			border:"1px solid #452321",
			marginRight:"-1px",
			marginBottom:"-1px",
			}
		var text={
			textAlign:"center",
		}
		var imgs={
			display:"block",
			width:"60%",
			margin:"0 auto",
			marginTop:"15%",
			marginBottom:"10%",
		}
		let items
    	if(this.state.list){
      		items=this.state.list.map( (item,i)=> {
              	return(              		
						<div style={put} onClick={this.get.bind(this,i)} key={i}>
							<img style={imgs} src={item.pic_url} />
							<div style={text}>{item.title}</div>
						</div>
					
			 	)
            })
   		}
   		return <div style={border}>{items}</div>
	}	
}
// ES6 mixin写法，通过mixin将store的与组件连接，功能是监听store带来的state变化并刷新到this.state
ReactMixin.onClass(Module, Reflux.connect(store));