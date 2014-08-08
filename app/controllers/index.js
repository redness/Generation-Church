

// Testing using a require for a controller
// var getVerse = require('getverse');
// var myVerse = new getVerse();

$.imageBanner.addEventListener('click', function(e) {
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
    
$.lblGencal.addEventListener('click', function(e) {
    var controller = Alloy.createController("gencal");
    controller.getView().open();
    });
    
$.imageTagboard.addEventListener('click', function(e) {
    var controller = Alloy.createController("tagboard");
    controller.getView().open();
    });

$.lblAbout.addEventListener('click', function(e) {
    var controller = Alloy.createController("about");
    controller.getView().open();
    });
    
$.lblPrayers.addEventListener('click', function(e) {
    var controller = Alloy.createController("prayers");
    controller.getView().open(); 
});

$.index.open();


