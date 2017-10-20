/**
 * Created by SDH on 2017/8/22.
 */
var express = require('express');
var router = express.Router();
var mysql=require('mysql');

option={
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'test'
};
var conn=mysql.createConnection(option);
conn.connect();

/* GET home page. */
router.get('/', function(req, res, next) {

    //req.session.name="sxh";

    //console.log(req.session);
    //console.log( req.cookies.name);
    res.render('login', { room: 'Chatting' });
});

/* GET home page. */
router.post('/enter', function(req, res, next) {

    console.log("enter...");

    var id=req.body.id;
    console.log(id);
    req.session.id=id;
    //console.log(req.session);
    //console.log( req.cookies.name);
    var result={};
    var sql="select user,roomid,friendid from user where id='"+id+"'";
    console.log(sql);
    conn.query(sql,function(error,results){
        if(error){
            console.log("error");
        }
        if(results!=null && results.length > 0){

            console.log(results[0]);

            var user=results[0].user;
            var roomid=results[0].roomid;
            var friendid=results[0].friendid;


            //查找聊天室
            sql="select * from room where id in ("+roomid+")";
            console.log(sql);

            conn.query(sql,function(error,results){
                if(error){
                    console.log("error");
                }
                if(results!=null && results.length>0) {
                    console.log(results);
                    var rooms = [];
                    for (var i = 0; i < results.length; i++) {
                        var room = {};
                        room.Id = results[i].Id;
                        room.name = results[i].name;
                        rooms.push(room);
                    }

                }
                result = {"user": user,"id":id,"rooms":rooms};
                console.log(result);

                //查找好友
                sql2="select * from user where id in ("+friendid+")";
                console.log(sql);
                conn.query(sql2,function(error,results) {
                    var friends = [];
                    if (error) {
                        console.log("error");
                    }
                    if (results != null && results.length > 0) {
                        console.log(results);
                        for (var i = 0; i < results.length; i++) {
                            var friend = {};
                            friend.Id = results[i].Id;
                            friend.name = results[i].user;
                            friends.push(friend);
                        }

                    }
                    result.friends=friends;
                    console.log(result);
                    res.render("chat",result);
                })


            })

        }

    });
});

/* GET home page. */
router.get('/msg', function(req, res, next) {
    var user=req.session.name;
    console.log(user);
    var msg=req.query.msg;
    var roomid=req.query.roomid;
    var date=new Date();
    console.log(date);
    console.log(req.query);
    var sql="insert into msg(msg,roomid,user,date) values(?,?,?,?)";
    conn.query(sql,[msg,roomid,user,date],function(error, results ){
        if(error){
            console.log("error");
        }
        if(results!=null) {
            console.log(results.affectedRows);
        }
    });


    //var result={
    //    'msg':
    //}
    res.json({room: 'room1' });
});


/* GET home page. */
router.get('/room1', function(req, res, next) {
    res.render('chat', {room: 'room1' });
});

/* GET home page. */
router.get('/room2', function(req, res, next) {
    res.render('chat', {room: 'room2' });
});

/* GET home page. */
router.get('/room3', function(req, res, next) {
    res.render('chat', {room: 'room3' });
});

/* GET home page. */
router.get('/room4', function(req, res, next) {
    res.render('chat', {room: 'room4' });
});


module.exports = router;
