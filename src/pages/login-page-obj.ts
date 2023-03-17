import { UserData } from "../user-data/users";
import BasePage from "./base-page";


class LoginPage extends BasePage {


    get signInBtn() { return $("div[id='LOGON_BUTTON']") }
    get AuthHeader() { return $("//h1") }
    get userName() { return $("input[id='sap-user']") }
    get password() { return $("input[id='sap-password']") }
    get killSessionCheckBox() {return $("[id='delete-session-cb-txt']")}
    get sessionContinue() { return $("[id='SESSION_QUERY_CONTINUE_BUTTON']") }

    
}
export default new LoginPage()