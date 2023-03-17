import { logStep } from "./reporter";
import { ChainablePromiseElement } from 'webdriverio'
import { HomePageObjects } from "../pages/home-page-obj";
const homePage = new HomePageObjects();
export class BrowserUtils {

    async switchFrameByLocator(frame: ChainablePromiseElement<WebdriverIO.Element>) {
        const isFrameExists = (await (expect(await frame).toExist()));
        await browser.switchToFrame(await frame);
        logStep(`Switched Frame ${JSON.stringify(await frame.selector)}`);
    }

    async excuteJSQuery(query: string) {
        await browser.execute(query);
    }

    async getOpenedBrowsers() {
        const handles = await browser.getWindowHandles();
        return handles;
    }

    async switchToWindow(windowNumber: number) {
        const switchTo = windowNumber - 1;
        const handles = await browser.getWindowHandles();
        console.log("No of browsers: ", handles.length)
        for (let i: number = 0; i <= handles.length - 1; i++) {
            if (switchTo == i) {
                await browser.switchToWindow(handles[i])
                console.log("Switched to Browser with Title: ", await browser.getTitle())
                break;
            }
        }
    }
}