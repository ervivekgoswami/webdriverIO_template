import * as EC from 'wdio-wait-for'
import { logStep } from "../utils/reporter";
import { ChainablePromiseElement } from 'webdriverio'
import { WebActions } from './WebActions';

export class TableUtils extends WebActions {

    nativeTableLocator: ChainablePromiseElement<WebdriverIO.Element>;
    constructor(tableLocator: ChainablePromiseElement<WebdriverIO.Element>) {
        super();
        this.nativeTableLocator = tableLocator;
    }

    /**
     * @returns total number of rows in table
     */
    async getRowCount() {
        const table = await this.nativeTableLocator;
        const tableRows = await (await table.$('tbody')).$$('tr');
        return tableRows.length;
    }

    /**
    * @returns total number of header columns in table
    */
    async getColumnsCount() {
        const table = await this.nativeTableLocator;
        const tableColumns = await (await table.$$('th'));
        return tableColumns.length;
    }

    /**
    * @param rowText - text to search in all rows of table
    * @param inColumn - text to search in column number table
    * @returns row number where text contains matches
    */
    async getRowNumberContainingText(rowText: string, inColumn: number) {
        let tableRowText: string = null;
        let rowNumber: number = null;
        const table = await this.nativeTableLocator;
        const noOfRows = await this.getRowCount();
        console.log("No of Rows: ", noOfRows);
        const row = await (await table.$('tbody')).$$('tr td:nth-child(' + inColumn + ')');
        let rows: number = row.length;
        if (rows > 1) {
            for (let i: number = 0; i <= noOfRows - 1; i++) {
                tableRowText = (await row[i].getText()).trim();
                if (tableRowText.toLowerCase().includes(rowText.toLowerCase())) {
                    rowNumber = i;
                    break;
                }
            }
        } else {
            tableRowText = await (await row[0].getText()).trim();
            if (tableRowText.includes(rowText.toLowerCase())) {
                rowNumber = 0;
            }
        }

        return rowNumber + 1;
    }


}