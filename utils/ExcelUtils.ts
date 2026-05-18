import xlsx from 'xlsx';

export class ExcelUtils {

    static getExcelData(filePath: string, sheetName: string) {

        try{
        const wb=xlsx.readFile(filePath)
       // const ws=wb.Sheets.sheetName
        const sheet=wb.Sheets[sheetName]
        const data = xlsx.utils.sheet_to_json(sheet)
        return data
        }
         catch (error) {
    console.error("Error occurred while fetching Excel data:", error)
}
    }
    }
