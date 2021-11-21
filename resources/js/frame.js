/**
 * Created by anps0907 on 2/6/2015.
 */

var nodeDialg;
$("#question").live("click", function () {
    nodeDialg = $.alertDialog({
        type : 1,
        title : ['选择部门'],
        fix : false,
        offset:["50px" , '50%'],
        area : ['auto','600px'],
        shadeClose : false,
        page : {dom : '#sysNodeList'}//在sysNodeList是弹出对象id
    });
});

$("#querySysNodeList").live("click", function () {
    //alert("querySysNodeList");
    $.alertPlus("ddf",1,"df", function (index) {
        $.closeDialog(index);
    });
    $("#noCode").attr("value","anps");
});

$("#clearSysNodeList").live("click", function () {
    alert("clearSysNodeList");
    $.updateTitle("anps",nodeDialg);

});

$("#confirm").live("click", function () {
    $.layerConfirm("确认要删除？", function (index) {
        $.alertPlus("成功",1,"提示");
    },"提示", function (index) {
        $.closeDialog(index);
    });
});

$("#tips").live("mouseover",function(){
    $.loadTip("我爱你,亲爱的",this,{
        style: ['background-color:#0FA6D8; color:#fff', '#0FA6D8'],
        maxWidth:150
    });
});

$("#tips").live("mouseout", function () {
    $.closeTip();
});

$("#ftp").live("click",function(){
    $.loadTier(2,0,true);
});

