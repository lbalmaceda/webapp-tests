Feature('SPA login');

Scenario('Log in using Lock', (I) => {
    I.amOnPage('/');
    I.waitForVisible('#qsLoginBtn', 3);
    I.click('#qsLoginBtn');
    I.waitForVisible('input[name="password"]', 5);
    I.fillField('input[name="username"]', 'asdasd');
    I.fillField('input[name="password"]', 'asdasd');
    I.click('.auth0-lock-widget-container .auth0-lock-submit');
    I.waitForVisible('#qsLogoutBtn', 3);
});
