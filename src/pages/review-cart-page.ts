
import { UserData } from "../user-data/users";
import BasePage from "./base-page";


export class ReviewCartPage{
    get cartButtons() { return $$("div.th-tbbox a[class*='th-bt-text'] span b") }    
}
export default new ReviewCartPage()


