# typeform
Typeform app on Pluga

### Install with nvm
```sh
nvm install v8.10
nvm use 8.10
npm install
```

### Test with mocha
```sh
npm test
```

### Test with mocha debug in command line
How to:
  - Write "debugger;" in test file to create a new breakpoint;
  - Press "c" to start test;
  - Type "repl" when break to enter current scope;
  - Now do debug in command line :);
  - Press "Ctrl + C" to exit repl;
  - Press "c" to start ou continue;
  - Type ".exit" to finish test;
```sh
npm run debug
```

### Axios debug request
```sh
AXIOS_DEBUG=1 npm test
AXIOS_DEBUG=1 npm run debug
