/**
 * Created by SDH on 2017/6/23.
 */
function area(){
    console.log($(window).width()+"ffff");
    if($(window).width()>900){
        return ["900px","600px"];
    }
    else{
        return ["100%","100%"];
    }
}
function jb(){
    layer.open({
        type:2,
        title:"�ٱ�",
        //shadeClose:true,
        shade:0,
        skin: 'layui-layer-rim', //���ϱ߿�
        area:[area()[0],area()[1]],
        content:"jb.html",
    })
}

function fwqxx(){
    layer.open({
        type:2,
        title:"��������Ϣ",
        //shadeClose:true,
        shade:0,
        skin: 'layui-layer-rim', //���ϱ߿�
        area:[area()[0],area()[1]],
        content:"server-info.html"
    })
}

function jietu(){
    layer.open({
        type:1,
        title:"��ͼ",
        //shadeClose:true,
        shade:0,
        skin: 'layui-layer-rim', //���ϱ߿�
        area:[area()[0],area()[1]],
        content:"<img src='../../img/b.jpg' style='width:100%;height:100%'>",
    })
}
function daima(){
    layer.open({
        type:1,
        title:"����",
        //shadeClose:true,
        shade:0,
        skin: 'layui-layer-rim', //���ϱ߿�
        area:[area()[0],area()[1]],
        content:"fwqxx.html",
    })
}
function wenben(){
    layer.open({
        type:1,
        title:"�ı�",
        //shadeClose:true,
        shade:0,
        skin: 'layui-layer-rim', //���ϱ߿�
        area:[area()[0],area()[1]],
        content:"fwqxx.html",
    })
}

function edit(){
    layer.open({
        type:2,
        title:"�༭������Ϣ",
        shadeClose:true,
        shade:0.5,
        skin: 'layui-layer-rim', //���ϱ߿�
        area:[area()[0],area()[1]],
        content:"edit.html",
    })
}


function add(){
    layer.open({
        type:2,
        title:"����˺�",
        shadeClose:true,
        shade:0.5,
        skin: 'layui-layer-rim', //���ϱ߿�
        area:[area()[0],area()[1]],
        content:"add.html",
    })
}