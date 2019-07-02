var express = require('express');
var router = express.Router();
var model = require('../model/dramaDAO')

router.get('/', (req, res)=>{
    model.dramaList(function(docs){
        res.render('dramaList', {list: docs})
    });
});

router.post('/', (req, res)=>{
    if(req.body.title && req.body.actor){
        MongoClient.connect(url, function(err, client){
            const db = client.db(dbName);
            const collection = db.collection('dramaCol');
            collection.insertOne({title: req.body.title, actor:req.body.actor},
            (err, result)=>{
                if(err){
                    console.log(err.message);
                }else{
                    console.log('성공');
                }
            })
            client.close();
        });
    }
    res.redirect('/');
});

module.exports = router;