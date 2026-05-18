import { Locator, Page } from "playwright";

export class DashboardPage
{
    
    page: Page
    products : Locator
    addToCartSuccessMessage : Locator
    viewPageProductName : Locator

    constructor(page: Page)
    {
        this.page = page
        this.products = page.locator("div.card-body")
        this.addToCartSuccessMessage = page.locator("#toast-container")
        this.viewPageProductName = page.locator("div.rtl-text h2")
    }

    async SearchProduct(productName:string, index:number)
    {
        //using nth() to click on specific button of the product
        await this.products.filter({hasText: `${productName}`}).locator("button").nth(index).click()

       //using last() to click on last button of the product
       // await this.products.filter({hasText: productName}).locator("button").last().click()

        // using loop to find the product and click on add to cart button
        // const count = await this.products.count()
        // for(let i=0; i<count; i++)
        // {
        //     const product = await this.products.nth(i).locator("h5").textContent()
        //     if(product === productName)
        //     {
        //         await this.products.nth(i).locator("button").last().click()
        //         break
        //     }
        // }
    }

    //  async SearchAndViewProduct(productName:string)
    // {
    //     await this.products.filter({hasText: productName}).locator("button").first().click()
    //     // using loop to find the product and click on add to cart button
    //     // const count = await this.products.count()
    //     // for(let i=0; i<count; i++)
    //     // {
    //     //     const product = await this.products.nth(i).locator("h5").textContent()
    //     //     if(product === productName)
    //     //     {
    //     //         await this.products.nth(i).locator("button").first().click()
    //     //         break
    //     //     }
    //     // }
    // }


}