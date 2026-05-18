import {test, expect} from '@playwright/test';
import { DashboardPage } from '../pages/DashboardPage';
import { LoginPage } from '../pages/LoginPage';
import dashboardDatas from '../testdata/dashboardTestData.json'

let lp : LoginPage
let dp : DashboardPage

test.beforeEach(async ({page})=> {
    lp = new LoginPage(page)
    dp = new DashboardPage(page)
})

for(let dashboardData of dashboardDatas) {
test(`Verify that user is able to search product and add to cart successfully for ${dashboardData.productName}`, async ()=> {
    await lp.launchURL(dashboardData.url)
    await lp.loginToApplication(dashboardData.email, dashboardData.password)
    await dp.SearchProduct(dashboardData.productName, 1)
    await expect(dp.addToCartSuccessMessage).toHaveText("Product Added To Cart")
    await dp.SearchProduct(dashboardData.productName, 0)
    await expect(dp.viewPageProductName).toHaveText(dashboardData.productName)
})}
