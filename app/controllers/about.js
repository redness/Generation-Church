var args = arguments[0] || {};

$.btnBack.addEventListener('click', function(e){
   $.win.close(); 
});

var vision = "To be world changing followers of Jesus. That\'s it, that\'s the vision statement for our church. We do not want any of this to be about us or even for us. Ephesians 3:20 says, \"Now all glory to God, who is able, through His mighty power at work within us, to accomplish infinitely more than we might ask or think.\"  If we are living on mission for Jesus, then the result will be change for your life, our community and world.";
var mission = "The word generation means the act or process of bringing into being: production or reproduction. We want to be a church that reaches out to the community in every way possible. We want to draw people in to hear the story of Jesus. We want to raise up followers of Jesus and send them out to help other people find and follow Jesus.";
$.lblVision.text = vision;
$.lblMission.text = mission;

