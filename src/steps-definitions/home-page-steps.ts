import { Given, Then, When } from '@wdio/cucumber-framework';
import { HomeStepsCode } from '../steps-code/home-page-code';
import login from '../steps-code/login-page-code';
import { BrowserUtils } from '../../src/utils/browserUtils';

const homeSteps = new HomeStepsCode();

When("I select option {string} from left side menu", async (menuOption: string) => {
    await browser.pause(4000);  
    await homeSteps.clickOnHomePageLeftSideMenu(menuOption);
    await browser.pause(4000);
});

When("", async () => {

});

When("", async () => {

});

When("", async () => {

});