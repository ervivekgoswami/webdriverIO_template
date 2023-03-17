import { Given, Then, When } from '@wdio/cucumber-framework';
import { ShopDeviceStepsCode } from '../steps-code/shop-device-code';

const shopDeviceSteps = new ShopDeviceStepsCode();

When("I click on sap care button {string}", async (buttonText: string) => {
    await shopDeviceSteps.clickShopDeviceButton(buttonText);
    await browser.pause(2000);
});