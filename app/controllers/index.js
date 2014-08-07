// 
// function authFB(e) {
    // var fb = require('facebook');
    // fb.appid = "1460671640868207";
    // fb.permissions = "public_profile";
    // fb.authorize();
// }
// 
// var url = "https://2oF3Jz4lohQhqB8aPdkp9jdAN3hGfJHiLoA5cvxo:bibles.org/v2/versions/eng-GNTD.xml";
// var request = Ti.Network.createHTTPClient({
    // onload: function(e) {
        // Ti.API.info(this.responseText);
        // var reply = this.responseText;
        // Ti.API.info(reply.status);
        // alert(reply.status);
       // },
    // onerror: function(e) {
        // Ti.API.info(e.error);
        // alert('error');
    // },
    // timeout:5000
// });
// 
// request.open("GET", url);
// request.send();


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
    
// $.imageForClayton.addEventListener('click', function(e) {
       // Titanium.Platform.openURL('https://tagboard.com/forclaytonnc/181676');
    // });
    
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
