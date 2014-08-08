var args = arguments[0] || {};

var myAPIKey = "2oF3Jz4lohQhqB8aPdkp9jdAN3hGfJHiLoA5cvxo:generationchurch@";

var getVerse = function(verse) {
    var json;
    var response;
    var myVerse = verse;
    // var verse;
    var url = "https://" + myAPIKey + "bibles.org/v2/verses/eng-ESV:" + myVerse + ".js";
    // var url = "https://" + myAPIKey + "bibles.org/v2/passages.js?q[]=" + myVerse + "&version=eng-KJVA";
    var request = Ti.Network.createHTTPClient({
        onload: function(e) {
            Ti.API.info(this.responseText);
            Ti.API.info(request.status);
            
            json = this.responseText;
            jsonObject = JSON.parse(json);
            
            // alert(jsonObject.response.search.result.passages[0].text);
            return jsonObject.response.verses[0].text;
            // alert(jsonObject.response.verses[0].text);
            
           },
        onerror: function(e) {
            Ti.API.info(e.error);
            alert(request.status);
        },
        timeout:5000
    });
    
    request.open("GET", url);
    // request.send();
    // request.close();
};

modules.exports = getVerse;