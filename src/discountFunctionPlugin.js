import { FunctionPlugin, CellError, ErrorType } from "hyperformula";
/**
 * Custom function plugin.
 */
export class Discount extends FunctionPlugin {
  discount(ast, state) {
    return this.runFunction(
      ast.args,
      state,
      this.metadata("DISCOUNT"),
      function (arg1) {
        let discount = 0;

        let [quantity, price] = arg1.data[0];

        if (quantity >= 100) {
          discount = parseFloat(quantity * price * 0.1).toFixed(2);
        }

        return discount;
      }
    );
  }
}

// Static property with the custom functions definitions
Discount.implementedFunctions = {
  DISCOUNT: {
    method: "discount",
    isVolatile: true,
    arrayFunction: true,
    parameters: [
      {
        /** you must set the argumentType value to enjoy the benefit of cell range access */
        argumentType: "ANY",
        optionalArg: true,
      },
    ],
  },
};

// Static property with the custom functions translations
Discount.translations = {
  enGB: {
    DISCOUNT: "DISCOUNT",
  },
};
