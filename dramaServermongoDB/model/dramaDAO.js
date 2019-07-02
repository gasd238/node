const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://localhost:27017';
const dbName = 'dramaListDB';

var db;

MongoClient.connect(url, (err, client)=>{
    db = client.db(dbName);
    db.dramaCol = db.collection('dramaCol');
});


exports.dramaList = function(options){
    db.dramaCol.find({}).toArray(function(err, docs){
        if(err){
            console.log(err.message);
        }else{
            options(docs);
        }
    });
};

exports.insertDrama = function(options){
    db.dramaCol.insertOne({title: options.title, actor: options.actor},
        function(err, result){
            if(err){
                console.log(err.message);
            }else{
                console.log('data inserted')
            }
        });
}