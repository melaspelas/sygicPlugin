var exec = require('cordova/exec');

function SygicPlugin() {
    console.log('CoolPlugin.js: is created');
}

SygicPlugin.prototype.showToast = function(aString){
        console.log('SygicPlugin.js: showToast');
        exec(
        //success callback
            function(result){
                alert('OK' + reply);
            },
        //Error callback
            function(result){
                alert('Error' + reply);
            },
            'SygicPlugin', // Service Java class
            'showToast', // Java Method
            [aString] // Parameters
            );
};

SygicPlugin.prototype.translateCoords = function(long, lat, success, error) {
    console.log('SygicPlugin.js: Translate coords to address');
    exec(
    success,
    error,
    'SygicPlugin',
    'translateCoords',
    [long, lat]
    );
};

var sygicPlugin = new SygicPlugin();
module.exports = sygicPlugin;