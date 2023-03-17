import { Given, Then, When } from '@wdio/cucumber-framework';
import login from '../steps-code/login-page-code';


Given(/^User login as TEST_TEAM into sap care portal$/, async () => {
  await login.openApplication()
  await browser.pause(2000);
  await login.enterUserName()
  await browser.pause(2000);
  await login.clickOnSingIn()
  await browser.pause(1000);
  await login.killExistingSession(false);
  await login.sessionContinueButton()
  await browser.pause(15000);
});

