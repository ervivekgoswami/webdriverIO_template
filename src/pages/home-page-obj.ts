export class HomePageObjects {

    get single() { return $("[id='th-side-menu-cont'] li a") }
    get leftSideMenuLink() { return browser.$$("[id='th-side-menu-cont'] li a") }
    get iFrame1() { return $("div[id='crmUIHostArea'] iframe") };
    get iFrame2() { return $("iFrame[title*='Manual Session']") };
    get iFrame3() { return $("[id='FRAME_APPLICATION']") };
    get Frame1() { return $("[id='contentFrameset'] frame[id='WorkAreaFrame1']") };
    get popupFrame1() { return $("iframe[id='WorkAreaFrame1popup']") };
    get inputMe() { return $("input[title='Choose the value of criterion Assigned To / Employee ID']") };
    get Frame() { return $("div[id='APP_FRAME_ANCHOR'] iframe") };


    //id='contentFrameset'

    //input[title='Choose the value of criterion Assigned To / Employee ID']

    //#C7_W29_V30_ZSHOP
    //document.querySelector("#C7_W29_V30_ZSHOP")





}