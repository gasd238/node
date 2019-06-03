var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('dramaListDB.db');

db.serialize(()=>{
    //테이블 생성
    db.run(`CREATE TABLE dramaListTable (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        actor TEXT NOT NULL
    )`, function(err){
        if(err){
            console.log(err.message);
        }else{
            console.log('table created')
        }
    });

    db.run(`INSERT INTO dramaListTable (title, actor)
    VALUES ("나의 아저씨", "아이유, 이선균")`, function(err){
        if(err){
            console.log(err.message);
        }else{
            console.log('table created')
        }
    });


    db.close();



});