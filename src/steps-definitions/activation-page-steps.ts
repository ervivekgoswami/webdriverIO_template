import { Given, Then, When} from '@wdio/cucumber-framework';
import { ActivationStepsCode } from '../steps-code/activation-page-code';
import { ShopDeviceStepsCode } from '../steps-code/shop-device-code';

const activationSteps = new ActivationStepsCode();
const shopDeviceSteps = new ShopDeviceStepsCode();
When("I enter area zipcode {string}", async (zipCode: string) => {  
    await activationSteps.enterZipCode(zipCode);
    await browser.pause(2000);
});

When("I enter IMEI code {string}", async (imeiCode:string) => {
    await activationSteps.enterIMEICode(imeiCode);
    await browser.pause(3000);
});

Given("I validate the details entered", async () => {
    await shopDeviceSteps.clickShopDeviceButton('VALIDATE');
    await browser.pause(8000);
    await activationSteps.clickOkValidationPopup();
});

Then("I enter SIM number {string}", async (simNo:string) => {
    await activationSteps.enterSimNo(simNo);
    await browser.pause(3000);
});