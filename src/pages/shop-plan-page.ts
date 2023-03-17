
export class ShopPlanPageObjects {
    shopButton(planName: string) { return $("//span[contains(text(),'" + planName + "')]") }
    getPlanCheckBox(planName: string) {
        return $("//span[contains(text(),'" + planName + "')]//ancestor::tr[1]//a[@class='th-sapcb-a']");
    }
    clickAddToCartButton(atIndex: number) {
        return $("table[id*='ConfCellTable_TableHeader_fixedLeftTable'] tbody tr:nth-child(" + atIndex + ") td[class*='first']")
    }

    get planTable() { return $("table[id*='ConfCellTable_TableHeader']") }
    get addToCartTable() { return $("table[id*='ConfCellTable_TableHeader_fixedLeftTable']") }
}