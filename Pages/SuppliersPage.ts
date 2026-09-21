import { expect, Locator, Page } from "@playwright/test";

export class SuppliersPage{

    // declare properties for suppliers
    page:Page
    readonly cliclSupplierLink:Locator
    readonly clickAddIconButton:Locator
    readonly supplierNumber:Locator
    readonly supplierNameInput:Locator
    readonly supplierAddress:Locator
    readonly supplierCity:Locator
    readonly supplierCountry:Locator
    readonly supplierContactPerson:Locator
    readonly supplierPhoneNumber:Locator
    readonly supplierEmail:Locator
    readonly supplierMobileNumber:Locator
    readonly supplierNotes:Locator
    readonly clickAddButton:Locator
    readonly clickConfirm:Locator
    readonly clickAlert:Locator
    readonly searchPanel:Locator
    readonly searchTextbox:Locator
    readonly searchButton:Locator
    //readonly supplierGrid:Locator
    private expNumber!: string
    // create constructor
    constructor(page:Page)
{
    this.page=page
    this.cliclSupplierLink = this.page.locator('#mi_a_suppliers')
    this.clickAddIconButton = this.page.locator('span[data-phrase="AddLink"]').first()
    this.supplierNumber = this.page.locator('#x_Supplier_Number')
    this.supplierNameInput = this.page.getByPlaceholder('Supplier Name')
    this.supplierAddress = this.page.getByPlaceholder('Address')
    this.supplierCity = this.page.getByPlaceholder('City')
    this.supplierCountry = this.page.getByPlaceholder('Country')
    this.supplierContactPerson = this.page.getByPlaceholder('Contact Person')
    this.supplierPhoneNumber = this.page.getByPlaceholder('Phone Number')
    this.supplierEmail = this.page.getByPlaceholder('Email')
    this.supplierMobileNumber = this.page.getByPlaceholder('Mobile Number')
    this.supplierNotes = this.page.getByPlaceholder('Notes')
    this.clickAddButton = this.page.locator('#btnAction')
    this.clickConfirm = this.page.locator('button.ajs-button.btn.btn-primary')
    this.clickAlert = this.page.locator('button.ajs-button.btn.btn-primary')
    this.searchPanel = this.page.locator('[data-caption="Search Panel"]')
    this.searchTextbox = this.page.locator('#psearch')
    this.searchButton = this.page.locator('#btnsubmit')
    //this.supplierGrid = this.page.locator('#mi_a_suppliers')
}
//method for navigate to supplier add page
    async NavigateToSupplier()
    {
        await this.cliclSupplierLink.waitFor()
        await this.cliclSupplierLink.click()
        await this.clickAddIconButton.waitFor()
        await this.clickAddIconButton.click()
    }
    //method for fill supplier deatils
    async AddSupplierDeatils(sname:string,address:string,city:string,country:string,
        cperson:string,pnumber:string,email:string,mnumber:string,notes:string)
        {
             await this.supplierNumber.waitFor()
            this.expNumber = await this.supplierNumber.inputValue()
            await this.supplierNameInput.fill(sname)
            await this.supplierAddress.fill(address)
            await this.supplierCity.fill(city)
            await this.supplierCountry.fill(country)
            await this.supplierContactPerson.fill(cperson)
            await this.supplierPhoneNumber.fill(pnumber)
            await this.supplierEmail.fill(email)
            await this.supplierMobileNumber.fill(mnumber)
            await this.supplierNotes.fill(notes)
            await this.clickAddButton.click()
        }
        //method for confirm and alert dialog
        async handleAlerts()
        {
            await this.clickConfirm.waitFor()
            await this.clickConfirm.click()
            await this.clickAlert.waitFor()
            await this.clickAlert.click()
        }
        //method for supplier table
         async supplierTable() {

        if (!await this.searchTextbox.isVisible()) {
            await this.searchPanel.click();
        }
         await this.searchTextbox.clear()
        await this.searchTextbox.fill(this.expNumber)

        await this.searchButton.click();

        const supplierRow =this.page.locator('#tbl_a_supplierslist tbody tr',
                {
                    hasText: this.expNumber
                })

        await expect(supplierRow).toBeVisible();

        console.log(`Supplier Number Found in Table: ${this.expNumber}`)
        await expect(supplierRow).toContainText(this.expNumber)
    }
}
