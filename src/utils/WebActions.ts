import * as EC from 'wdio-wait-for'
import { logStep } from "../utils/reporter";
import { ChainablePromiseElement } from 'webdriverio'
export class WebActions {

    /**
    * @param elementLocator - locator of the element from web
    * @returns webElement
    */
    async getWebElement(elementLocator: string) {
        return await browser.$(elementLocator);
    }

    /**
    * @param elementLocator - locator of the element from web
    * @returns array of webElement
    */
    async getAllWebElement(elementLocator: string) {
        return await browser.$$(elementLocator);
    }

    /**
    * @param elementLocator - locator of the element from web
    * @returns webElement where text matches
    */
    async getWebElementWithText(elementText: string, elements: Array<WebdriverIO.Element>) {
        let actualText: string = null;
        let fetchedElement: WebdriverIO.Element = null;
        let noOfElements: number = elements.length;
        console.log("No OF elements: ", noOfElements)
        if (noOfElements > 1) {
            for (let i: number = 0; i <= noOfElements - 1; i++) {
                actualText = await elements[i].getText();
                if (actualText.trim().toLowerCase() == elementText.toLowerCase()) {
                    fetchedElement = elements[i];
                    break;
                }
            }
        } else {
            actualText = await elements[0].getText();
            console.log("Only One Element in result", actualText)
            if (actualText.trim().toLowerCase() == elementText.toLowerCase()) {
                fetchedElement = elements[0];
            }
        }
        return fetchedElement;
    }



    /**
    * @param elementLocator - locator of the element to click
    * @returns click on a webelement
    */
    async clickElementWithText(elementTextToClick: string, elements: WebdriverIO.Element[]) {
        const elem = await this.getWebElementWithText(elementTextToClick, elements);
        await elem.click();
        logStep(`Clicked Element ${JSON.stringify(elem.selector)} with text: ` + elementTextToClick)
    }

    /**
    * @param elementLocator - locator of the element to click
    * @returns click on a webelement
    */
    protected async clickElement(element: ChainablePromiseElement<WebdriverIO.Element>) {
        await element.click();
        logStep(`Clicked on ${JSON.stringify(await element.selector)}`)
    }

    /**
    * @param elementLocator - locator of the element to click
    * @returns click on a webelement
    */
    protected async clickElementByJScript(element: ChainablePromiseElement<WebdriverIO.Element>) {
        await browser.execute('arguments[0].click();', element)
        logStep(`Clicked By JScript on ${JSON.stringify(await element.selector)}`)
    }

    protected async setData(value: string, element: ChainablePromiseElement<WebdriverIO.Element>) {
        await element.setValue(value);
        logStep(`Entered '${value}' in ${JSON.stringify(await element.selector)}`)
    }

    protected async fetchText(element: ChainablePromiseElement<WebdriverIO.Element>) {
        const text = await element.getText();
        return text.trim();
    }

    protected async isElementDisplayed(element: ChainablePromiseElement<WebdriverIO.Element>) {
        logStep(`Element ${JSON.stringify(await element.selector)}is displayed: ${await element.isDisplayed()}`)
        return element.isDisplayed();
    }

    protected isElementExists(element: ChainablePromiseElement<WebdriverIO.Element>) {
        return element.isExisting();
    }

    async selectByAttribute(attribute: string, value: string, element: ChainablePromiseElement<WebdriverIO.Element>) {
        await element.selectByAttribute(attribute, value);
        logStep(`Selected value '${value}' from ${JSON.stringify(await element.selector)} dropdown`)
    }

    async selectByText(text: string, element: ChainablePromiseElement<WebdriverIO.Element>) {
        await element.selectByVisibleText(text);
        logStep(`Selected text '${text}' from ${JSON.stringify(await element.selector)} dropdown`)
    }

}