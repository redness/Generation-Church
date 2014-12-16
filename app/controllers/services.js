var args = arguments[0] || {};
Ti.Geolocation.purpose = 'Determine Current Location';

function report(evt) {
    Ti.API.info("Annotation " + evt.title + " clicked, id: " + evt.annotation.myid);
};

$.btnBack.addEventListener('click', function(e){
   $.win.close(); 
});

$.win.open();
