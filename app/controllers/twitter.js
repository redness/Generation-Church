var args = arguments[0] || {};
var cloud = require('ti.cloud');

$.authorizeTwitter.addEventListener('click', function(e) {
    cloud.SocialIntegrations.externalAccountLink({
        type: 'twitter',
        token: Ti.Facebook.accessToken
    }, function (e) {
        if (e.success) {
            var user = e.users[0];
            alert('Success:\n' +
                'id: ' + user.id + '\n' +
                'first name: ' + user.first_name + '\n' +
                'last name: ' + user.last_name);
        } else {
            alert('Error:\n' +
                ((e.error && e.message) || JSON.stringify(e)));
        }
    });
});
