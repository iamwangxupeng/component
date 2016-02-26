import Reflux from 'reflux'
import Actions from '../actions/action'
/*import jsBridge from '../../source/bridge.js'*/
export default Reflux.createStore({
	items: [
        {
            "title": "父王，娘亲被抢了（最新完结）",
            "type": "program_ondemand",
            "channel_id": 103536,
            "score": 9,
            "category_id": 521,
            "img_url": "http://pic.qingting.fm/2015/0826/20150826154855642.jpg",
            "id": 3267734,
            "desc": "【连载火文】一夜疯狂缠绵后 男人取走了她的处子血"
        },
        {
            "title": "高智商犯罪（全集）【豆瓣五星高分，国产推理最佳口碑】",
            "type": "program_ondemand",
            "channel_id": 68770,
            "score": 9,
            "category_id": 521,
            "img_url": "http://pic.qingting.fm/2015/0831/20150831135656712.jpg",
            "id": 2136928,
            "desc": "高智商犯罪全集 突破犯罪心理学"
        },
        {
            "title": "我当算命先生那几年",
            "type": "program_ondemand",
            "channel_id": 96670,
            "score": 10,
            "category_id": 521,
            "img_url": "http://pic.qingting.fm/2015/1023/20151023112733436.jpg",
            "id": 2551189,
            "desc": "道士不下山 道教驱鬼降魔的真实故事"
        },
        {
            "title": "茅山宗师",
            "type": "program_ondemand",
            "channel_id": 141012,
            "score": 10,
            "category_id": 521,
            "img_url": "http://pic.qingting.fm/2016/0222/2016022216102539.jpg",
            "id": 3936129,
            "desc": "揭开茅山“密显之争”的神秘面纱"
        },
        {
            "title": "苗疆蛊事（合集）【点击近亿的超强人气巨作】",
            "type": "program_ondemand",
            "channel_id": 75374,
            "score": 10,
            "category_id": 521,
            "img_url": "http://pic.qingting.fm/2015/0830/20150830150939387.jpg",
            "id": 1484760,
            "desc": "巫蛊之祸，自西汉起延续几千年，屡禁不止"
        },
        {
            "title": "霸道总裁的契约女友（完本）",
            "type": "program_ondemand",
            "channel_id": 91076,
            "score": 10,
            "category_id": 521,
            "img_url": "http://pic.qingting.fm/2015/0928/20150928175710624.jpg",
            "id": 2371669,
            "desc": "总裁女友不好当 何必趟浑水"
        }
    ],
    listenables :[Actions],
    onGet(i){
        window.location.href="http://www.baidu.com"
    },
    onShow(){
    	this.trigger({list:this.items});
    }
})