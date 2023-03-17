import { WebActions } from "../utils/WebActions";
import { ShopPlanPageObjects } from "../pages/shop-plan-page";
import { TableUtils } from "../utils/tableUtils";
import { BrowserUtils } from "../utils/browserUtils";
import { IfrmaeObjects } from "../pages/iframes-page";

const iFrames = new IfrmaeObjects();
const browserUtil = new BrowserUtils();
const shopPlan = new ShopPlanPageObjects();

export class ShopPlanStepsCode extends WebActions {

    async selectPlan(planName: string) {
        await browserUtil.switchFrameByLocator(iFrames.iFrame1);
        console.log("Switch 1")
        await browserUtil.switchFrameByLocator(iFrames.iFrame2);
        console.log("Switch 2")
        await browserUtil.switchFrameByLocator(iFrames.iFrame1);
        console.log("Switch 3")
        await browserUtil.switchFrameByLocator(iFrames.iFrame3);
        console.log("Switch 4")
        await browserUtil.switchFrameByLocator(iFrames.Frame1);
        console.log("Switch 5")
        await this.clickElement(shopPlan.getPlanCheckBox(planName));
    }

    async clickAddToCartButton(planName: string) {
        const tableUtils = new TableUtils(shopPlan.planTable);
        let textInRow: number = await tableUtils.getRowNumberContainingText(planName, 3);
        await this.clickElement(shopPlan.clickAddToCartButton(textInRow+1))
        await browser.pause(4000);
    }
}