import {test, expect} from "@playwright/test"

import { LoginPage } from "../pages/LoginPage"

import data from "../Testdata/loginTestData.json"

let lp: LoginPage

test.beforeEach(async ({page})=>{

     lp= new LoginPage(page)
    await lp.launchURL(data.url)

})


test("valid login", async ({page})=>{

    
    await lp.loginToApplication(data.username, data.passsword)
    await expect(lp.verifyLogin).toHaveText("Login Successfully")
    await expect(lp.homePageIdentifier).toBeVisible()

})
test("invalid login", async ({page})=>{
    await lp.invalidLogin(data.username, data.incorrectPasssword)
    await expect(lp.verifyLogin).toHaveText("Incorrect email or password.")
})