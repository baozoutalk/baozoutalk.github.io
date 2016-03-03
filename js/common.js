/* 工具函数 */
function getPosition(element) {
    var actualLeft = element.offsetLeft,
        actualTop = element.offsetTop,
        current = element.offsetParent; 
    while (current !== null) {
        actualLeft += current.offsetLeft;
        actualTop += current.offsetTop;
        current = current.offsetParent;
    }
    return {
        left: actualLeft,
        top: actualTop
    };
}
function extend(obj1,obj2){
    for(var attr in obj2){
        obj1[attr] == obj2[attr]
    }
}

/* 带遮罩弹窗 */
function Popup(obj){
    this.obj = obj;
    this.oMask = $('<div id="lcf-mask"></div>');
    this.structure();
    this.maskstyle();
    this.show();
    this.change();
    this.close();
}
Popup.prototype.structure =function(){
    $('body').prepend(this.oMask);
}
Popup.prototype.maskstyle = function(){
    var screenWidth = $(window).width();
        screenHeight = $(window).height();
    this.oMask.css({
        width:screenWidth,
        height:screenHeight
    }); 
    this.oMask.fadeIn();    
}
Popup.prototype.show = function(){
    this.obj.fadeIn();
}
Popup.prototype.change = function(){
    var _this = this;
    $(window).resize(function(){
        _this.maskstyle();  
    }); 
}
Popup.prototype.close = function(){
    var _this = this;
    this.obj.find('.lcf-close').click(function(){
            _this.oMask.fadeOut(400,function(){
                $(this).remove();
            });
            _this.obj.fadeOut();        
    });
}




$(function(){
    /* 微信弹窗 */
    $('.weixin-b').click(function(){
        var wxPopup = new Popup($('#lcf-dialog'));
    });

});