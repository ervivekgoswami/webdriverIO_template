import BasePage from "../pages/base-page";
import loginPage from "../pages/login-page-obj";
import { UserData } from "../user-data/users";
import { WebActions } from "../utils/WebActions";
const sapCareUrl: string = "https://ql2a01-esaw2a.lab.uprising.t-mobile.com:8081/sap(bD1lbiZjPTIwMCZkPW1pbg==)/bc/bsp/sap/crm_ui_start/default.htm?saprole=ZTMUS_SUPCAR&sap-client=200&sap-language=EN";
const basePage = new BasePage();
class LoginStepsCode extends WebActions {

    async openApplication() {
        await basePage.open(sapCareUrl);
        // await super.open("http://automationpractice.com/index.php")
    }

    async clickOnSingIn() {
        await this.clickElement(loginPage.signInBtn);
    }

    async enterUserName() {
        await this.setData(UserData.USERS.TEST_TEAM.userName, loginPage.userName)
        await this.setData(UserData.USERS.TEST_TEAM.password, loginPage.password)
    }

    async killExistingSession(kill: boolean) {
        if (kill) {
            console.info("Existing Sessions Killed!!");
        } else
            console.info("Existing Sessions Not Killed!!");
        await this.clickElement(loginPage.killSessionCheckBox);


    }

    async sessionContinueButton() {
        await this.clickElement(loginPage.sessionContinue);
    }

}
export default new LoginStepsCode()