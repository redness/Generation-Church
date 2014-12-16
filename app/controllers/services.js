var args = arguments[0] || {};
Ti.Geolocation.purpose = 'Determine Current Location';

function report(evt) {
    Ti.API.info("Annotation " + evt.title + " clicked, id: " + evt.annotation.myid);
};

$.lblBack.addEventListener('click', function(e){
   $.win.close(); 
});

$.btnDirections.addEventListener('click', function(e) {
   Ti.Platform.openURL("http://maps.apple.com/?daddr=34%20Oleander%20drive%20Clayton%20NC"); 
});

$.win.open();
