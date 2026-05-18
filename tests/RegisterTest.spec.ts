import {test, expect} from '@playwright/test'

import { RegisterPage } from '../pages/RegisterPage';

import registerData from '../Testdata/RegisterTestData.json'


let rp: RegisterPage


test.beforeEach( async ({page})=>{

   rp = new RegisterPage(page)
  await  rp.launchURL(registerData.url)

})

test("valid Register test", async ({page})=>{

rp = new RegisterPage(page)
rp.validRegister(registerData.firstName, registerData.lastName, registerData.email, registerData.phoneNumber, registerData.gender, registerData.password, registerData.confirmPassword)
await rp.occupation.selectOption(registerData.selectoccuption)
 await expect(rp.toastMessage).toHaveText("Registered Successfully")
        await expect(rp.verifyRegister).toHaveText("Account Created Successfully")

})

test("invalid Register - empty first name", async ({page})=>{
    rp = new RegisterPage(page)
    await rp.lastName.fill(registerData.lastName)
    await rp.email.fill(registerData.email)
    await rp.phoneNumber.fill(registerData.phoneNumber)
    await rp.genderRadio(registerData.gender).check()
    await rp.occupation.selectOption(registerData.selectoccuption)
    await rp.password.fill(registerData.password)
    await rp.confirmPassword.fill(registerData.confirmPassword)
    await rp.acceptCheck.check()
    await rp.registerButton.click()
    await expect(rp.errorMessage).toBeVisible()
    await expect(rp.errorMessage).toContainText("First Name is required")
})


test("invalid Register - invalid email", async ({page})=>{
    rp = new RegisterPage(page)
    await rp.firstName.fill(registerData.firstName)
    await rp.lastName.fill(registerData.lastName)
    await rp.email.fill("invalidemail")
    await rp.phoneNumber.fill(registerData.phoneNumber)
    await rp.genderRadio(registerData.gender).check()
    await rp.occupation.selectOption(registerData.selectoccuption)
    await rp.password.fill(registerData.password)
    await rp.confirmPassword.fill(registerData.confirmPassword)
    await rp.acceptCheck.check()
    await rp.registerButton.click()
    await expect(rp.errorMessage).toBeVisible()
    await expect(rp.errorMessage).toContainText("*Enter Valid Email")
})

test("invalid Register - empty phone number", async ({page})=>{
    rp = new RegisterPage(page)
    await rp.firstName.fill(registerData.firstName)
    await rp.lastName.fill(registerData.lastName)
    await rp.email.fill(registerData.email)
    await rp.genderRadio(registerData.gender).check()
    await rp.occupation.selectOption(registerData.selectoccuption)
    await rp.password.fill(registerData.password)
    await rp.confirmPassword.fill(registerData.confirmPassword)
    await rp.acceptCheck.check()
    await rp.registerButton.click()
    await expect(rp.errorMessage).toBeVisible()
    await expect(rp.errorMessage).toContainText("Phone Number is required")
})

test("invalid Register - password mismatch", async ({page})=>{
    rp = new RegisterPage(page)
    await rp.firstName.fill(registerData.firstName)
    await rp.lastName.fill(registerData.lastName)
    await rp.email.fill(registerData.email)
    await rp.phoneNumber.fill(registerData.phoneNumber)
    await rp.genderRadio(registerData.gender).check()
    await rp.occupation.selectOption(registerData.selectoccuption)
    await rp.password.fill(registerData.password)
    await rp.confirmPassword.fill("DifferentPassword@123")
    await rp.acceptCheck.check()
    await rp.registerButton.click()
    await expect(rp.errorMessage).toBeVisible()
    await expect(rp.errorMessage).toContainText("Password and Confirm Password must match with each other")
})

test("invalid Register - terms not accepted", async ({page})=>{
    rp = new RegisterPage(page)
    await rp.firstName.fill(registerData.firstName)
    await rp.lastName.fill(registerData.lastName)
    await rp.email.fill(registerData.email)
    await rp.phoneNumber.fill(registerData.phoneNumber)
    await rp.genderRadio(registerData.gender).check()
    await rp.occupation.selectOption(registerData.selectoccuption)
    await rp.password.fill(registerData.password)
    await rp.confirmPassword.fill(registerData.confirmPassword)
    await rp.registerButton.click()
    await expect(rp.notAcceptCheck).toBeVisible()
    await expect(rp.notAcceptCheck).toContainText("Please check above checkbox")})

test("invalid Register - weak password", async ({page})=>{
    rp = new RegisterPage(page)
    await rp.firstName.fill(registerData.firstName)
    await rp.lastName.fill(registerData.lastName)
    await rp.email.fill(registerData.email)
    await rp.phoneNumber.fill(registerData.phoneNumber)
    await rp.genderRadio(registerData.gender).check()
    await rp.occupation.selectOption(registerData.selectoccuption)
    await rp.password.fill("123")
    await rp.confirmPassword.fill("123")
    await rp.acceptCheck.check()
    await rp.registerButton.click()
    await expect(rp.toastMessage).toBeVisible()
    await expect(rp.toastMessage).toContainText(" Password must be 8 Character Long! ")
})

