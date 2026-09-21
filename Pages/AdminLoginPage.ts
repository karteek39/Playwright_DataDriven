import { expect, Locator, Page } from "@playwright/test";

export class AdminLoginPage{
     
    // declare properties and locators for login page
    page: Page
    readonly userNameInput: Locator
    readonly passWordInput: Locator
    readonly loginButton: Locator
    HomePageIdentifier: Locator

    // create constructor to initialize all locators

    constructor(page:Page)
    {
        this.page = page
        this.userNameInput = page.getByRole('textbox',{name:'User Name'})
        this.passWordInput = page.getByRole('textbox',{name:'Password'})
        this.loginButton = page.getByRole('button',{name:'Login'})
        this.HomePageIdentifier = page.locator('#ewBreadcrumb2')
    }

    // create method for launching url

    async launchUrl(url:string)
        {
            await this.page.goto(url)
        }
    
    // method for login

    async ERPLogin(user:string,pass:string)
    {
        await this.userNameInput.waitFor()
        await this.userNameInput.clear()
        await this.userNameInput.fill(user)
        await this.passWordInput.clear()
        await this.passWordInput.fill(pass)
        await this.loginButton.click()
        await expect(this.HomePageIdentifier).toBeVisible()
    }

}