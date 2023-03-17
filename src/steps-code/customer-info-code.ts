import { WebActions } from "../utils/WebActions";
import { HomePageObjects } from "../pages/home-page-obj";
import { BrowserUtils } from "../utils/browserUtils";
import ActivationPage from "../pages/activation-page";
import { IfrmaeObjects } from "../pages/iframes-page";
import { ShopDeviceStepsCode } from "./shop-device-code";

import CustomerInfoPage from "../pages/customer-info-page";

const homePage = new HomePageObjects();
const browserUtil = new BrowserUtils();
const activationPage = new ActivationPage();
const iFrames = new IfrmaeObjects();
const shopDeviceStepsCode = new ShopDeviceStepsCode();
const customerInfoPage = new CustomerInfoPage();
export class CustomerInfoStepsCode extends WebActions {

    async enterFirstName(firstName: string) {
        await this.setData(firstName, customerInfoPage.getCustomerInfoTextBox('First Name'));
    }

    async enterLastName(lastName: string) {
        await this.setData(lastName, customerInfoPage.getCustomerInfoTextBox('Last Name'));
    }

    async enterProfileEmail(email: string) {
        await this.setData(email, customerInfoPage.getCustomerInfoTextBox('Profile Email'));
    }

    async enterPhoneNo(contactNo: string) {
        await this.setData(contactNo, customerInfoPage.getCustomerInfoTextBox('Profile Email'));
    }

    async enterSSN(ssnNo: string) {
        await this.setData(ssnNo, customerInfoPage.getCustomerInfoTextBox('SSN'));
    }

    async enterPinNo(ssnNo: string) {
        await this.setData(ssnNo, customerInfoPage.getCustomerInfoTextBox('PIN:'));
    }

    async acceptValidAddress(){
        await browser.pause(3000);
        const browsersOpened = await browserUtil.getOpenedBrowsers();
        if(browsersOpened.length>1){
            await browserUtil.switchToWindow(2);
            await this.clickElement(customerInfoPage.validAddressRadio);
            await this.clickElement(customerInfoPage.acceptButton);
            console.log("Switching Back to browser 1")
            await browserUtil.switchToWindow(1);
            await browser.pause(3000);
        }else{
            await Promise.reject("Validation Unscussessfull")
        }
    }

}