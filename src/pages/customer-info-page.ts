import { logStep } from "../utils/reporter";
import { ChainablePromiseElement } from 'webdriverio'

export default class CustomerInfoPage {


    get validAddressRadio() { return $("td input[type='radio'] ~label") };
    get acceptButton() { return $("li a[id*='CONFIRM'] span b") }

    getCustomerInfoTextBox(textBoxLabel:string){      
        return $("//label[contains(text(),'"+textBoxLabel+"')]//ancestor::td[@class='ch-grid-cell']//following-sibling::td//input[@value]");
    }

    getRadiotextBox(textBoxLabel:string){      
        return $("//label//span[contains(text(),'"+textBoxLabel+"')]//ancestor::td[@class='ch-grid-cell']//following-sibling::td//input");
    }
}

//label[contains(text(),'First Name:')]//ancestor::td[@class='ch-grid-cell']//following-sibling::td//input[@value]