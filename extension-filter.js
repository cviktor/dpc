var fs = require('fs');
var path = require('path');

/**
 * @module Extension szűrő modul.
 * @param {string} directory Elérési út
 * @param {string} extension Kiterjesztés
 * @param {consoleCallback} callback Ez kapja meg az eredményt
 */
module.exports = function (directory, extension, callback) {

    fs.readdir(directory, function (err, files) {
        if (err) {
            callback(err);
            return;
        }

        var results = [];
        for (var i = 0; i < files.length; i++) {
            var element = files[i];
            var ext = path.extname(element);
            if (ext === "." + extension) {
                results.push(element);
            }
        }

        callback(null, results);
    });
}

/**
 * Ez a callback dolgozza fel a leszűrt file-neveket.
 *
 * @callback consoleCallback
 * @param {object} err A hiba object
 * @param {string[]} files A leszűrt fájlnevek
 */