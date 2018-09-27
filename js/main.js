function load(){
    var req = require.content("https://engineering-on-display.github.io/carousel");
    req.keys().forEach(function(key){
        console.log(req(key));
    });
}

load();