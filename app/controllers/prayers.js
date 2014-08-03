var args = arguments[0] || {};

$.btnBack.addEventListener('click', function(e){
   $.win.close(); 
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
