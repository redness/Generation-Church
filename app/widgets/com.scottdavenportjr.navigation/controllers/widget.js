$.init = function(win) {
    $.win = win;
};

$.lblBack.addEventListener('click', function(e){
   $.win.close(); 
});