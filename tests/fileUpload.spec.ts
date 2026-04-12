import { test, expect } from "@playwright/test";
import path from 'path';

test("File upload handling", async({page})=>{

   await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")
   console.log(__dirname);
   const filePath1=path.join(__dirname,"../Testdata/sample3.txt")
   const filePath2=path.join(__dirname,"../Testdata/sample1.txt")

   await page.locator("#filesToUpload").setInputFiles([filePath1,filePath2])
   await expect(page.locator("#fileList li").first()).toContainText("sample3.txt")
   await expect(page.locator("#fileList li").last()).toContainText("sample1.txt")

   await page.waitForTimeout(2000)


})