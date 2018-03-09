[![CircleCI](https://circleci.com/gh/lbalmaceda/chromeless-sample/tree/master.svg?style=svg)](https://circleci.com/gh/lbalmaceda/chromeless-sample/tree/master)

# Web Automation On CircleCI

This project attempts to make a proof of concept of how technologies like [Chromeless](https://github.com/graphcool/chromeless) or [Puppeteer](https://github.com/GoogleChrome/puppeteer) can run in a Dockerized environment like [CircleCI 2.0](https://circleci.com/docs/2.0/).


### How to Run Locally
A simple Puppeteer script is located in the `test.js` file. First run `npm i` to install the Puppeteer package and the supported chromium binaries. Then run the script.

```sh
npm i
node test.js
```

The browser will open and an image file with the screenshot should be created under the `out` folder of the project root.

The default URL were a web app is expected to be running is `http://localhost:3000`


### How to Run on CircleCI

