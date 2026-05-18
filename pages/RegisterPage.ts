import { expect, Locator, Page, test } from "@playwright/test"

export class RegisterPage {
    page: Page
    firstName: Locator
    lastName: Locator
    email: Locator
    phoneNumber: Locator
    occupation: Locator
    password: Locator
    confirmPassword: Locator
    acceptCheck: Locator
    registerButton: Locator
    toastMessage: Locator
    verifyRegister: Locator
    errorMessage: Locator
    notAcceptCheck: Locator

    constructor(page: Page) {
        this.page = page
        this.firstName = this.page.getByPlaceholder("First Name")
        this.lastName = this.page.getByPlaceholder("Last Name")
        this.email = this.page.getByPlaceholder("email@example.com")
        this.phoneNumber = this.page.getByPlaceholder("enter your number")
        this.occupation = this.page.locator(".custom-select")
        this.password = this.page.getByPlaceholder("Passsword", { exact: true })
        this.confirmPassword = this.page.getByPlaceholder("Confirm Passsword")
        this.acceptCheck = this.page.locator("//input[@type='checkbox']")
        this.registerButton = this.page.locator("//input[@type='submit']")
        this.toastMessage = this.page.locator("#toast-container")
        this.verifyRegister = this.page.locator("div.login-wrapper h1")
        this.errorMessage = this.page.locator(".invalid-feedback")
        this.notAcceptCheck = this.page.locator("//div[contains(text(), 'Please check above checkbox')]")
    }

    genderRadio(value: string) {
      return this.page.getByRole('radio', { name: value });
    }

    // genderRadio(value: string) {
    //     return this.page.locator('input[type="radio"]').filter({ hasText: value });
    // }

    async launchURL(url: string) {
        await this.page.goto(url)
    }

    async validRegister(firstName: string, lastName: string, email: string, phoneNumber: string, gender: string, password: string, confirmPassword: string) {
        await this.firstName.fill(firstName)
        await this.lastName.fill(lastName)
        await this.email.fill(email)
        await this.phoneNumber.fill(phoneNumber)
        await this.genderRadio(gender).check();
        await this.password.fill(password)
        await this.confirmPassword.fill(confirmPassword)
        await this.acceptCheck.check()
        await this.registerButton.click()
    }


}
