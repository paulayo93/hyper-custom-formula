import HyperFormula from 'hyperformula';
import {tableData} from './data';
import { Discount } from "./discountFunctionPlugin";


HyperFormula.registerFunctionPlugin(Discount, Discount.translations);

// Create an empty HyperFormula instance.
const hf = HyperFormula.buildEmpty({
    licenseKey: "gpl-v3",
    useArrayArithmetic: true,
});

const sheetName = hf.addSheet("CostSheet");
const sheetId = hf.getSheetId(sheetName);

// hf.DISCOUNT();


hf.setCellContents({
    row: 0,
    col: 0,
    sheet: sheetId
},
tableData
);

export {hf, sheetName, sheetId};


