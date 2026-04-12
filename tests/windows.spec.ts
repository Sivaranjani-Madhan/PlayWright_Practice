import { test, expect } from "@playwright/test";

test("Windows Handling", async ({page})=>{

    await page.goto("https://demo.automationtesting.in/Windows.html")
    const page1=page.waitForEvent("popup")
    await page.getByRole("button", {name:'click'}).click()
    const newPage=await page1

    await newPage.getByText("Downloads", {exact:true}).click()
    await expect(newPage.locator("#bindings")).toContainText("WebDriver Language Bindings")

    await page.bringToFront()
    await page.waitForTimeout(2000)
    await page.getByText("Home").click()
    await expect(page.getByPlaceholder("Email id for Sign Up")).toBeVisible()

})