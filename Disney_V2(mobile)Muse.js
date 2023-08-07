Java.perform(function(){
    Java.use('ghost.j').Call.overload('android.app.Activity').implementation = function(Activity){
        return null;
    }
});
