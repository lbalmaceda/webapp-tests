exports.config = {
  "tests": "./*_test.js",
  "timeout": 10000,
  "output": "out",
  "multiple": {
    "basic": {
      "browsers": ["chrome", "firefox"]
    }
  },
  "helpers": {
    "Puppeteer": {  
      "url": process.env.WEBAPP_URL || "http://localhost:3000",
      "chrome":{
        "args": ["--no-sandbox", "--disable-setuid-sandbox"]
      }
    }
  },
  "include": {},
  "bootstrap": false,
  "mocha": {},
  "name": "webapp-tests"
}