import { WebActions } from "../utils/WebActions";
import { HomePageObjects } from "../pages/home-page-obj";
import { BrowserUtils } from "../utils/browserUtils";
import { IfrmaeObjects } from "../pages/iframes-page";

const homePage = new HomePageObjects();
const iFrames = new IfrmaeObjects();
const webAction = new WebActions();
const browserUtil = new BrowserUtils();
export class HomeStepsCode extends WebActions {

    async clickOnHomePageLeftSideMenu(optionToClick: string) {
        await browserUtil.switchFrameByLocator(iFrames.iFrame1);
        await browserUtil.switchFrameByLocator(iFrames.iFrame2);
        await browserUtil.switchFrameByLocator(iFrames.iFrame1);
        await browserUtil.switchFrameByLocator(iFrames.iFrame3);
        await browserUtil.switchFrameByLocator(iFrames.Frame1);
        await webAction.clickElementWithText(optionToClick,await homePage.leftSideMenuLink);
    }

}