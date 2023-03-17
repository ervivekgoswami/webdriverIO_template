import { WebActions } from "../utils/WebActions";
import { HomePageObjects } from "../pages/home-page-obj";
import { ShopDevicePageObjects } from "../pages/shop-devices-page";

const shopDevice = new ShopDevicePageObjects();
const webAction = new WebActions();
export class ShopDeviceStepsCode {

    async clickShopDeviceButton(buttonText:string){
        await webAction.clickElementWithText(buttonText,await shopDevice.shopButton);
    }
}