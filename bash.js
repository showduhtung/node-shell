process.stdout.write('prompt > ');

process.stdin.on('data', x => {
  let item = x.toString().trim();
  if (item === 'pwd') {
    const pwd = require('./pwd.js');
    pwd.pwdFunction;
  } else if ('./ls.js') {
    const ls = require('./ls.js');
    ls.lsFunction;
  } else {
    process.stdout.write('You typed: ' + x.toString().trim());
    process.stdout.write('\nprompt > ');
  }
});
