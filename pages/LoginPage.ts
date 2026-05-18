import { Locator, Page } from "@playwright/test";

export class LoginPage
{

    page : Page
    username : Locator
    password : Locator
    loginButton : Locator
    verifyLogin : Locator
    homePageIdentifier : Locator
    

    constructor(page:Page)
    {
        this.page=page
        this.username= this.page.getByPlaceholder("email@example.com")
        this.password=this.page.getByPlaceholder("enter your passsword")
        this.loginButton=this.page.getByRole('button', {name: 'Login'})
        this.verifyLogin=this.page.locator("#toast-container")
        this.homePageIdentifier=this.page.locator(".fa-sign-out")

    }

    async launchURL(url:string)
    {
        await this.page.goto(url)
    }

    async loginToApplication(username:string, password:string)
    {
        await this.username.fill(username)
        await this.password.fill(password)
        await this.loginButton.click()
    }

    async invalidLogin(username:string, incorrectPasssword:string)
    {
        await this.username.fill(username)
        await this.password.fill(incorrectPasssword)
        await this.loginButton.click()
    }
}
