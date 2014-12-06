var args = arguments[0] || {};

// 
// var myAPIKey = "2oF3Jz4lohQhqB8aPdkp9jdAN3hGfJHiLoA5cvxo:generationchurch@";
// var myVerseText;
// 
// var arrMyVerses = [
                    // "eph.2.20",
                    // "ps.24.6",
                    // "gal.2.20",
                    // "john.3.30",
                    // "ps.71.18",
                    // "ps.79.13",
                    // "ps.102.18",
                    // "ps.145.4",
                    // "joel.1.3",
                    // "matt.23.36",
                    // "luke.7.31"
                    // ];
//                     
// //Get a Random Element to pull from arrMyVerses                    
// var myRandomElement = Math.floor(Math.random() * arrMyVerses.length);
// var myVerse = arrMyVerses[ myRandomElement ];
// getVerse( myVerse );
// // alert( myVerse );
// 
// //Getting verse from bibles.org API
// function getVerse(verse) {
    // var json;
    // var response;
    // var myVerse = verse;
    // var myReference;
//     
    // // Setting URL and passing in myAPIKey and myVerse variables
    // var url = "https://" + myAPIKey + "bibles.org/v2/verses/eng-ESV:" + myVerse + ".js";
    // // var url = "https://" + myAPIKey + "bibles.org/v2/passages.js?q[]=" + myVerse + "&version=eng-KJVA";
//     
    // var request = Ti.Network.createHTTPClient({
        // // Checking for onload
        // onload: function(e) {
            // // Log to Info Console
            // // Ti.API.info(this.responseText);
            // // Ti.API.info(request.status);
//             
            // // Setting json variable to hold responseText and parsing
            // json = this.responseText;
            // jsonObject = JSON.parse(json);
// 
            // // alert(jsonObject.response.search.result.passages[0].text);
            // myVerseText = jsonObject.response.verses[0].text;
            // myReference = jsonObject.response.verses[0].reference;
            // //Commented to remove this from the Prayer Screen Uncomment when adding back
            // // $.webViewVerse.html = myReference + " " + myVerseText;
// 
        // },
        // //  Checking for error and alerting with status number
        // onerror: function(e) {
            // Ti.API.info(e.error);
            // // alert(request.status);
        // },
        // // Setting timeout to 5 seconds
        // timeout:5000
    // });
//      
    // // Opening httpClient and executing GET and passing URL
    // request.open("GET", url);
    // request.send();
// }


$.btnBack.addEventListener('click', function(e){
   $.win.close(); 
});

$.winHeader.addEventListener( 'load', function(e) {
    // // for loop to go through arrMyVerses, need to come up with a better function as this is going through unecssary iterations
    // // for ( var i = 0; i < arrMyVerses.length; i++ ) {
        // $.webViewVerse.text = myVerseText;
    // // };

});

$.btnSubmit.addEventListener('click', function(e) {
    var emailDialog = Ti.UI.createEmailDialog();
    var prayerSubject = $.txtPrayerSubject.getValue();
    var prayerRequest = $.txtaPrayerRequest.getValue();
    
    emailDialog.subject = "Prayer Request: " + prayerSubject;
    emailDialog.toRecipients = ['jarret@thegeneration.me'];
    emailDialog.messageBody = prayerRequest;
    // var f = Ti.Filesystem.getFile('cricket.wav');
    // emailDialog.addAttachment(f);
    emailDialog.open();
});
