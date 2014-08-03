// 
// function authFB(e) {
    // var fb = require('facebook');
    // fb.appid = "1460671640868207";
    // fb.permissions = "public_profile";
    // fb.authorize();
// }
$.imageBanner.addEventListener('click', function(e) {
       Titanium.Platform.openURL('http://www.thegeneration.me');
    });
    
$.imageFacebook.addEventListener('click', function(e) {
       Titanium.Platform.openURL('fb://profile/1423745381224537');
    });
    
$.imageTwitter.addEventListener('click', function(e) {
       Titanium.Platform.openURL('https://twitter.com/TheGCClayton');
    });
    
$.imageInstagram.addEventListener('click', function(e) {
       Titanium.Platform.openURL('http://instagram.com/generationchurch');
    });
    
// $.imageForClayton.addEventListener('click', function(e) {
       // Titanium.Platform.openURL('https://tagboard.com/forclaytonnc/181676');
    // });
    
$.lblGencal.addEventListener('click', function(e) {
    var controller = Alloy.createController("gencal");
    controller.getView().open();
    });
    
$.imageForClayton.addEventListener('click', function(e) {
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
