const fs = require('fs');

//The stdin 'data' event fires after a user types in a line
function lsFunction() {
  fs.readdir('./', 'utf8', (err, files) => {
    if (err) {
      throw err;
    } else {
      process.stdout.write(files.join('\n'));
      process.stdout.write('\nprompt > ');
    }
  });
}

module.exports = {
  ls: lsFunction(),
};
