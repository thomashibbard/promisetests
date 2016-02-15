var fs = require('fs');

var dest = './file.txt';

var rw = {
  write: function(data){
    return new Promise(function (resolve, reject) {
      data = data.repeat(5);

      fs.writeFile(function (err, result) {
        if (err) return reject(err.message);

        return resolve(result);
      });
    });
  },
  read: function(data){
    return new Promise(function (resolve, reject) {
      data = data.repeat(5);

      fs.readFile(dest, 'utf8', function(err, contents) {
        if (err) return reject(err.message);

        return resolve(contents.toString());
      });
    });
  }
};

module.exports = exports = rw;