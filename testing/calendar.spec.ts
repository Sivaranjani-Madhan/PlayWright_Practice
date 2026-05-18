import {test, expect} from '@playwright/test'

test("Handling Calendar", async ({page})=>{

    await page.goto("https://www.hyrtutorials.com/p/calendar-practice.html")
    await page.locator(".ui-datepicker-trigger").click()

    const targetDay="6"
    const targetMonth="November"
    const targetYear="2027"

    const monthPicker= await page.locator(".ui-datepicker-month")
    const yearPicker = await page.locator(".ui-datepicker-year")

    while((await monthPicker.textContent()!== targetMonth) || (await yearPicker.textContent()!==targetYear))
    {
        await page.getByText("Next", {exact: true}).click()
    }
    await page.getByText(targetDay, {exact: true}).last().click()
    await page.waitForTimeout(2000)
})