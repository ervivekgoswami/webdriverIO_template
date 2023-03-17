import { Given, Then, When} from '@wdio/cucumber-framework';
import { CustomerInfoStepsCode } from '../steps-code/customer-info-code';
import { ShopDeviceStepsCode } from '../steps-code/shop-device-code';


const customerInfo = new CustomerInfoStepsCode();
const shopDeviceSteps = new ShopDeviceStepsCode();

When("I enter customer information details", async (dataTable) => {  
    const data = dataTable.raw();

});

When("I enter customer first name as {string}", async (fName:string) => {  
    await customerInfo.enterFirstName(fName)
});

When("I enter customer last name as {string}", async (lName:string) => {  
    await customerInfo.enterLastName(lName)
});

When("I enter customer PIN as {string}", async (pinNo:string) => {  
    await customerInfo.enterPinNo(pinNo)
});

Given("I validate the address details entered", async () => {
    await shopDeviceSteps.clickShopDeviceButton('VALIDATE');
    await browser.pause(8000);
    await customerInfo.acceptValidAddress();
});