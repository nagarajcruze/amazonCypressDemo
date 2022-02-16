/// <reference types="cypress" />
// ***********************************************************
/**
 * @type {Cypress.PluginConfig}
 */
const xlsx = require('xlsx');
const fs = require('fs')
module.exports = (on) => {
  on("task", {
    generateJSON(args) {
      const wb = xlsx.readFile(args.excelFilePath)
      const ws = wb.Sheets[args.sheetName];
      return xlsx.utils.sheet_to_json(ws);
    }
  });
}