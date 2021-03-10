const expect=require('chai').expect

export default class HistoryPage{

    async clickHistory(){
        await page.waitFor(4000)
        const element2 = await page.waitForSelector('[ng-reflect-tooltip="History"]', { visible: true });
        await element2.click();
    }

    async clickExportButton(){
        await page.waitFor(10000)
        const  exportbtn = (await page.$x("//button[contains(text(),'EXPORT')]"))
        exportbtn[0].click()
    }

    async clickDownload(){
        await page.waitFor(8000)
        await page.waitForSelector('[class="fas fa-download downloads-list-button"]')
        await page.click('[class="fas fa-download downloads-list-button"]')
    }

    async validateTheDownlaod(){
        await page.waitFor(20000)
        await page.waitForSelector('[class="badge badge-danger downloads-list-badge small ng-star-inserted"]')
        const text3=await page.$eval('[class="badge badge-danger downloads-list-badge small ng-star-inserted"]',element => element.textContent)
       expect(text3).to.be.a('string',"1")
    }

    async validateDownlaodedFile(){

        await page.waitFor(10000)
     
    
        await page.waitForSelector('#dropdown-basic > ul > li:nth-child(1) > ul > li > a > div > div > div > div.name > div')
        await page.evaluate(() => {
        const uiElement = document.querySelector('#dropdown-basic > ul > li:nth-child(1) > ul > li > a > div > div > div > div.name > div')
        uiElement.click();
        })
    }
}
