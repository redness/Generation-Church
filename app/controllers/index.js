var GA = require("analytics.google");
var tracker = GA.getTracker("UA-55490119-1");


// Testing using a require for a controller
// var getVerse = require('getverse');
// var myVerse = new getVerse();

$.imageBanner.addEventListener('click', function(e) {
    tracker.trackEvent({
       category: "my event category",
       action: "clicked",
       label: "how many clicks?",
       value: 3 
});
       Titanium.Platform.openURL('http://www.thegeneration.me');
    });
    
$.imageFacebook.addEventListener('click', function(e) {
       Titanium.Platform.openURL('fb://profile/1423745381224537');
    });
    
$.imageTwitter.addEventListener('click', function(e) {
        // var controller = Alloy.createController("twitter");
        // controller.getView().open();
        Titanium.Platform.openURL('https://twitter.com/TheGCClayton');
    });
    
$.imageInstagram.addEventListener('click', function(e) {
       Titanium.Platform.openURL('http://instagram.com/generationchurch');
    });

$.lblMessages.addEventListener('click', function(e) {
    var controller = Alloy.createController("messages");
    controller.getView().open();
    });
    
$.lblPrayers.addEventListener('click', function(e) {
    var controller = Alloy.createController("prayers");
    controller.getView().open(); 
});
    
$.lblAbout.addEventListener('click', function(e) {
    var controller = Alloy.createController("dosomethingnow");
    controller.getView().open();
    });

$.lblGive.addEventListener('click', function(e) {
   var controller = Alloy.createController("give") ;
   controller.getView().open();
});

$.index.open();


