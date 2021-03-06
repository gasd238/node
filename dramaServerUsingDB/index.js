var express = require('express');
var logger = require('morgan');
var sqlite3 = require('sqlite3').verbose();
var favicon = require('serve-favicon')
var path = require('path')

var app = express();
var db = new sqlite3.Database('dramaListDB.db');

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(logger('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function(req, res){
    db.all('SELECT * FROM dramaListTable', function(err, rows){
        if(err){
            console.log(err.message);
        }else{
            res.render('dramaList', {title:'Jaehong', list: rows})
        }
    });
});

app.post('/', function(req, res){
    if(req.body.title && req.body.actor){
        db.run(`INSERT INTO dramaListTable (title, actor)
            VALUES ($title, $actor)`,
            {$title:req.body.title, $actor:req.body.actor},
            function(err){
                if(err){
                    console.log(err.message);
                }else{
                    console.log('data inserted');
                }
            }
            );
    }
});

app.put('/', function(req, res){
    if(req.body.title && req.body.newTitle && req.body.newActor){
        db.run(`UPDATE dramaListTable SET title = $newTitle, actor = $newActor
        WHERE title = $title`, {$title: req.body.title, $newTitle: req.body.newTitle, $newActor:req.body.newActor},
        function(err){
            if(err){
                console.log(err.message);
            }else{
                console.log('data updated');
            }
        }
        );
    }
    res.redirect('/');
});

app.delete('/', function(req, res){
    if(req.body.title){
        db.run(`DELETE FROM dramaListTable WHERE title=$title`,
        {$title: req.body.title},
        function(err){
            if(err){
                console.log(err.message);
            }else{
                console.log('data deleted');
            }
        }
        )
    }
    res.redirect('/');
});

app.listen(8080, function(){
    console.log('8080포트에서 머기중');
})