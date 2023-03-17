import { Given, Then, When } from '@wdio/cucumber-framework';
import { ShopPlanStepsCode } from '../steps-code/shop-plan-code';

const shopPlan = new ShopPlanStepsCode();

When("I select the sap care plan {string}", async (plan: string) => {
    await shopPlan.selectPlan(plan)
    await browser.pause(2000);
    await shopPlan.clickAddToCartButton(plan);
});