import { WebActions } from "../utils/WebActions";
import { ReviewCartPage } from "../pages/review-cart-page";
const reviewCartPage = new ReviewCartPage();
export class ReviewCartStepsCode extends WebActions {

    async clickCartButtonWithText(buttonText: string) {
        await this.clickElementWithText(buttonText, await reviewCartPage.cartButtons);
    }

}