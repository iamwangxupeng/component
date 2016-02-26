import React from 'react'
import Reflux from 'reflux'
import ReactMixin from 'react-mixin'
import Jquery from 'jquery'
import Bootstrap from'bootstrap-webpack'
import store from '../stores/store'
import actions from '../actions/action'
import Swi from 'SwiCss'
import Swiper from 'swiper'
export default class Rplay extends React.Component{
	componentDidMount(){
		actions.show();
	}
  get(i){
    actions.get();
  }
	render(){
    var mySwiper = new Swiper('.swiper-container', {
      autoplay: 5000,//可选选项，自动滑动
      scrollbar:'.swiper-scrollbar',
      scrollbarHide:false,
      loop : true,
    })
    var slide={
      width:"96%",
      margin:"2%"
    }
    var slide_img={
      width:"100%"
    }
    var pages={
      margin:"0 auto"
    }
    var scrollbar={
      backgroundColor:"#FF6100"
    }
    let items
    if(this.state.list){
      items=this.state.list.map( (item,i)=> {
        return(
            <div className="swiper-slide" onClick={this.get.bind(this,i)} key={i} style={pages}>
              <img style={slide_img} src={item.img_url} />
              <div>{item.title}</div>
            </div>
        )
      })
    } 
    return(
      <div className="swiper-container" style={slide}>
        <div className="swiper-wrapper" >
          {items} 
        </div>
        <div className="swiper-scrollbar" style={scrollbar}></div>  
      </div>
      )
	}
}
// ES6 mixin写法，通过mixin将store的与组件连接，功能是监听store带来的state变化并刷新到this.state
ReactMixin.onClass(Rplay, Reflux.connect(store));