//Output
process.stdout.write('prompt > ');
require('./pwd.js');

//The stdin 'data' event fires after a user types in a line
process.stdin.on('data', x => {
  x.toString().trim();
  if (x === 'pwd') {
    module.exports.pwdFunction;
  } else {
    process.stdout.write('You typed: ' + x.toString().trim());
    process.stdout.write('\nprompt > ');
  }
});
