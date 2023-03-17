import { WebActions } from "../utils/WebActions";
import { HomePageObjects } from "../pages/home-page-obj";
import { BrowserUtils } from "../utils/browserUtils";
import ActivationPage from "../pages/activation-page";
import { IfrmaeObjects } from "../pages/iframes-page";
import { ShopDeviceStepsCode } from "./shop-device-code";
import { ShopDevicePageObjects } from "../pages/shop-devices-page";

const homePage = new HomePageObjects();
const browserUtil = new BrowserUtils();
const activationPage = new ActivationPage();
const iFrames = new IfrmaeObjects();
const shopDeviceStepsCode = new ShopDeviceStepsCode();
const shopDevice = new ShopDevicePageObjects();
export class ActivationStepsCode extends WebActions {

    async enterZipCode(zipCode: string) {
        await this.setData(zipCode, activationPage.getTextBox('Zip Code'));
    }

    async enterSimNo(simNo: string) {
        await this.setData(simNo, activationPage.getTextBox('SIM'));
    }

    async enterIMEICode(imeiCode: string) {
        await this.setData(imeiCode, activationPage.getRadiotextBox('IMEI'));
    }

    async clickOkValidationPopup(){
        await browser.pause(3000);
        const browsersOpened = await browserUtil.getOpenedBrowsers();
        if(browsersOpened.length>1){
            await browserUtil.switchToWindow(2);
            await browser.closeWindow();
            console.log("Switching Back to browser 1")
            await browserUtil.switchToWindow(1);
            await browser.pause(3000);
        }else{
            await Promise.reject("Validation Unscussessfull")
        }
        // await browserUtil.switchFrameByLocator(iFrames.popupFrame1);
        // // await this.clickElement(activationPage.getOkButton);
        // await shopDeviceStepsCode.clickShopDeviceButton('Ok');
    }
}