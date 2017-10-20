/**
 * Created by SDH on 2017/8/24.
 */
var mysql=require('mysql');

option={
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'test'
};
var conn=mysql.createConnection(option);
conn.connect();

var user="韩刚";
console.log(user);

//console.log(req.session);
//console.log( req.cookies.name);
var sql="select roomid from user where user='"+user+"'";
console.log(sql);
conn.query(sql,function(error,results){
    if(error){
        console.log("error");
    }
    if(results!=null){
        console.log(results);

        var roomid=results[0].roomid;
        sql="select * from room where id in ("+roomid+")";
        console.log(sql);

        conn.query(sql,function(error,results){
            if(error){
                console.log("error");
            }
            if(results!=null && results.length>0) {
                console.log(results);
                var result=[];
                for(var i=0;i<results.length;i++){
                    var room={};
                    room.id=results[i].Id;
                    room.name=results[i].name;
                    result.push(room);
                }
                console.log(result);
                //res.render("chat",result);
            }
        })

    }

});


 sql="insert into msg(msg,roomid,user,date) values('dss','2','sw','0000-0000-0000 12:22:22')";
conn.query(sql,function(error, results ){
    if(error){
        console.log("error");
    }
    if(results!=null && results.length>0) {
        console.log(results);
    }
});