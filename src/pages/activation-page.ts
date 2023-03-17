import { logStep } from "../utils/reporter";
import { ChainablePromiseElement } from 'webdriverio'

export default class ActivationPage {


    get iMEICode() { return $("//label[contains(text(),'Zip Code')]//ancestor::td[@class='ch-grid-cell']//following-sibling::td//input") };
    get getOkButton() { return $("table.th-gr-tab a span b") }

    getTextBox(textBoxLabel:string){      
        return $("//label[contains(text(),'"+textBoxLabel+"')]//ancestor::td[@class='ch-grid-cell']//following-sibling::td//input");
    }

    getRadiotextBox(textBoxLabel:string){      
        return $("//label//span[contains(text(),'"+textBoxLabel+"')]//ancestor::td[@class='ch-grid-cell']//following-sibling::td//input");
    }
}

////label//span[contains(text(),'"+textBoxLabel+"')]//ancestor::td[@class='ch-grid-cell']//following-sibling::td//input