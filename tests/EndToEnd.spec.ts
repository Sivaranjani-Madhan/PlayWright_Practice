
let productName = "ZARA COAT 3"
let email="sivu369@gmail.com"
let country="Singapore"


import {test,expect} from '@playwright/test'

test("Register", async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
    await page.getByText("Register").first().click()
    await page.getByPlaceholder("First Name").fill("Sivaranjani")
    await page.getByPlaceholder("Last Name").fill("Madhan")
    await page.getByPlaceholder("email@example.com").fill("sivu369@gmail.com")
    await page.getByPlaceholder("enter your number").fill("8754658369")
    const occupationddvalue=await page.locator(".custom-select")
    await occupationddvalue.selectOption("Engineer")
    await page.getByLabel("Female").click()
    await page.getByPlaceholder("Passsword",{exact: true}).fill("Ranjani@369")
    await page.getByPlaceholder("Confirm Passsword").fill("Ranjani@369")
    await page.locator("//input[@type='checkbox']").check()
    await page.locator("//input[@type='submit']").click()
    await page.waitForTimeout(2000)

})



test("End to end test1", async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
    await page.getByPlaceholder("email@example.com").fill("sivu369@gmail.com")
    await page.getByPlaceholder("enter your passsword").fill("Ranjani@369")
    await page.locator("#login").click()
    await expect(page.locator(".fa-sign-out")).toBeVisible()
    const products=page.locator("div.card-body")
    await products.nth(0).waitFor()
    await products.filter({hasText:`${productName}`}).locator("button").last().click()
    await expect(page.locator("#toast-container")).toHaveText("Product Added To Cart")
    await page.locator("[routerlink='/dashboard/cart']").click()

    //verifying the values in cart
    await expect(page.locator("div.cartSection h3")).toHaveText(`${productName}`)
    await page.getByRole('button', {name:'Checkout'}).click()
    await expect(page.locator("div.user__name input").first()).toHaveValue(email)
    await page.locator("div.form-group input").last().pressSequentially("sin")
    const ddResult= page.locator("section.ta-results button")
    await ddResult.nth(0).waitFor()
    await ddResult.filter({hasText:`${country}`}).click()
    await page.getByText("Place Order").click()
    await expect(page.locator("h1.hero-primary")).toContainText("Thankyou")
    const orderID= await page.locator("label.ng-star-inserted").textContent()
    //console.log(orderID)
    const orderValue=orderID?.replaceAll("|","").trim()
    await page.locator("[routerlink='/dashboard/myorders']").first().click()

    await expect(page.locator("table tbody")).toBeVisible()
    const rows= page.locator("table tbody tr")
    await rows.filter({hasText: `${orderValue}`}).locator("button").first().click()
    await expect(page.locator("div.col-text")).toHaveText(orderValue!)
    await page.waitForTimeout(2000)

})