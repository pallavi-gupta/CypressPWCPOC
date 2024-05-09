class gstr1{

    //Locators
    menu = "//mat-icon[contains(text(), 'menu')]"
    Return = "//li[contains(@class,'main-menu ng-star-inserted')]//span[text()= 'Returns']"
    GSTR1 = "//li[contains(@class,'main-menu ng-star-inserted')]//span[text()= 'GSTR-1']"
    Fetch = "//div[contains(@class,'page-step-container')]//div[text()=' Fetch ']"
    AllCheckbox="//th[1]//label"
    AbortBtn = "//button[contains(text(),'Abort')]"
    SuccesAbortText = "//*[@class='cdk-overlay-container']//*[contains(text(),'Fetch Aborted Successfully')]"
    StateDropddown = "//div[text()='State']/parent::div/following-sibling::span"
    StateTextbox = "//div[contains(text(),'State')]/parent::div//input[@role='combobox']"
    SelectAll = "//span[contains(text(), ' Select all ')]"
    SelectDelhi = "//*[@title='Delhi']"
    FinancialYrDropdown = "//div[text()='Financial Year']/parent::div/following-sibling::span"
    FinancialYrTextbox = "//div[contains(text(),'Financial Year')]/parent::div//input[@role='combobox']"
    SelectFinYr = "(//span[contains(text(),'2023 - 2024')]/parent::div)[2]"
    ApplyBtn = "//button[contains(text(),'Apply')]"
    yrListValue = "//div[@class='ng-dropdown-panel-items scroll-host']//span"
    stateListValue = "//*[@class='scrollable-content']/div"
    ExcelIcon = "//*[@iconbutton='ic_excel']//button"
    

   // Functions
    navigateToGSTR1(){
        cy.xpath(this.menu).click()
        cy.xpath(this.Return).click()
        cy.xpath(this.GSTR1).click()
        cy.wait(1000)
    }

    naviagateToFetch(){
    cy.xpath(this.Fetch).click()
    }

    FilterState(){
        cy.xpath(this.StateDropddown).click()
        cy.xpath(this.StateTextbox).type("Delhi",{delay:500})
        cy.xpath(this.SelectAll).click()
        cy.xpath(this.SelectDelhi).click({force: true})   
    }


    FilterFinancialYear(){
        cy.xpath(this.FinancialYrDropdown).click()
        cy.fixture('testData').then( (data)=>{
            cy.xpath(this.FinancialYrTextbox).type(data.FinancialYear)
            cy.xpath(this.yrListValue).each(($e1 , index , $list) =>{
                cy.log($e1.text())
                if($e1.text() === data.FinancialYear){
                    cy.wrap($e1).click()
                }
            })
    
        })

  }

    clickApply(){
        cy.xpath(this.ApplyBtn).click()
        console.info("Apply done")
    //    cy.wait(500)  
    }

    verifyAbortFunctionality(){
    cy.wait(5000)    
    cy.xpath(this.AllCheckbox).click()
    cy.xpath(this.AbortBtn).click()
    cy.xpath(this.SuccesAbortText).should('be.visible')
    console.info("Download File Start")
    }

    verifyDownloadedFile(){
        console.info("Download File Start")
        cy.xpath(this.ExcelIcon).click()
        cy.wait(1000) 
        cy.readFile("cypress/downloads/GSTR1StatusReport.xlsx")
    }
}

export default gstr1