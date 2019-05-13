var static = require('node-static');

var file = new static.Server('./public');

require('http').createServer(function(request, response){
    request.addListener('end', function(){
        file.serve(request, response, function(e,res){
            if(e&&(e.status)===404){
                file.serveFile('/not-found.html',404,{},request,response);
            }
        });
    }).resume();
}).listen(8080);
