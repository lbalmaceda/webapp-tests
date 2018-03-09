const puppeteer = require('puppeteer')

const WEBAPP_URL = process.env.WEBAPP_URL || "http://localhost:3000";
const TEST_USERNAME = process.env.TEST_USERNAME || "asdasd";
const TEST_EMAIL = process.env.TEST_EMAIL || "asd@asd.asd";
const TEST_PASSWORD = process.env.TEST_PASSWORD || "asdasd";

async function run() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  //Open the QuickStart Home page
  await page.goto(WEBAPP_URL);

  try {
    //Check if already logged in
    const element = await page.waitForSelector("#qsLogoutBtn", {visible:true, timeout:3000});
    await element.click();
    console.log("Log out button found. Clicking it." + err);
  } catch(err) {
    //Ignored
  }
  
  //Prepare to log in
  const loginButton = await page.waitForSelector("#qsLoginBtn", {visible:true})
  await loginButton.click();

  //Wait for Lock and fill the form
  await page.waitForSelector("input[name='password']", {visible:true, timeout:10000});
  try {
    await page.type("input[name='username']", TEST_USERNAME);
  } catch(err) {
    //Connection is configured as "email onlky"
    await page.type("input[name='email']", TEST_EMAIL);
  }
  await page.type("input[name='password']", "asdasd");
  await page.click(".auth0-lock-widget-container .auth0-lock-submit");

  //Wait for the Quickstart Home Page
  await page.waitForSelector("#qsLogoutBtn", {visible:true, timeout:5000});
  await page.screenshot({path:"out/sample.jpeg", type: "png", quality:50})

  await browser.close();
}

run().catch((err)=>{
  console.log(err);
  process.exit();
});