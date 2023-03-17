import { Given, Then, When } from '@wdio/cucumber-framework';
import { ReviewCartStepsCode } from '../steps-code/review-cart-code';
import { ShopDeviceStepsCode } from '../steps-code/shop-device-code';

const reviewCart = new ReviewCartStepsCode();

When("I click review cart button {string}", async (cartButtonText: string) => {
    await reviewCart.clickCartButtonWithText(cartButtonText);
    await browser.pause(2000);
});