import Reflux from 'reflux'
import actions from '../actions/action'
/*import JBridge from '../../source/bridge.js'*/
export default Reflux.createStore({
	items:[
    {
        "pic_url": "./src/module/source/img/tep.jpg",
        "title": "火爆完本",
        "target_url": "http://www.google.com/"
    },
    {
        "pic_url": "./src/module/source/img/tep.jpg",
        "title": "悬疑探险",
        "target_url": "http://www.baidu.com/"
    },
    {
        "pic_url": "./src/module/source/img/tep.jpg",
        "title": "古风言情",
        "target_url": "http://www.sina.com/"
    },
    {
        "pic_url": "./src/module/source/img/tep.jpg",
        "title": "玄幻超能",
        "target_url": "http://www.souhu.com/"
    },
    {
        "pic_url": "./src/module/source/img/tep.jpg",
        "title": "现代言情",
        "target_url": "http://www.baidu.com/"
    },
    {
        "pic_url": "./src/module/source/img/tep.jpg",
        "title": "惊悚诡异",
        "target_url": "http://www.baidu.com/"
    },
    {
        "pic_url": "./src/module/source/img/tep.jpg",
        "title": "官场职场",
        "target_url": "http://www.baidu.com/"
    },
    {
        "pic_url": "./src/module/source/img/tep.jpg",
        "title": "历史军事",
        "target_url": "http://www.baidu.com/"
    },
    {
        "pic_url": "./src/module/source/img/tep.jpg",
        "title": "古代武侠",
        "target_url": "http://www.baidu.com/"
    }
	],
	listenables: [actions],
	
	onShow(){
		this.trigger({list:this.items});
	},
	onGet(i){
		window.location.href=this.items[i].target_url;
	},
});