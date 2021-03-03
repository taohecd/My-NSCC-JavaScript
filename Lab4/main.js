(function(){
var url = "https://prog3012.netlify.app/.netlify/functions/getStrings";

    fetch(url)
      .then(function(response){
        return response.json();
    }).then(function(jsonData){
        jsonData.forEach(function(element) {
            var num = element.number;
            var str = element.string;
            for (var index = 0; index < str.length; index = index + num) {
                console.log(str.slice(index, index + num));
            }
        });
    });
    //return;
})();

