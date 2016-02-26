/**
 * Created by Nite on 16/2/25.
 */

_android = {
    _callback: function(result, call_id) {
        alert(result)
        this[call_id](JSON.parse(result))
        delete this[call_id]
    },
    _registerCallback: function(callback) {
        var call_id = parseInt(Math.random()*0xFFFFFFFF).toString()
        this[call_id] = callback
        return call_id
    },
    //getAttrBlockList: function(params, callback) {
    //    var call_id = this._registerCallback(callback)
    //    SV.getAttrBlockList(JSON.stringify(params),"qt_sv._callback", call_id)
    //},
    getBannerList: function(params, callback) {
        var call_id = this._registerCallback(callback)
        SV.getBannerList(JSON.stringify(params),"qt_sv._callback", call_id)
    },
    getSectionList: function(params, callback) {
        var call_id = this._registerCallback(callback)
        SV.getSectionList(JSON.stringify(params),"qt_sv._callback", call_id)
    },
    getChannelList: function(params, callback) {
        var call_id = this._registerCallback(callback)
        SV.getChannelList(JSON.stringify(params),"qt_sv._callback", call_id)
    },

    openWebView: function(params, callback) {
        var call_id = this._registerCallback(callback)
        SV.openWebView(JSON.stringify(params),"qt_sv._callback", call_id)
    }
}

_web = {

}

var qt_sv;
_ua = navigator.userAgent.toLowerCase();
if (_ua.indexOf("android-qingtingfm") >= 0) {
    qt_sv = _android;
} else {
    qt_sv = _web;
}


