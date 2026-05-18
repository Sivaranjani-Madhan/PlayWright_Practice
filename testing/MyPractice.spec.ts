import { test, expect } from "@playwright/test";

test("My practice1", async ({ page }) => {
  await page.goto("https://demoqa.com/automation-practice-form");
  await page.locator("#firstName").fill("test");
  await page.locator("#lastName").fill("user");
  await page.locator("#userEmail").fill("abc@gmail.com");
  await page.getByRole("radio", { name: "Female" }).check();
  await page.waitForTimeout(2000);
  await page.locator("#userNumber").fill("9876543210");
  await page.locator(".subjects-auto-complete__input").fill("playwright");
  await page.getByLabel("Music").check();
  await page.locator("#currentAddress").fill("test address, chennai");
  await page.locator("#react-select-3-input").click();
  await page.locator("#react-select-3-option-0").click();
  await page.waitForTimeout(2000);
  await page.locator("#city").click();
  await page.locator("#react-select-4-option-0").click();
  await page.waitForTimeout(2000);
  await page.getByRole("button", { name: "Submit" }).click();
  await page.waitForTimeout(2000);
});

test("My practice2", async ({ page }) => {
  await page.goto("https://freelance-learn-automation.vercel.app/login");
  await page.locator(".subLink").click();
  await page.locator("#name").fill("Test");
  await page.locator("#email").fill("test@gmail.com");
  await page.locator("#password").fill("abc@123");
  await page.getByLabel("PythonD").check();
  await page.getByLabel("AWS").check();
  await page.locator("#gender2").check();
  const stateValue = await page.locator("#state");
  await stateValue.selectOption("Tamil Nadu");
  await page.getByText("Dancing").click();
  await page.getByRole("button", { name: "Sign up" }).click();
  await page.waitForTimeout(2000);

  await page.locator("//a [@class='subLink']").click();
});

test("My practice3", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.getByPlaceholder("Enter Name").fill("Sivaranjani");
  await page.locator("#email").fill("sivu@gmail.com");
  await page.locator("//input[@id='phone']").fill("97546583669");
  await page.getByLabel("Address:").fill("test address, chennai");
  await page.getByRole("radio", { name: "Female" }).check();
  await page.getByLabel("Wednesday").check();
  const countryValue = await page.locator("#country");
  await countryValue.selectOption("China");
  const colorsValue = await page.locator("#colors");
  await colorsValue.selectOption({ value: "green" });
  const animalValue = await page.locator("#animals");

  const targetDay1 = "6";
  const targetMonth1 = "November";
  const targetYear1 = "2025";
  await page.locator("#datepicker").first().click();
  const monthPicker1 = await page.locator(".ui-datepicker-month");
  const yearPicker1 = await page.locator(".ui-datepicker-year");

  while (
    (await monthPicker1.textContent()) !== targetMonth1 ||
    (await yearPicker1.textContent()) !== targetYear1
  ) {
    await page.getByText("Prev", { exact: true }).click();
  }
  await page.getByText(targetDay1, { exact: true }).last().click();
});

test.only("My Practice3", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
//   await page.locator(".radioButton").first().check();
//   await page.getByPlaceholder("Type to Select Countries").type("India");
//   await page.locator("div.ui-menu-item-wrapper").last().click();
//   const selectValue = page.locator("#dropdown-class-example");
//   await selectValue.selectOption({ value: "option1" });
//   await page.locator("#checkBoxOption1").check();

//   //new window
//   const page1 = page.waitForEvent("popup");
//   await page.getByRole("button", { name: "Open Window" }).click();
//   const newPage = await page1;
//   await expect(newPage.locator("div.max-w-7xl h1")).toContainText(
//     ".Consulting",
//   );

//   //new tab
//   const page2 = page.waitForEvent("popup");
//   await page.getByText("Open Tab").click();
//   const newPage2 = await page2;
//   await expect(newPage2.locator("._title_yr8cq_26")).toContainText(
//     "Foundations of Modern Higher Education",
//   );

//   await page.bringToFront();

//   //handle alert
//   page.on("dialog", async (dialog) => {
//     console.log(dialog.message());
//     await dialog.accept();
//   });

//   await page.locator("//input[@value='Alert']").click();

//   await page.locator("//input[@value='Confirm']").click();

  //Handling the web table

  //const table1=  page.locator("#product").nth(1)
  const rows = page.locator("#product").nth(0).locator("tbody tr");

  //to print the table data in console
  const namematch = rows.filter({
    hasText: "WebSecurity Testing for Beginners-QA knowledge to next level",
  });

   console.log(await namematch.first().textContent());


  //to print all the rows in console
  for(let i=0; i< await rows.count(); i++){
    const rowText = await rows.nth(i).textContent();
    console.log(rowText?.replace(/\t/g, ' '));
  }
  
});
