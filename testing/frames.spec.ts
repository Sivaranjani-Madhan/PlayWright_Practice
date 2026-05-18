import { test, expect } from "@playwright/test";

test("Handling frames", async ({page})=>{

    await page.goto("https://demo.automationtesting.in/Frames.html")
    const framePage1=await page.frameLocator("#Single iframe")
    await framePage1.locator("div.col-xs-6 input").fill("Testing")
    await expect(framePage1.locator("div.col-xs-6 input")).toHaveValue("Testing")

    await page.getByText("Iframe with in an Iframe").click()

    const outerFrame1=await page.frameLocator("#Multiple iframe")
    const innerFrame=await outerFrame1.frameLocator("div.iframe-container iframe")
    await innerFrame.locator("div.col-xs-6 input").first().fill("Inner Frame")
    await expect(innerFrame.locator("div.col-xs-6 input").first()).toHaveValue("Inner Frame")

    await page.getByText("Home").click()
    await expect(page.getByPlaceholder("Email id for Sign Up")).toBeVisible()
})