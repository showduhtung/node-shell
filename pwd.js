const cwd = `Current directory: ${process.cwd()}`;

//The stdin 'data' event fires after a user types in a line
const pwdFunction = function() {
  process.stdout.write(cwd);
  process.stdout.write('\nprompt > ');
};

module.exports = {
  pwdFunction: pwdFunction(),
};
